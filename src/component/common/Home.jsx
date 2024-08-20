import React from "react";

function Home(props) {
  return (
    <div>
      {/* slider */}
      <div className="slider-slick app-pages">
        <div className="slider-entry">
          <img src="/asset/img/slider1.jpg" alt="" />
          <div className="overlay"></div>
          <div className="caption">
          <div className="who-we-are app-section">
        <div className="container">
          <div className="app-title">
            <h4>응애응애</h4>
            <div className="line"></div>
          </div>
          <div className="entry">
            <p>
             우리 뭔 서비스인지 소개 
            </p>
            <button className="button">Read More</button>
          </div>
          
        </div>
      </div>
            <div className="container">
            </div>
          </div>
        </div>
        <div className="slider-entry">
          <div className="overlay"></div>
          <img src="img/slider2.jpg" alt="" />
          <div className="caption">
            <div className="container">
              <h2>레이드 목록</h2>
              <p>Lorem Ipsum Dolor Sit Meta</p>
              <button className="button">Read More</button>
            </div>
          </div>
        </div>
        <div className="slider-entry">
          <div className="overlay"></div>
          <img src="img/slider2.jpg" alt="" />
          <div className="caption">
            <div className="container">
              <h2>스탬프 목록</h2>
              <p>Lorem Ipsum Dolor Sit Meta</p>
              <button className="button">Read More</button>
            </div>
          </div>
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
                <i className="fa fa-android"></i>
                <h5>레이드</h5>
                <p>진행중인 레이드</p>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-drupal"></i>
                <h5>테마 추천</h5>
                <p>테마</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-wordpress"></i>
                <h5>카드 추천</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-joomla"></i>
                <h5>리워드</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end our services */}


   
        {/* <div className="slider-entry">
          <div className="overlay"></div>
          <img src="img/slider3.jpg" alt="" />
          <div className="caption">
            <div className="container">
              <h2>Perfect Templates</h2>
              <p>Lorem Ipsum Dolor Sit Meta</p>
              <button className="button">Read More</button>
            </div>
          </div> 
        </div>*/}
      </div>
      {/* end slider */}

      {/* who we are */}
      {/* end who we are */}

      <div className="portfolio app-section">
        <div className="container">
          <div className="app-title">
            <h4>OUR PORTFOLIO</h4>
            <div className="line"></div>
          </div>
          <ul className="portfolio-filter">
            <li data-filter="all" className="active">
              All
            </li>
            <li data-filter="1">카드 대분류1 </li>
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
    </div>
  );
}

export default Home;
