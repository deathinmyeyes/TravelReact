import useDataManager from "../components/routes/dataManager";
import UI from "../components/routes/userInterface";
import Pagination from "../components/routes/pagination";
import Details from "../components/routes/details";
import Gallery from "../components/routes/gallery";
import ReviewManager from "../components/routes/reviewManager";

export default function RoutesPage () {
  const {
    data,
    isLoading,
    currentPage,
    setCurrentPage,
    sortBy,
    setSortBy,
    order,
    setOrder,
    filterByDistrict,
    setFilterByDistrict,
    filterByType,
    setFilterByType,
    searchTerm,
    setSearchTerm,
  } = useDataManager();

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (type) => {
    setSortBy(type);
    setOrder(type === "rating" ? "desc" : "asc");
    setCurrentPage(1);
  };

  const handleFilterChange = (type, value) => {
    if (type === "district") {
      setFilterByDistrict(value);
    } else if (type === "type") {
      setFilterByType(value);
    }
    setCurrentPage(1);
  };

  return (
    <div>
      <UI
        data={data}
        isLoading={isLoading}
        onSearch={handleSearch}
        onSort={handleSort}
        onFilterChange={handleFilterChange}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasNextPage={data.length === 10}
      />
      <ReviewManager />
    </div>
  );
};