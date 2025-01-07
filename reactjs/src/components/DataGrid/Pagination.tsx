import React from "react";
import styles from "../../styles/DataGrid.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) => (
  <div className={styles.pagination}>
    <button
      onClick={() => onPageChange(1)}
      disabled={currentPage === 1}
      className={styles.pageButton}
    >
      First
    </button>
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={styles.pageButton}
    >
      Previous
    </button>
    <div className={styles.pageNumbers}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <span
            key={pageNumber}
            className={`${styles.pageNumber} ${
              currentPage === pageNumber ? styles.activePage : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        )
      )}
    </div>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={styles.pageButton}
    >
      Next
    </button>
    <button
      onClick={() => onPageChange(totalPages)}
      disabled={currentPage === totalPages}
      className={styles.pageButton}
    >
      Last
    </button>
    <select
      value={rowsPerPage}
      onChange={onRowsPerPageChange}
      className={styles.rowsPerPageDropdown}
    >
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
    </select>
  </div>
);

export default Pagination;
