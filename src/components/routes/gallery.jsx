import { useState } from 'react';

export default function Gallery () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openGallery = (images, index) => {
    setImages(images);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="gallery" className={`route__gallery ${isOpen ? 'show' : ''}`}>
      <span className="route__gallery-close" onClick={closeGallery}>X</span>
      <img id="galleryImage" className="route__gallery-image" src={images[currentImageIndex]} alt="Gallery Image" />
      <button className="route__gallery-prev" onClick={prevImage}>назад</button>
      <button className="route__gallery-next" onClick={nextImage}>вперед</button>
    </div>
  );
};