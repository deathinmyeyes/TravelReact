import { useState, useEffect } from 'react';
import axios from 'axios';

export default ReviewManager = ({ attractionId }) => {
  const [reviews, setReviews] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  const fetchReviews = async () => {
    const response = await axios.get(`https://672b170d976a834dd0258e17.mockapi.io/api/v1/reviews?attractionId=${attractionId}`);
    setReviews(response.data);
  };

  useEffect(() => {
    fetchReviews();
  }, [attractionId]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const name = e.target.reviewName.value;
    const text = e.target.reviewText.value;

    if (!name || !text || selectedRating === 0) {
      alert('Пожалуйста, заполните все поля и выберите рейтинг');
      return;
    }

    try {
      await axios.post('https://672b170d976a834dd0258e17.mockapi.io/api/v1/reviews', {
        attractionId,
        name,
        text,
        rating: selectedRating,
      });
      fetchReviews();
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error);
    }
  };

  return (
    <div id="reviewsContainer">
      <form id="reviewForm" onSubmit={handleSubmitReview}>
        <h1>Оставить отзыв</h1>
        <p>Введите имя:</p>
        <input type="text" id="reviewName" placeholder="Ваше имя" required />
        <p>Введите ваш отзыв:</p>
        <textarea id="reviewText" placeholder="Ваш отзыв" required />
        <p>Поставьте оценку:</p>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${selectedRating >= value ? 'selected' : ''}`}
              onClick={() => setSelectedRating(value)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Оставить отзыв</button>
      </form>
      <div className="stats">
        <p>Количество отзывов: <span id="totalReviews">{reviews.length}</span></p>
        <p>Средняя оценка: <span id="averageRating">
          {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length || 0).toFixed(1)}
        </span></p>
      </div>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h3>{review.name}</h3>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <span key={value} className={`star ${review.rating >= value ? 'selected' : ''}`}>★</span>
              ))}
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};