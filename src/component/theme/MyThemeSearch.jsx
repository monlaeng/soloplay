import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from 'component/common/NavBar';

function MyThemeSearch(props) {
    const navigate = useNavigate();
    const moveToDetail = () => {
      navigate('/myThemeDetail');
    };

    return (
        <>
        <NavBar />
        <div className="faq app-pages app-section">
          <div className="container">
            <div className="themeTitleContainer">
              <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#007FFF",
                    fontSize: "0.8em",
                  }}
                >
                  나의 테마 조회
                </span>{" "}
              </h2>
              <h4 style={{ textAlign: "left", fontSize: 15 }}>
                <Link
                  to="/themeSearchAll"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  전체 테마 조회 &gt;
                </Link>
              </h4>
            </div>
            <div className="entry">
              <ul className="collapsible theme-grid" data-collapsible="accordion">
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
                <li onClick={moveToDetail}>
                  <div className="collapsible-header">
                    <div className='themeThumbnail'>썸네일 영역</div>
                  </div>
                  <span className='themeTitle'>테마 제목</span>
                </li>
              </ul>
            </div>
          </div> {/* container */}
        </div> {/* faq app-pages app-section */}
      </>
    );
}

export default MyThemeSearch;