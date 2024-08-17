import NavBar from "component/common/NavBar";
import PanelControl from "component/common/PanelControl";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "component/common/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">        
        <div className="main">
          <PanelControl /> {/* 좌측에 위치 */}
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
