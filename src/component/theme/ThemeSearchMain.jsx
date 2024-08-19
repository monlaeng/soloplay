import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ThemeSearchMain(props) {
    const [searchKeyword, inputSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const navigate = useNavigate();
    const moveToDetail = () => {
      navigate('/themeDetail');
    };

    const handleSearch = () => {
        // 검색어를 바탕으로 데이터를 필터링하는 로직 추가
        console.log("Searching for:", searchKeyword);
        // 여기서 axios 또는 fetch로 백엔드에 검색어를 보내고 결과를 받아올 수 있습니다.
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        console.log("Selected Category:", category);
        // 여기서 선택된 카테고리 정보를 바탕으로 데이터를 필터링하는 로직을 추가합니다.
    };

    return (
      <>
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
                전체 테마 조회
              </span>{" "}
            </h2>
            <h4 style={{ textAlign: "left", fontSize: 15 }}>
              <Link
                to="/MythemeSearch"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                나의 테마 조회 &gt;
              </Link>
            </h4>
        </div>

        <div className="themeSearchContainer">
            {/* 검색 영역 */}
            <div className='search-container'>
                <span>검색</span>
                <input type = 'text' placeholder = '검색어를 입력해주세요.' value={searchKeyword} onChange={(e) => inputSearchKeyword(e.target.value)} />
            <button onClick={handleSearch}>검색</button>
            </div>
            {/* 분류 영역 */}
            <div className='category-container'>
                <span>분류</span>
                <button onClick={() => handleCategoryClick('생활')}>생활</button>
                <button onClick={() => handleCategoryClick('쇼핑')}>쇼핑</button>
                <button onClick={() => handleCategoryClick('외식/카페')}>외식/카페</button>
                <button onClick={() => handleCategoryClick('문화/교육')}>문화/교육</button>
                <button onClick={() => handleCategoryClick('여행/교통')}>여행/교통</button>
            </div>
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

export default ThemeSearchMain;