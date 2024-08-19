import React, { useEffect } from "react";
import photosImg from "asset/img/photos.png";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function PanelControl(props) {
  useEffect(() => {
    // 사이드바 초기화
    const sidenavElems = document.querySelectorAll("#slide-out-left");
    M.Sidenav.init(sidenavElems);

    // 선택한 모든 .collapsible 요소를 초기화
    const collapsibleElems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibleElems);

    const accordionElems = document.querySelectorAll(".accordion");
    M.Collapsible.init(accordionElems);
  }, []);

  return (
    <div
      className="panel-control-left"
      style={{ position: "fixed", zIndex: 20 }}
    >
      <ul
        id="slide-out-left"
        className="side-nav collapsible"
        data-collapsible="accordion"
      >
        <li>
          <div className="photos">
            <img src={photosImg} alt="" />
            <h3>YangxGeon</h3>
          </div>
        </li>
        <li className="first-list">
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-credit-card"></i>카드관리
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <Link to="/card">카드 조회</Link>
              </li>
              <li>
                <a href="index.html">사용 내역 조회</a>
              </li>
              <li>
                <a href="index.html">카드 추천</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-users"></i>SOL로 플레이
            {/* fa fa-heart, fa fa-paw 이것도 괜찮고*/}
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <Link to="/themeSearchAll">테마 관리</Link>
              </li>
              <li>
                <Link to="/raidMap">레이드</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-krw"></i>리워드 관리{" "}
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <Link to="/point">포인트 관리</Link>
              </li>
              <li>
                <Link to="/coupon">쿠폰 관리</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-star"></i>이벤트
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <a href="accordion.html">Accordion</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-phone"></i>고객센터
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <a href="gallery1.html">Gallery 1</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-address-book"></i>마이페이지
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <a href="portfolio1.html">Portfolio 1</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-file-powerpoint-o"></i>Pages
          </div>
          <div className="collapsible-body" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <a href="about.html">About Us</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header"
            style={{ borderBottom: "none", padding: "1.5rem" }}
          >
            <i className="fa fa-mobile"></i>App
          </div>
          <div className="collapsible-bodyi" style={{ borderBottom: "none" }}>
            <ul className="side-nav-panel">
              <li>
                <a href="calendar.html">Calendar</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="login.html">
            <i className="fa fa-sign-in"></i>Login
          </a>
        </li>
        <li>
          <a href="register.html">
            <i className="fa fa-user-plus"></i>Register
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PanelControl;
