function Pagination({ currentPage, totalPages, goToPage }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-1 transition border rounded disabled:opacity-50 hover:bg-gray-100"
      >
        Anterior
      </button>

      <span className="flex items-center font-medium">
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-1 transition border rounded disabled:opacity-50 hover:bg-gray-100"
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;
