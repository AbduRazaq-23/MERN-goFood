import React, { useState } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center bg-gray-800"
        style={{ height: "100%" }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
