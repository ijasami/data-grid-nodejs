import React from "react";
import { Product } from "types/Product";

interface RowProps {
  product: Product;
}

const Row: React.FC<RowProps> = ({ product, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      onDelete(product.id); // Call the onDelete function passed from DataGrid
    }
  };
  return (
    <tr>
      <td>{product.location}</td>
      <td>{"$" + product.potentialRevenue}</td>
      <td>{"$" + product.competitorProcessing}</td>
      <td>{product.competitorMerchant}</td>
      <td>{product.revenuePerAccount}</td>
      <td>{product.marketShare}</td>
      <td>{product.ddaActions}</td>
      <td>
        <button onClick={handleDelete} className="deleteButton">
          X
        </button>
      </td>
    </tr>
  );
};

export default Row;
