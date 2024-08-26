import React, { useEffect } from "react";
import photosImg from "asset/img/photos.png";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

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
      style={{ position: "fixed", zIndex: 5 ,marginTop: "-5px"}}
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
                <Link to="/cardList">카드 조회</Link>
              </li>
              <li>
                <Link to="/cardUsage">카드 사용 내역</Link>
              </li>
              <li>
                <Link to="/cardRecommend">카드 추천</Link>
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
                <Link to="/MainTest">레이드</Link>
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
      </ul>
    </div>
  );
}

export default PanelControl;
