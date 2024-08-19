import NavBar from 'component/common/NavBar';
import React from 'react';
import { Link } from 'react-router-dom';

function ThemeRegister(props) {
    return (
        <>
        <NavBar />
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
                        테마 등록
                        </span>{" "}
                    </h2>
                </div>
                <div className='themeBackgroundImage'>
                    테마 백그라운드 이미지 영역
                </div>ß

                <div className='themeInfoContainer'>
                    <div className='themeNameContainer'>
                        <span>테마명</span>
                        <p>테마 내용</p>
                    </div>
                    <div className='themeCategorySelectContainer'>
                        <span>대분류</span>
                        <select>
                            <option>생활</option>
                            <option>소비</option>
                            <option>선택된 대분류 이름</option>
                            <option>선택된 대분류 이름</option>
                            <option>선택된 대분류 이름</option>
                            <option>선택된 대분류 이름</option>
                        </select>
                        <span>소분류</span>
                        <select>
                            <option>선택된 소분류 이름</option>
                        </select>
                    </div>
                    <div className='selectedThemes'>
                        <div className='tag'>카페 <span className='removeTag'>X</span></div>
                        <div className='tag'>스타티카페 <span className='removeTag'>X</span></div>
                        <div className='tag'>카페2 <span className='removeTag'>X</span></div>
                        <div className='tag'>카페3 <span className='removeTag'>X</span></div>
                        <div className='tag'>카페4 <span className='removeTag'>X</span></div>
                    </div>
                </div>
                
                <div className='themeContentDiv'>
                <span>테마 설명</span>
                <button className='themeEditBtn'>수정하기</button>
                </div>

                <div className='themeContentContainer'>
                    <p>테마 설명에 대한 내용을 불러오는 영역</p>
                </div>
                <div className='registerBtnDiv'>
                <Link to={'/myThemeSearch'}>
                <button className='registerBtn'>등록</button>
                </Link>
                </div>

            </div> {/* container */}
        </div> {/* faq app-pages app-section */}
        </>
    );
}

export default ThemeRegister;