export default function Pagination ({ currentPage, setCurrentPage, hasNextPage }) {
  return (
    <div className="route__pagination" id="pagination">
      {currentPage > 1 && (
        <button
          className="route__pagination-pBtn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </button>
      )}
      <p>{currentPage}</p>
      {hasNextPage && (
        <button
          className="route__pagination-nBtn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};
