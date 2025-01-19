export default function Filters ({ setSortBy, setOrder, setFilterByDistrict, setFilterByType, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="route__functional">
      <div className="route__input-wrapper">
        <input
          type="text"
          id="searchInput"
          placeholder="Поиск..."
          onKeyDown={handleKeyDown}
        />
      </div>
      <div id="filters">
        <select id="filterByDistrict" onChange={(e) => setFilterByDistrict(e.target.value)}>
          <option value="">Выберите район</option>
          <option value="Калининский">Калининский</option>
          <option value="Центральный">Центральный</option>
          <option value="Курчатовский">Курчатовский</option>
          <option value="Ленинский">Ленинский</option>
        </select>
        <select id="filterByType" onChange={(e) => setFilterByType(e.target.value)}>
          <option value="">Выберите тип</option>
          <option value="Завод">Завод</option>
          <option value="Театр">Театр</option>
          <option value="Зоопарк">Зоопарк</option>
          <option value="Музей">Музей</option>
        </select>
      </div>
      <div className="route__dropdown" id="dropdown">
        <button className="route__dropbtn">Сортировка</button>
        <div id="myDropdown" className="route__dropdown-content">
          <button id="sortByCategory" onClick={() => { setSortBy('category'); setOrder('asc'); }}>По категории</button>
          <button id="sortByRating" onClick={() => { setSortBy('rating'); setOrder('desc'); }}>По рейтингу</button>
        </div>
      </div>
    </div>
  );
};