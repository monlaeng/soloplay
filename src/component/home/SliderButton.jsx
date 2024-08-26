import React from "react";
import 'asset/css/slider.css'
function SliderControls({ currentSlide, slides, goToSlide }) {
  return (
    <div className="slider-controls">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={currentSlide === index ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <div className="slide-indicator">
        {currentSlide + 1}/{slides.length}
      </div>
    </div>
  );
}

export default SliderControls;
