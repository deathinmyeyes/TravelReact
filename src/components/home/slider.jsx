import { useState, useEffect } from 'react';
import Slide1 from '/img/home_images/main__slider1.png';
import Slide2 from '/img/home_images/main__slider2.png';
import Slide3 from '/img/home_images/main__slider3.png';
import Slide4 from '/img/home_images/main__slider4.png';

export default function MainSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [Slide1, Slide2, Slide3, Slide4];

  const showPreviousSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(showNextSlide, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="main__slider-wrapper">
      <div className="main__slider">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            style={{ display: index === slideIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <button className="main__prev-button" aria-label="Посмотреть предыдущий слайд" onClick={showPreviousSlide}>
        &lt;
      </button>
      <button className="main__next-button" aria-label="Посмотреть следующий слайд" onClick={showNextSlide}>
        &gt;
      </button>
    </div>
  );
}