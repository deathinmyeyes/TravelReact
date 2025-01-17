import { useState, useEffect } from "react";

export default function useDataManager () {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [filterByDistrict, setFilterByDistrict] = useState("");
  const [filterByType, setFilterByType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const urlParams = new URLSearchParams({
      page: currentPage,
      limit: itemsPerPage,
      sortBy,
      order,
      district: filterByDistrict,
      type: filterByType,
      search: searchTerm,
    });

    try {
      const response = await fetch(
        `https://672b170d976a834dd0258e17.mockapi.io/api/v1/tourism?${urlParams.toString()}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, sortBy, order, filterByDistrict, filterByType, searchTerm]);

  return {
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
  };
};
