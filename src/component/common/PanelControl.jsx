import React, { useEffect } from 'react';
import photosImg from 'asset/img/photos.png';
import M from  'materialize-css/dist/js/materialize.min.js';


function PanelControl(props) {

    useEffect(() => {
        // 사이드바 초기화
        const sidenavElems = document.querySelectorAll('#slide-out-left');
        M.Sidenav.init(sidenavElems);
    }, []);

    return (
        <div className="panel-control-left">
            <ul id="slide-out-left" className="side-nav collapsible" data-collapsible="accordion">
                <li>
                    <div className="photos">
                        <img src={photosImg} alt="" />
                        <h3>Mario Doe</h3>
                    </div>
                </li>
                <li className="first-list">
                    <div className="collapsible-header"><i className="fa fa-home"></i>Home <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="home-store.html">Home Store</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-shopping-bag"></i>Store <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="home-store.html">Home Store</a></li>
                            <li><a href="product-details.html">Product Details</a></li>
                            <li><a href="shopping-cart.html">Shopping Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-rss"></i>Blog <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-support"></i>Features <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="accordion.html">Accordion</a></li>
                            <li><a href="calendar.html">Calendar</a></li>
                            <li><a href="carousel.html">Carousel</a></li>
                            <li><a href="carousel2.html">Carousel 2</a></li>
                            <li><a href="chat.html">Chat</a></li>
                            <li><a href="collapsible.html">Collapsible</a></li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="features.html">Features</a></li>
                            <li><a href="icons.html">Icons</a></li>
                            <li><a href="modals.html">Modals</a></li>
                            <li><a href="parallax.html">Parallax</a></li>
                            <li><a href="service.html">Service</a></li>
                            <li><a href="slider.html">Slider</a></li>
                            <li><a href="table.html">Table</a></li>
                            <li><a href="tabs.html">Tabs</a></li>
                            <li><a href="timeline.html">Timeline</a></li>
                            <li><a href="audio.html">Audio</a></li>
                            <li><a href="video.html">Video</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-image"></i>Gallery <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="gallery1.html">Gallery 1</a></li>
                            <li><a href="gallery2.html">Gallery 2</a></li>
                            <li><a href="gallery3.html">Gallery 3</a></li>
                            <li><a href="gallery-card1.html">Gallery Card 1</a></li>
                            <li><a href="gallery-card2.html">Gallery Card 2</a></li>
                            <li><a href="gallery-card3.html">Gallery Card 3</a></li>
                            <li><a href="gallery-circle1.html">Gallery Circle 1</a></li>
                            <li><a href="gallery-circle2.html">Gallery Circle 2</a></li>
                            <li><a href="gallery-circle3.html">Gallery Circle 3</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-th-large"></i>Portfolio <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="portfolio1.html">Portfolio 1</a></li>
                            <li><a href="portfolio2.html">Portfolio 2</a></li>
                            <li><a href="portfolio3.html">Portfolio 3</a></li>
                            <li><a href="portfolio-card1.html">Portfolio Card 1</a></li>
                            <li><a href="portfolio-card2.html">Portfolio Card 2</a></li>
                            <li><a href="portfolio-card3.html">Portfolio Card 3</a></li>
                            <li><a href="portfolio-circle1.html">Portfolio Circle 1</a></li>
                            <li><a href="portfolio-circle2.html">Portfolio Circle 2</a></li>
                            <li><a href="portfolio-circle3.html">Portfolio Circle 3</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-file-powerpoint-o"></i>Pages <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="404.html">404 Page</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="client.html">Client</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="forum.html">Forum</a></li>
                            <li><a href="forum-single.html">Forum Single</a></li>
                            <li><a href="gallery2.html">Gallery</a></li>
                            <li><a href="portfolio2.html">Portfolio</a></li>
                            <li><a href="maintenance.html">Maintenance</a></li>
                            <li><a href="process.html">Process</a></li>
                            <li><a href="service.html">Service</a></li>
                            <li><a href="step.html">Step</a></li>
                            <li><a href="testimonial.html">Testimonial</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="fa fa-mobile"></i>App <span><i className="fa fa-chevron-right"></i></span></div>
                    <div className="collapsible-body">
                        <ul className="side-nav-panel">
                            <li><a href="calendar.html">Calendar</a></li>
                            <li><a href="chat.html">Chat</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="reset-password.html">Reset Password</a></li>
                            <li><a href="setting.html">Settings</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="contact.html"><i className="fa fa-envelope"></i>Contact us</a>
                </li>
                <li>
                    <a href="login.html"><i className="fa fa-sign-in"></i>Login</a>
                </li>
                <li>
                    <a href="register.html"><i className="fa fa-user-plus"></i>Register</a>
                </li>
            </ul>
        </div>
    );
}

export default PanelControl;
