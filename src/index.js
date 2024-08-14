import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PointMain from 'component/point/PointMain';

import 'asset/css/font-awesome.min.css';
import 'asset/css/materialize.min.css';
import 'asset/css/slick.css';
import 'asset/css/slick-theme.css';
import 'asset/css/owl.carousel.css';
import 'asset/css/owl.theme.css';
import 'asset/css/owl.transitions.css';
import 'asset/css/lightbox.min.css';
import 'asset/css/style.css';
import RaidMap from 'component/raid/RaidMap';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <BrowserRouter>
      <Routes>
        <Route path='/point' element={<PointMain />}></Route>
        <Route path='/raidMap' element={<RaidMap />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
