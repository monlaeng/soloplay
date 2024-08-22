import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

function ThemeRegister(props) {
    const location = useLocation();
    const receivedTheme = location.state?.theme || "";  // 소분류 테마를 받음

    const [selected, setSelected] = useState("");
    const onChangeSelect = (e) => {
        if (e) setSelected(e.value);
        else setSelected('');
    };

    const placeholder = "대분류를 선택하세요";

    const options = [
        {value:"생활", label:"생활"},
        {value:"쇼핑", label:"쇼핑"},
        {value:"생활2", label:"생활2"},
        {value:"생활3", label:"생활3"},
        {value:"생활4", label:"생활4"},
    ];

    // 소분류 테마를 초기 상태로 설정
    const [selectedThemes, setSelectedThemes] = useState(receivedTheme.split(", ").map(item => item.trim())); 
    const [categories, setCategories] = useState([]); // 대분류 리스트
    const [subCategories, setSubCategories] = useState([]); // 소분류 리스트
    const [selectedCategory, setSelectedCategory] = useState(""); // 선택된 대분류
    const [themeName, setThemeName] = useState("");

    const backgroundImg = require('../../asset/image/coffeeMonster.png');

    // 대분류 및 소분류 데이터를 백엔드에서 가져오기
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await axios.get('/api/categories');
                setCategories(categoriesResponse.data);
                
                // 첫 번째 대분류를 선택된 상태로 설정
                if (categoriesResponse.data.length > 0) {
                    const initialCategory = categoriesResponse.data[0].themeMainCategoryId;
                    setSelectedCategory(initialCategory);
                    fetchSubCategories(initialCategory); // 첫 번째 대분류에 대한 소분류 로드
                }
            } catch (error) {
                console.error('대분류 데이터를 불러오는데 실패했습니다 : ', error);
            }
        };

        const fetchSubCategories = async (mainCategoryId) => {
            try {
                const subCategoriesResponse = await axios.get(`/api/categories/${mainCategoryId}/subcategories`);
                setSubCategories(subCategoriesResponse.data);
            } catch (error) {
                console.error('소분류 데이터를 불러오는데 실패했습니다 : ', error);
            }
        };

        fetchCategories();
    }, []);

    // 대분류가 변경될 때마다 소분류를 로드
    const handleCategoryChange = (event) => {
        const newCategoryId = event.target.value;
        setSelectedCategory(newCategoryId);
        setSubCategories([]); // 새로운 대분류가 선택되면 소분류 초기화
        fetchSubCategories(newCategoryId);
    };

    const fetchSubCategories = async (mainCategoryId) => {
        try {
            const subCategoriesResponse = await axios.get(`/api/categories/${mainCategoryId}/subcategories`);
            setSubCategories(subCategoriesResponse.data);
        } catch (error) {
            console.error('소분류 데이터를 불러오는데 실패했습니다 : ', error);
        }
    };

    // 소분류 선택 시 테마 리스트에 추가
    const handleSubCategorySelect = (event) => {
        const selectedSubCategory = event.target.value;
        if (selectedSubCategory && !selectedThemes.includes(selectedSubCategory)) {
            setSelectedThemes([...selectedThemes, selectedSubCategory]);
        }
    };

    const handleThemeNameChange = (event) => {
        setThemeName(event.target.value);
    };

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
                    <div className='themeBackgroundImg'>
                        <img src={backgroundImg} alt="Theme Background" />
                    </div>

                    <div className='themeInfoContainer'>
                        <div className='themeNameContainer'>
                            <span className='themeNameSpan'>테마명</span>
                            <input value={themeName} onChange={handleThemeNameChange} />
                        </div>

                        <div className='themeCategoriesContainer'>
                            <div className='themeCategorySelectContainer'>
                                <label>
                                    대분류
                                    <Select
                                        value = {selected}
                                        onChange = {onChangeSelect}
                                        options = {options}
                                        placeholder = {placeholder}
                                    />
                                    {/* <select value={selectedCategory} onChange={handleCategoryChange}>
                                        {categories.map((category) => (
                                            <option key={category.themeMainCategoryId} value={category.themeMainCategoryId}>
                                                {category.themeMainCategoryName}
                                            </option>
                                        ))}
                                    </select> */}
                                </label>
                            </div>
                            <div className='themeSubCategorySelectContainer'>
                                <label>
                                    소분류
                                    <select onChange={handleSubCategorySelect}>
                                        <option value="">소분류 선택</option>
                                        {subCategories.map((subCategory) => (
                                            <option key={subCategory.themeSubCategoryId} value={subCategory.themeSubCategoryName}>
                                                {subCategory.themeSubCategoryName}
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
                </div>
            </div>
        </>
    );
}

export default ThemeRegister;
