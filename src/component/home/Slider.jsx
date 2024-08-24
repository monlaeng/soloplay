import React from "react";
import 'asset/css/slider.css'
function Slider({ slides, currentSlide }) {
  return (
    <div className="slider-slick app-pages">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-entry ${currentSlide === index ? "active" : ""}`}
          style={{
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 2 : 1,
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="overlay"></div>
          <div className="caption">
            <div className="who-we-are app-section">
              <div className="container">
                <div className="app-title">
                  <h4>{slide.title}</h4>
                  <div className="line"></div>
                </div>
                <div className="entry">
                  <p>{slide.description}</p>
                  <button className="button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
