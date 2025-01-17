export default function UI ({ data, isLoading, onSearch, onSort, onFilterChange }) {
  return (
    <section className="route">
      <div id="route_wrap">
        <div className="route__functional">
          <div className="route__input-wrapper">
            <input
              type="text"
              id="searchInput"
              placeholder="Поиск..."
              onChange={(e) => onSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
            />
          </div>
          <div id="filters">
            <select
              id="filterByDistrict"
              onChange={(e) => onFilterChange("district", e.target.value)}
            >
              <option value="">Выберите район</option>
              <option value="Калининский">Калининский</option>
              <option value="Центральный">Центральный</option>
              <option value="Курчатовский">Курчатовский</option>
              <option value="Ленинский">Ленинский</option>
            </select>
            <select
              id="filterByType"
              onChange={(e) => onFilterChange("type", e.target.value)}
            >
              <option value="">Выберите тип</option>
              <option value="Завод">Завод</option>
              <option value="Театр">Театр</option>
              <option value="Зоопарк">Зоопарк</option>
              <option value="Музей">Музей</option>
            </select>
          </div>
          <div className="route__dropdown" id="dropdown">
            <button
              onClick={() => document.getElementById("myDropdown").classList.toggle("show")}
              className="route__dropbtn"
            >
              Сортировка
            </button>
            <div id="myDropdown" className="route__dropdown-content">
              <button id="sortByCategory" onClick={() => onSort("category")}>
                По категории
              </button>
              <button id="sortByRating" onClick={() => onSort("rating")}>
                По рейтингу
              </button>
            </div>
          </div>
        </div>
        <div className="route__wrapper" id="data">
          {isLoading ? (
            <div id="loader">
              <img src="./img/25.gif" alt="loader" />
            </div>
          ) : (
            data.map((item) => (
              <div className="route__card" key={item.id}>
                <img src={item.image} alt="Image" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <a href="/route/1" onClick={() => Details.showDetails(item.id)}>
                  Подробнее
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
