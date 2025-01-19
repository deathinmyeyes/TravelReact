import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Filters from '../components/routes/filters';
import RouteList from '../components/routes/routeList';
import Pagination from '../components/routes/pagination';
import Loader from '../components/routes/loader';
import Details from '../components/routes/details';
import Gallery from '../components/routes/gallery';

export default function RoutePage () {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');
  const [filterByDistrict, setFilterByDistrict] = useState('');
  const [filterByType, setFilterByType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const fetchRoutes = async ({ queryKey }) => {
    const [, page, sortBy, order, filterByDistrict, filterByType, searchTerm] = queryKey;
    const params = {
      page,
      limit: 10,
      sortBy,
      order,
      district: filterByDistrict,
      type: filterByType,
      search: searchTerm,
    };

    try {
      const response = await axios.get('https://672b170d976a834dd0258e17.mockapi.io/api/v1/tourism', { params });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Ошибка загрузки данных: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      throw error;
    }
  };

  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ['routes', currentPage, sortBy, order, filterByDistrict, filterByType, searchTerm],
    queryFn: fetchRoutes,
    keepPreviousData: true,
    onError: (error) => {
      console.error('Ошибка загрузки данных:', error);
    },
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleShowDetails = (attraction) => {
    setSelectedAttraction(attraction);
  };

  const handleCloseDetails = () => {
    setSelectedAttraction(null);
  };

  if (isLoading) return <Loader />;
  if (isError) {
    return (
      <div className="error-message">
        <p>Произошла ошибка при загрузке данных.</p>
        {error.response?.status === 404 && (
          <p>Данные не найдены. Пожалуйста, проверьте параметры фильтрации.</p>
        )}
      </div>
    );
  }

  return (
    <section className="route">
      <div id="route_wrap">
        <Filters
          setSortBy={setSortBy}
          setOrder={setOrder}
          setFilterByDistrict={setFilterByDistrict}
          setFilterByType={setFilterByType}
          onSearch={handleSearch}
        />
        <RouteList data={data} onShowDetails={handleShowDetails} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          hasNextPage={data.length > 0}
        />
        {selectedAttraction && (
          <Details attraction={selectedAttraction} onClose={handleCloseDetails} />
        )}
        <Gallery />
      </div>
    </section>
  );
};