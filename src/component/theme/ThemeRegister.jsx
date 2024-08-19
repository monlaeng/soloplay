import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ThemeRegister(props) {
    /* const [selectedThemes, setSelectedThemes] = useState([]); */
    const [selectedThemes, setSelectedThemes] = useState(["편의점", "음식점", "전통시장", "세탁소", "헤어샵"]);
    /* const [categories, setCategories] = useState([]); */
    const [categories, setCategories] = useState(["생활", "쇼핑", "외식/카페", "문화/교육", "여행/교통"]);
    /* const [subCategories, setSubCategories] = useState([]); */
    const [subCategories, setSubCategories] = useState(["마트", "병원", "세탁소", "약국", "전통시장", "편의점", "헤어샵", "가구점", "가전제품", "드럭스토어"]);
    /* const backgroundImg = require('../asset/image/${props.filename}') */
    const backgroundImg = require('../../asset/image/coffeeMonster.png');

    //DB에서 데이터를 가져오는 함수
    useEffect(() => {
        const fetchDate = async() => {
            try {
                // 선택된 텍스트들을 가져오는 API 호출
                const themesResponse = await axios.get('/api/selected-texts');
                setSelectedThemes(themesResponse.data);

                // 대분류 데이터를 가져오는 API 호출
                const categoriesResponse = await axios.get('/api/categories');
                setCategories(categoriesResponse.data);

                // 소분류 데이터를 가져오는 API 호출
                const subCategoriesResponse = await axios.get('/api/subcategories');
                setSubCategories(subCategoriesResponse.data);
            } catch(error) {
                console.error('데이터를 불러오는데 실패했습니다 : ', error);
            }
        };
        fetchDate();
    },[]);

    const handleRemoveThemes = (index) => {
        const updateThemes = selectedThemes.filter((_, i) => i !== index);
        setSelectedThemes(updateThemes);
    };

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
                        테마 등록
                        </span>{" "}
                    </h2>
                </div>
                {/* <div className='themeBackgroundImg' style={{backgroundImage: 'url(${backgroundImg})' }}> */}
                <div className='themeBackgroundImg'>
                    <img src={backgroundImg} alt="Theme Background" />
                </div>

                <div className='themeInfoContainer'>
                    <div className='themeNameContainer'>
                        <span className='themeNameSpan'>테마명</span>
                        <p>테마 내용</p>
                    </div>

                    <div className='themeCategoriesContainer'>
                    <div className='themeCategorySelectContainer'>
                        <label>
                            대분류
                            <select>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className='themeSubCategorySelectContainer'>
                        <label>
                            소분류
                            <select>
                                {subCategories.map((subCategory, index) => (
                                    <option key={index} value={subCategory.id}>
                                        {subCategory.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    </div>
                    <div className='selectedThemes'>
                        {selectedThemes.map((themes, index) => (
                            <div key={index} className='tag'>
                                {themes}{" "}
                                <span className='removeTag' onClick={() => handleRemoveThemes(index)}>
                                    X
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='themeContentDiv'>
                <span>테마 설명</span>
                <button className='themeRecieveBtn'>불러오기</button>
                </div>

                <div className='themeContentContainer'>
                    <p>테마 설명에 대한 내용을 불러오는 영역</p>
                </div>
                <div className='moveThemeListBtnDiv'>
                <Link to={'/themeSearchAll'}>
                <button className='moveThemeListBtn'>목록보기</button>
                </Link>
                <button className='registerBtn'>등록</button>
                </div>

            </div> {/* container */}
        </div> {/* faq app-pages app-section */}
        </>
    );
}

export default ThemeRegister;