import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ThemeRegister(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const receivedTheme = location.state?.theme || "";  // 소분류 테마를 받음
    const receivedReason = location.state?.reason || "";  // 테마 선정 이유를 받음
    const receivedMainCategory = location.state?.mainCategory || "";  // 추천받은 대분류 테마를 받음

    const themeImages = {
        "생활": require('../../asset/image/dailyLifeImage.jpg'),
        "쇼핑": require('../../asset/image/shoppingImage.jpg'),
        "외식/카페": require('../../asset/image/diningImage.jpg'),
        "문화/교육": require('../../asset/image/cultureImage.jpg'),
        "여행/교통": require('../../asset/image/travelImage.jpg')
    };

    const [selectedThemes, setSelectedThemes] = useState(
        receivedTheme ? receivedTheme.split(", ").map(item => ({ themeSubCategoryName: item })) : []
    );
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [themeName, setThemeName] = useState("");
    const [themeContent, setThemeContent] = useState(receivedReason);
    const [backgroundImg, setBackgroundImg] = useState(receivedMainCategory ? themeImages[receivedMainCategory] : null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await axios.get('/api/categories');
                setCategories(categoriesResponse.data);

                if (receivedMainCategory) {
                    const category = categoriesResponse.data.find(cat => cat.themeMainCategoryName === receivedMainCategory);
                    if (category) {
                        setSelectedCategory(category.themeMainCategoryId);
                        fetchSubCategories(category.themeMainCategoryId);
                        setBackgroundImg(themeImages[receivedMainCategory]);  // 초기 로딩 시 이미지 설정
                    }
                }
            } catch (error) {
                console.error('대분류 데이터를 불러오는데 실패했습니다 : ', error);
            }
        };

        fetchCategories();
    }, []);

    const fetchSubCategories = async (mainCategoryId) => {
        try {
            const subCategoriesResponse = await axios.get(`/api/categories/${mainCategoryId}/subcategories`);
            setSubCategories(subCategoriesResponse.data);
        } catch (error) {
            console.error('소분류 데이터를 불러오는데 실패했습니다 : ', error);
        }
    };

    const handleCategoryChange = (event) => {
        const newCategoryId = event.target.value;
        const newMainCategory = categories.find(cat => cat.themeMainCategoryId === parseInt(newCategoryId))?.themeMainCategoryName;

        if (newMainCategory) {
            setBackgroundImg(themeImages[newMainCategory]);  // 대분류 변경 시 이미지 설정
        }
        setSelectedCategory(newCategoryId);
        setSubCategories([]);
        setSelectedThemes([]); // 새로운 대분류 선택 시 소분류 초기화
        fetchSubCategories(newCategoryId);
    };

    const handleSubCategorySelect = (event) => {
        const selectedSubCategory = subCategories.find(sub => sub.themeSubCategoryName === event.target.value);

        if (selectedSubCategory && !selectedThemes.some(theme => theme.themeSubCategoryName === selectedSubCategory.themeSubCategoryName)) {
            if (selectedThemes.length < 5) {
                setSelectedThemes([...selectedThemes, selectedSubCategory]);
            } else {
                alert('선택할 수 있는 테마는 최대 5개까지 입니다.');
            }
        }
    };

    const handleThemeNameChange = (event) => {
        setThemeName(event.target.value);
    };

    const handleThemeContentChange = (event) => {
        setThemeContent(event.target.value);
    };

    const handleRemoveThemes = (index) => {
        const updateThemes = selectedThemes.filter((_, i) => i !== index);
        setSelectedThemes(updateThemes);
    };

    const handleRegister = async () => {
        
        const themeData = {
            themeName: themeName,
            themeDescription: themeContent,
            themeIsActivated: false,  // 활성화 여부, 둘 다 기본적으로 false로 설정함
            themeIsPublic: false,  // 공개 여부
            subCategory: selectedThemes.map(theme => ({
                themeSubCategoryId: theme.themeSubCategoryId
            })),  // 선택된 소분류 정보
            user: { userId: "user_1" },  // 사용자 정보
            mainCategory: {"themeMainCategoryId":selectedCategory}  // 선택된 대분류 ID 추가
        };
        console.log(themeData);
        try {
            const response = await axios.post('/theme/insertTheme', themeData);
            if (response.status === 201) {
                alert("테마가 성공적으로 등록되었습니다.");
                navigate('/themeSearchAll');

            }
        } catch (error) {
            console.error('테마 등록 중 오류가 발생했습니다: ', error);
            alert('테마 등록 중 오류가 발생했습니다.');
        }
    };
    
    useEffect(() => {
        if (selectedThemes.length > 0) {
            const mainCategoryCounts = selectedThemes.reduce((acc, curr) => {
                acc[curr.themeMainCategoryName] = (acc[curr.themeMainCategoryName] || 0) + 1;
                return acc;
            }, {});

            const mostSelectedMainCategory = Object.keys(mainCategoryCounts).reduce((a, b) =>
                mainCategoryCounts[a] > mainCategoryCounts[b] ? a : b
            );
            setBackgroundImg(themeImages[mostSelectedMainCategory]);
        } else if (receivedMainCategory && selectedCategory === "") {
            setBackgroundImg(themeImages[receivedMainCategory]);
        } else if (selectedThemes.length === 0) {
            setBackgroundImg(null); // 테마가 삭제되었을 때 배경 이미지를 초기화
        }
    }, [selectedThemes, receivedMainCategory]);

    return (
        <>
            <div className="faq app-pages app-section">
                <div className="container">
                    <div className='themeDetailTitleContainer'>
                        <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
                            <span style={{ fontWeight: "bold", color: "#007FFF", fontSize: "0.8em" }}>
                                테마 등록
                            </span>{" "}
                        </h2>
                    </div>
                    <div className='themeBackgroundImg'>
                        {backgroundImg && <img src={backgroundImg} alt="Theme Background" />}
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
                                    <select value={selectedCategory} onChange={handleCategoryChange}>
                                        <option value="">대분류 선택</option>
                                        {categories.map((category) => (
                                            <option key={category.themeMainCategoryId} value={category.themeMainCategoryId}>
                                                {category.themeMainCategoryName}
                                            </option>
                                        ))}
                                    </select>
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
                            {selectedThemes.length === 0 ? (
                                <p className='placeholder'>선택된 테마가 없습니다. 5개의 테마를 등록해주세요</p>
                            ) : (
                                selectedThemes.map((theme, index) => (
                                    <div key={index} className='tag'>
                                        {theme.themeSubCategoryName}{" "}
                                        <span className='removeTag' onClick={() => handleRemoveThemes(index)}>
                                            X
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className='themeContentDiv'>
                        <textarea
                            className='themeContentContainer'
                            value={themeContent} 
                            onChange={handleThemeContentChange}
                            placeholder="여기에 테마 설명을 입력하세요. (추천받은 경우, 이유가 자동으로 입력됩니다.)"
                            rows={10}
                        />
                    </div>

                    <div className='moveThemeListBtnDiv'>
                        <Link to={'/themeSearchAll'}>
                            <button className='moveThemeListBtn'>목록보기</button>
                        </Link>
                        <button className='registerBtn' onClick={handleRegister}>등록</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThemeRegister;
