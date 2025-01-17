import { useState } from "react";

export default function Gallery ({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div id="gallery" className="route__gallery">
      <span className="route__gallery-close" onClick={() => setShowGallery(false)}>
        X
      </span>
      <img
        id="galleryImage"
        className="route__gallery-image"
        src={images[currentImageIndex]}
        alt="Gallery Image"
      />
      <button className="route__gallery-prev" onClick={prevImage}>
        &lt;
      </button>
      <button className="route__gallery-next" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};