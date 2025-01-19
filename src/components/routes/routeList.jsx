export default function RouteList ({ data, onShowDetails }) {
  return (
    <div className="route__wrapper" id="data">
      {data.map((item) => (
        <div key={item.id} className="route__card">
          <img src={item.image} alt="Image" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <a href="/route/1" onClick={() => onShowDetails(item)}>Подробнее</a>
        </div>
      ))}
    </div>
  );
};