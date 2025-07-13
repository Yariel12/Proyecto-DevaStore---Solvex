import { useState, useMemo } from "react";

export function usePagination(totalItems, itemsPerPage = 8) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return { currentPage, totalPages, goToPage, setCurrentPage };
}
