import React from "react";

function Home(props) {
  return (
    <div>
      {/* slider */}
      <div className="slider-slick app-pages">
        <div className="slider-entry">
          <img src="img/slider1.jpg" alt="" />
          <div className="overlay"></div>
          <div className="caption">
            <div className="container">
              <h2>Clean Templates</h2>
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
              <h2>Awesome Features</h2>
              <p>Lorem Ipsum Dolor Sit Meta</p>
              <button className="button">Read More</button>
            </div>
          </div>
        </div>
        <div className="slider-entry">
          <div className="overlay"></div>
          <img src="img/slider3.jpg" alt="" />
          <div className="caption">
            <div className="container">
              <h2>Perfect Templates</h2>
              <p>Lorem Ipsum Dolor Sit Meta</p>
              <button className="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
      {/* end slider */}

      {/* who we are */}
      <div className="who-we-are app-section">
        <div className="container">
          <div className="app-title">
            <h4>WHO WE ARE</h4>
            <div className="line"></div>
          </div>
          <div className="entry">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit accusamus unde ipsam est, deserunt mollitia
              inventore soluta consectetur, ea maxime odit vel, quaerat
              necessitatibus voluptatibus? Maiores modi voluptate, in soluta!
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>
      {/* end who we are */}

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
                <h5>Android</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-drupal"></i>
                <h5>Drupal</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-wordpress"></i>
                <h5>Wordpress</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <div className="col s6">
              <div className="entry">
                <i className="fa fa-joomla"></i>
                <h5>Joomla</h5>
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
            <li data-filter="all" className="active">
              All
            </li>
            <li data-filter="1">Nature</li>
            <li data-filter="2">Abstract</li>
            <li data-filter="3">Objects</li>
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

      {/* offers */}
      <div className="offers app-section app-bg-dark">
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
      </div>
      {/* end offers */}

      {/* testimonial */}
      <div className="testimonial">
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
      </div>
      {/* end testimonial */}
    </div>
  );
}

export default Home;
