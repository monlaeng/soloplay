import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// 외부 라이브라리 및 프레임워크
import "materialize-css/dist/css/materialize.min.css";

import "asset/css/font-awesome.min.css";
import "asset/css/slick.css";
import "asset/css/slick-theme.css";
import "asset/css/owl.carousel.css";
import "asset/css/owl.theme.css";
import "asset/css/owl.transitions.css";
import "asset/css/lightbox.min.css";
import "asset/css/style.css";
import "asset/css/theme.css"; /** 테마 메뉴 통합 css 추가 */


// 컴포넌트
import App from "App";

import PointTransfer from "component/point/PointTransfer";
import PointMain from "component/point/PointMain";
import Home from "component/common/Home";
import RaidMap from 'component/raid/RaidMap';
import ThemeSearchMain from "component/theme/ThemeSearchMain"; /** 테마 메인페이지 겸 전체 테마 조회 페이지 추가 */
import MyThemeSearch from "component/theme/MyThemeSearch"; /** 나의 테마 조회 페이지 추가 */
import ThemeDetail from "component/theme/ThemeDetail"; /** 테마 상세조회 페이지 추가 */
import MyThemeDetail from "component/theme/MyThemeDetail"; /** 나의 테마 상세조회 페이지 추가 */
import ThemeRegister from "component/theme/ThemeRegister"; /** 테마 등록 페이지 추가 */
import TransferComplete from "component/point/TransferComplete";
import CouponMain from "component/coupon/CouponMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* 메인 */}
          <Route index element={<Home />} />
          {/* 포인트 */}
          <Route path="/point" element={<PointMain />} />
          <Route path="/point/transfer" element={<PointTransfer />} />
          <Route
            path="/point/transfer/complete"
            element={<TransferComplete />}
          />
          {/* 쿠폰 */}
          <Route path="/coupon" element={<CouponMain />} />
          {/* 레이드 */}
          <Route path='/raidMap' element={<RaidMap />}></Route>
          {/* 테마 */}
          <Route path="/themeSearchAll" element={<ThemeSearchMain />} /> {/** 테마 메인(전체 테마 조회) 페이지 */}
          <Route path="/myThemeSearch" element={<MyThemeSearch />} /> {/** 나의 테마 조회 페이지 */}
          <Route path="/themeDetail" element={<ThemeDetail />} /> {/** 테마 상세 페이지 - 테마번호에 따른 동적 페이지로 구현 예정 */}
          <Route path="/myThemeDetail" element={<MyThemeDetail />} /> {/** 나의 테마 상세 페이지 - 테마번호에 따른 동적 페이지로 구현 예정 */}
          <Route path="/themeRegister" element={<ThemeRegister />} /> {/** 테마 등록 페이지 */}
  
      </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
