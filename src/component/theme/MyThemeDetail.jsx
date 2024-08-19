
import React from 'react';
import { Link } from 'react-router-dom';

function MyThemeDetail(props) {
    return (
        <>
        <div className="faq app-pages app-section">
            <div className="container">
                <div className='themeDetailTitleContainer'>
                <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
                        <span
                        style={{
                            fontWeight: "bold",
                            color: "#007FFF",
                            fontSize: "0.8em",
                        }}
                        >
                        나의 테마 상세조회
                        </span>{" "}
                    </h2>
                </div>
                <div className='themeBackgroundImg'>
                    테마 백그라운드 이미지 영역
                </div>
          <div className="themeInfoContainer">
            <div className="themeNameContainer">
              <span>테마명</span>
              <p>테마 내용</p>
            </div>
            <div className="themeCategoryContainer">
              <span>대분류</span>
              <p>선택된 대분류 이름</p>
            </div>
            <div className="themeSubCategoryContainer">
              <span>소분류</span>
              <p>선택된 소분류 이름</p>
            </div>
          </div>

          <div className="themeContentDiv">
            <span>테마 설명</span>
            <button className="themeEditBtn">수정하기</button>
          </div>

          <div className="themeContentContainer">
            <p>테마 설명에 대한 내용을 불러오는 영역</p>
          </div>
          <div className="moveThemeListBtnDiv">
            <Link to={"/myThemeSearch"}>
              <button className="moveThemeListBtn">목록보기</button>
            </Link>
            <button className="themeRemoveBtn">삭제</button>
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* faq app-pages app-section */}
    </>
  );
}

export default MyThemeDetail;
