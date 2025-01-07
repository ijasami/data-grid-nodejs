import React, { useState, useEffect, useMemo } from "react";
import { formatValue, calculateTotals } from "../../utils/helper";
import styles from "../../styles/DataGrid.module.css";
import Dropdown from "./Dropdown";
import { Product } from "types/Product";
import TableHeader from "./TableHeader";
import Row from "./Row";
import Pagination from "./Pagination";

const DataGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [dropdownValue, setDropdownValue] = useState<string>("Location");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "ascending" | "descending" | null;
  }>({
    key: null,
    direction: null,
  });

  useEffect(() => {
    getProducts();
  }, [rowsPerPage, currentPage]);

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `http://localhost:5000/api/products?page=${currentPage}&limit=${rowsPerPage}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setTotalPages(data.totalPages);
      setProducts(data.products);
    } catch (error) {
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const totals = calculateTotals(products);

  const handleSort = (key: string) => {
    const direction =
      sortConfig.direction === "ascending" ? "descending" : "ascending";
    const sortedData = [...products].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setProducts(sortedData);
    setSortConfig({ key, direction });
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdownValue(event.target.value);
  };

  const updatedData = useMemo(() => {
    return products.map((row) => {
      const split = row.location.split(" - ");
      return dropdownValue === "Location"
        ? { ...row, location: split[0] || "" }
        : { ...row, location: split[1] || "" };
    });
  }, [products, dropdownValue]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleDelete = async (productId: string) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      alert("Product deleted successfully");
    } catch (error) {
      alert("Error deleting product. Please try again.");
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Dropdown value={dropdownValue} onChange={handleDropdownChange} />
      <table className={styles.dataGrid}>
        <TableHeader totals={totals} dropdownValue={dropdownValue} handleSort={handleSort} />
        <tbody>
          {updatedData.length === 0 ? (
            <tr>
              <td colSpan={5}>No products available</td>
            </tr>
          ) : (
            updatedData.map((product) => (
              <Row key={product.id} product={product} onDelete={handleDelete} />
            ))
          )}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default DataGrid;
