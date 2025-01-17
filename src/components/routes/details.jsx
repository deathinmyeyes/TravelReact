export default function Details ({ attraction }) {
  if (!attraction) return null;

  return (
    <div id="details" className="route__details">
      <h2>{attraction.name}</h2>
      <div className="route__details-wrapper">
        <p>{attraction.descriptions[0]}</p>
        <img src={attraction.images[0]} alt="Image" />
      </div>
      <div className="route__details-wrapper">
        <img src={attraction.images[1]} alt="Image" />
        <p>{attraction.descriptions[1]}</p>
      </div>
      <h2>Мы на карте</h2>
      {attraction.location}
    </div>
  );
};
