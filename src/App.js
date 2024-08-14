import Footer from 'component/common/Footer';
import './App.css';
import NavBar from 'component/common/NavBar';
import PanelControl from 'component/common/PanelControl';
import Home from 'component/common/Home';
import PointMain from 'component/point/PointMain';
import PointTransfer from 'component/point/PointTransfer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='main'>
         <PanelControl/>
         <div className='content'>
            {/* 실제 콘텐츠 */}
            <PointTransfer/>
         </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
