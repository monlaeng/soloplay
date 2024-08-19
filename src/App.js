import NavBar from "component/common/NavBar";
import PanelControl from "component/common/PanelControl";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "component/common/Footer";
import { useState } from "react";

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = (event) => {
    event.preventDefault(); // 기본 링크 동작 방지
    console.log("요청 가냐?????????");
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <NavBar togglePanel={togglePanel} />
      <div className="App">
        <div className="main">
          {isPanelOpen && <PanelControl />} {/* 사이드바 표시 여부 */}
          <div className="content">
            {/* 현재 경로에 맞는 자식 컴포넌트를 렌더링 */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
