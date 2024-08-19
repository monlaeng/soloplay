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

// 컴포넌트
import App from "App";
import PointTransfer from "component/point/PointTransfer";
import PointMain from "component/point/PointMain";
import Home from "component/common/Home"; 
import RaidMap from "component/raid/RaidMap";
import TransferComplete from "component/point/TransferComplete";
import CouponMain from "component/coupon/CouponMain";
import CardList from "component/card/CardList";
import CardUsageHistory from "component/card/CardUsageHistory"; 

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
          {/* 라우터 추가 */} 
          <Route path='/raidMap' element={<RaidMap />}></Route>
          {/* 카드 */}
          <Route path='card' element={<CardList />}></Route>
          <Route path='cardusage' element={<CardUsageHistory />} />
          </Route>    
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
