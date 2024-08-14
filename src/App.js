import NavBar from "component/common/NavBar";
import PanelControl from "component/common/PanelControl";
import PointMain from "component/point/PointMain";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import PointTransfer from "component/point/PointTransfer";
import Footer from "component/common/Footer";
import Home from "component/common/Home";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <div className="main">
          <PanelControl />
          <div className="content">
            {/* 현재 경로에 맞는 자식 컴포넌트를 렌더링 */}
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
