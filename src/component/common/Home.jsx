import React, { useState, useEffect } from "react";
import test from "asset/image/test.jpg";
import completeIcon from "asset/image/completeIcon.png";
import controller from "asset/image/controller.png";
import card from "asset/image/card.png";
import point from "asset/image/point.png";
import recommand from "asset/image/recommand.png";


function Home(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: test, alt: "Slide 1", title: "응애응애", description: "우리 뭔 서비스인지 소개" },
    { src: completeIcon, alt: "Slide 2", title: "테스트2", description: "테스트2 테스트2" },
    { src: controller, alt: "Slide 3", title: "테스트3", description: "테스트3 테스트3" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5초

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* slider */}
      <div className="slider-slick app-pages">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-entry ${currentSlide === index ? "active" : ""}`}
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 2 : 1,
              position: 'absolute', // 모든 슬라이드가 겹쳐지도록 설정
              width: '100%',
              top: 0,
              left: 0,
              transition: 'opacity 0.5s ease-in-out', // 부드러운 전환 효과
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
      {/* end slider */}

      {/* 슬라이드 컨트롤 버튼 */}
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
      </div>

      {/* 슬라이드 개수 표시 */}
      <div className="slide-indicator">
        {currentSlide + 1}/{slides.length}
      </div>

      {/* our services */}
      <div className="service app-section app-bg-dark">
        <div className="container">
          <div className="app-title">
            <h4>OUR SERVICES</h4>
            <div className="line"></div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="entry">
                <img src={point} alt="Point Icon" style={{ width: '50px', height: '50px' }} />
                <h5>레이드</h5>
                <p>진행중인 레이드</p>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <img src={recommand} alt="Recommand Icon" style={{ width: '50px', height: '50px' }} />
                <h5>테마 추천</h5>
                <p>테마</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="entry">
                <img src={card} alt="Card Icon" style={{ width: '50px', height: '50px' }} />
                <h5>카드 추천</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <img src={test} alt="Test Icon" style={{ width: '50px', height: '50px' }} />
                <h5>리워드</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end our services */}

      {/* portfolio */}
      <div className="portfolio app-section">
        <div className="container">
          <div className="app-title">
            <h4>OUR PORTFOLIO</h4>
            <div className="line"></div>
          </div>
          <ul className="portfolio-filter">
            <li data-filter="all" className="active">All</li>
            <li data-filter="1">카드 대분류1</li>
            <li data-filter="2">카드 대분류2</li>
            <li data-filter="3">카드 대분류3</li>
            <li data-filter="4">카드 대분류4</li>
            <li data-filter="5">카드 대분류5</li>
          </ul>
          <div className="portfolio-item">
            <div className="row">
              <div className="col s6 filtr-item" data-category="1, 2">
                <a href="img/portfolio1.jpg" data-lightbox="image-1">
                  <img src="img/portfolio1.jpg" alt="" />
                </a>
              </div>
              <div className="col s6 filtr-item" data-category="2, 3">
                <a href="img/portfolio2.jpg" data-lightbox="image-1">
                  <img src="img/portfolio2.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col s6 filtr-item" data-category="3, 3">
                <a href="img/portfolio3.jpg" data-lightbox="image-1">
                  <img src="img/portfolio3.jpg" alt="" />
                </a>
              </div>
              <div className="col s6 filtr-item" data-category="3, 1">
                <a href="img/portfolio4.jpg" data-lightbox="image-1">
                  <img src="img/portfolio4.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col s6 filtr-item" data-category="2">
                <a href="img/portfolio5.jpg" data-lightbox="image-1">
                  <img src="img/portfolio5.jpg" alt="" />
                </a>
              </div>
              <div className="col s6 filtr-item" data-category="2, 1">
                <a href="img/portfolio6.jpg" data-lightbox="image-1">
                  <img src="img/portfolio6.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end portfolio */}

      {/* 슬라이드 전환을 위한 스타일 */}
      <style jsx>{`
        .slider-slick {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 500px; /* 원하는 높이로 설정 */
        }

        .slider-entry {
          position: absolute;
          width: 100%;
          height: 100%; /* 슬라이드의 전체 높이를 차지하도록 수정 */
          top: 0; /* 모든 슬라이드의 top을 0으로 설정 */
          left: 0;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          z-index: 1;
        }

        .slider-entry.active {
          opacity: 1;
          z-index: 2;
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .slider-controls button {
          margin: 0 5px;
          padding: 5px 10px;
          cursor: pointer;
          border: none;
          background-color: #ccc;
          color: white;
          font-size: 16px;
        }

        .slider-controls .active {
          background-color: #333;
        }

        .slide-indicator {
          text-align: center;
          margin-top: 10px;
          font-size: 18px;
          color: #666;
        }
      `}</style>
    </div>
  );
}

export default Home;


      {/* portfolio */}
      {/* end portfolio */}

      {/* offers */}
      {/* <div className="offers app-section app-bg-dark">
        <div className="container">
          <div className="app-title">
            <h4>FEATURES</h4>
            <div className="line"></div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-desktop"></i>
                <h5>Responsive</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <span>
                  <a href="">
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-send"></i>
                <h5>Super Fast</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <span>
                  <a href="">
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-heart"></i>
                <h5>Awesome</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <span>
                  <a href="">
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-support"></i>
                <h5>Support</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <span>
                  <a href="">
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* end offers */}

      {/* testimonial */}
      {/* <div className="testimonial">
        <div className="container">
          <div className="app-title">
            <h4>PEOPLE SAYS</h4>
            <div className="line"></div>
          </div>
          <div id="testimonial" className="testimonial owl-carousel owl-theme">
            <div className="item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo inventore, numquam assumenda nihil totam sunt, ipsum
                nemo distinctio ipsa voluptates magni enim.
              </p>
              <img src="img/testimonial1.png" alt="" />
              <h6>Mario Doe</h6>
              <strong>Web Developer</strong>
            </div>
            <div className="item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo inventore, numquam assumenda nihil totam sunt, ipsum
                nemo distinctio ipsa voluptates magni enim.
              </p>
              <img src="img/testimonial2.png" alt="" />
              <h6>Mario Doe</h6>
              <strong>Web Developer</strong>
            </div>
            <div className="item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo inventore, numquam assumenda nihil totam sunt, ipsum
                nemo distinctio ipsa voluptates magni enim.
              </p>
              <img src="img/testimonial3.png" alt="" />
              <h6>Mario Doe</h6>
              <strong>Web Developer</strong>
            </div>
          </div>
        </div>
      </div> */}
      {/* end testimonial */}