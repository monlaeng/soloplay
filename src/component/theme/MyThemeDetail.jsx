import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import shoppingImage from 'asset/image/shoppingImage.jpg'; // 예시 이미지
import travelImage from 'asset/image/travelImage.jpg';
import dailyLifeImage from 'asset/image/dailyLifeImage.jpg';
import diningImage from 'asset/image/diningImage.jpg';
import cultureImage from 'asset/image/cultureImage.jpg';

function MyThemeDetail(props) {
  const [myDetailTheme, setMyDetailTheme] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const { themeId } = useParams();
  const navigate = useNavigate();

  //themeDetail 데이터 수신
  useEffect(() => {
    axios.get(`/theme/findMyThemeDetail/${themeId}`)
      .then(response => {
          setMyDetailTheme(response.data);
      })
      .catch(error => {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      });
  }, [themeId]);

  console.log(myDetailTheme);

        const [selectedMainCategory, setSelectedMainCategory] = useState('');
        const mainCategorySelect = (e) => {
          setSelectedMainCategory(selectedMainCategory, e.target.value);
        }

        console.log(selectedMainCategory);
        
        const [selectedSubCategory, setSelectedSubCategory] = useState([]);
        const subCategorySelect = (e) => {
          setSelectedSubCategory([...selectedSubCategory, e.target.value]);
        }

        const handleRemoveClick = () => {
          axios.delete(`/theme/deleteTheme/${themeId}`)
              .then(response => {
                console.log("테마가 성공적으로 삭제되었습니다.");
                navigate('/myThemeSearch');
              })
              .catch(error => {
                console.error("삭제 중 오류가 발생했습니다.", error);
              });
        }

        // 수정내용을 useState에 다시 담아주는 함수
        const handleChange = (e) => {
            setMyDetailTheme({
                ...myDetailTheme,
                [e.target.name]: e.target.value,
            });
        };

        if(!myDetailTheme) {
            return <div>잠시만 기다려 주세요</div>;
        }

      //배경이미지 가져오기
      const getThemeBackgroundImage = (themeBackground) => {
        switch (themeBackground) {
            case 'shoppingImage':
            return shoppingImage;
            case 'travelImage':
            return travelImage;
            case 'dailyLifeImage':
            return dailyLifeImage;
            case 'diningImage':
            return diningImage;
            case 'cultureImage':
            return cultureImage;
            default:
            return null;
        }
        };

        // 수정하기 버튼 클릭 시 화면구성 변경
        const handleEditClick = () => {
          setIsEditMode(true);
        };
        const handleCancleClick = () => {
          setIsEditMode(false);
        };

        // 저장용
        const handleRegister = () => {

        }

    // <=== 종경 코드 ====

  //   const handleRegister = async () => {
        
  //     const themeData = {
  //         themeName: themeName,
  //         themeDescription: themeContent,
  //         themeIsActivated: false,  // 활성화 여부, 둘 다 기본적으로 false로 설정함
  //         themeIsPublic: false,  // 공개 여부
  //         subCategory: selectedThemes.map(theme => ({
  //             themeSubCategoryId: theme.themeSubCategoryId
  //         })),  // 선택된 소분류 정보
  //         user: { userId: "user_2" },  // 사용자 정보
  //         mainCategory: selectedCategory  // 선택된 대분류 ID 추가
  //     };
  //     console.log(themeData);
  //     try {
  //         const response = await axios.post('/theme/insertTheme', themeData);
  //         if (response.status === 201) {
  //             alert("테마가 성공적으로 등록되었습니다.");
  //             navigate('/themeSearchAll');

  //         }
  //     } catch (error) {
  //         console.error('테마 등록 중 오류가 발생했습니다: ', error);
  //         alert('테마 등록 중 오류가 발생했습니다.');
  //     }
  // };

    // ==== 종경 코드 ===>

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
                <img src={getThemeBackgroundImage(myDetailTheme.themeBackground)} alt={myDetailTheme.themeName} />
            </div>
            <div className="themeInfoContainer">
                <div className="themeNameContainer">
                    <span>테마명</span>
                    {isEditMode ? (
                      <input type="text" name="themeName" value={myDetailTheme.themeName} onChange={handleChange} />
                    ) : (
                      <p>{myDetailTheme.themeName}</p>
                    )}
                </div>
                <div className="themeCategoryContainer">
                    <span>대분류</span>
                    {isEditMode ? (
                      <>
                      <div className='themeCategoryContainer'>
                      <div className='mainCategoryEditContainer'>
                        <select style={{display:'inline-block', height:'27px', fontSize:'12px'}} onChange={mainCategorySelect}>
                          <option value='값1'>값1</option>
                        </select>

                        {/* <select name='themeMainCategoryName' value={myDetailTheme.themeMainCategoryName} onChange={subCategorySelect} >
                          {mainCategories.map((category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                          ))}
                        </select> */}
                      </div>
                      <div className='mainCategorySelectedContainer'>
                        <span>{selectedMainCategory}</span>
                      </div> 
                      </div>
                      </>
                    ) : (
                      <p>{myDetailTheme.themeMainCategoryName}</p>
                    )}
                </div>
                <div className="themeSubCategoryContainer">
                    <span>소분류</span>
                    {isEditMode ? (
                      <>
                      <div className='themeCategoryContainer'>
                      <div className='mainCategoryEditContainer'>
                        <select style={{display:'inline-block', height:'27px', fontSize:'12px'}} onChange={subCategorySelect}>
                          <option selected value='test1'>test1</option>
                          <option value='test2'>test2</option>
                          <option value='test3'>test3</option>
                          <option value='test4'>test4</option>
                        </select>
                      </div>
                      <div className='mainCategorySelectedContainer'>
                          {selectedSubCategory.map((item, index) => (
                            <span key={index}>{item}</span>
                          ))}
                      </div>
                      </div>
                      </>
                      // <select name='themeSunCategoryName' multiple value={myDetailTheme.themeSunCategoryName} onChange={handleChange}>
                      //   {subCategories.map((subCategory) => (
                      //     <option key={subCategory.id} value={subCategory.name}>{subCategory.name}</option>
                      //   ))}
                      // </select>
                    ) : (
                      <p>{myDetailTheme.themeSunCategoryName.join(", ")}</p>
                    )}
                </div>
                <div className='myThemeIsPublicContainer'>
                    <span>공개</span>
                    {isEditMode ? (
                      <select>
                        <option value={'true'}>공개</option>
                        <option value={'false'}>비공개</option>
                      </select>
                    ) : (
                      <p>{myDetailTheme.themeIsPublic ? '공개':'비공개'}</p>
                    )}
                </div>
                <div className='myThemeIsActivtedContainer'>
                    <span>활성</span>
                    {isEditMode ? (
                      <select>
                        <option value={'true'}>활성화</option>
                        <option value={'false'}>비활성화</option>
                      </select>
                    ) : (
                      <p>{myDetailTheme.themeIsActivated ? '활성' : '비활성'}</p>
                    )}
                </div>
            </div>

        <div className="themeContentDiv">
            <span>테마 설명</span>
            {isEditMode ? (
                <button className="themeSaveBtn" onClick={handleRegister}>저장하기</button>
            ) : (
              <button className="themeEditBtn" onClick={handleEditClick}>수정하기</button>
            )}
        </div>

        <div className="themeContentContainer">
            <p>{myDetailTheme.themeDescription}</p>
        </div>
            <div className="moveThemeListBtnDiv">
                <Link to={"/myThemeSearch"}>
                <button className="moveThemeListBtn">목록보기</button>
                </Link>
                {isEditMode ? (
                  <button className="themeEditCancleBtn" onClick={handleCancleClick}>취소하기</button>
                ) : (
                  <button className="themeRemoveBtn" onClick={handleRemoveClick}>삭제</button>
                )}

            </div>
            </div>{" "}
            {/* container */}
        </div>{" "}
        {/* faq app-pages app-section */}
        </>
    );
}

export default MyThemeDetail;
