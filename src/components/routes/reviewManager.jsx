import { useState, useEffect } from "react";

export default function ReviewManager () {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const fetchReviews = async () => {
    const response = await fetch("https://672b170d976a834dd0258e17.mockapi.io/api/v1/reviews");
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      name: e.target.reviewName.value,
      text: e.target.reviewText.value,
      rating,
    };
    await fetch("https://672b170d976a834dd0258e17.mockapi.io/api/v1/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    fetchReviews();
  };

  return (
    <div>
      <form id="reviewForm" onSubmit={handleSubmit}>
        <h1>Оставить отзыв</h1>
        <input type="text" id="reviewName" placeholder="Ваше имя" required />
        <input id="reviewText" placeholder="Ваш отзыв" required />
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="star" onClick={() => setRating(star)}>
              {star <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <button type="submit">Оставить отзыв</button>
      </form>
      <div id="reviewsContainer">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>{star <= review.rating ? "★" : "☆"}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};