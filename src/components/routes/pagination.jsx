export default function Pagination ({ currentPage, setCurrentPage, hasNextPage }) {
  return (
    <div className="route__pagination" id="pagination">
      {currentPage > 1 && (
        <button className="route__pagination-pBtn" onClick={() => setCurrentPage(currentPage - 1)}>
          {'<'}
        </button>
      )}
      <p style={{ fontSize: '20px' }}>{currentPage}</p>
      {hasNextPage && (
        <button className="route__pagination-nBtn" onClick={() => setCurrentPage(currentPage + 1)}>
          {'>'}
        </button>
      )}
    </div>
  );
};
