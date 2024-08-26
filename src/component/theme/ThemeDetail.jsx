import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import shoppingImage from 'asset/image/shoppingImage.jpg'; // 예시 이미지
import travelImage from 'asset/image/travelImage.jpg';
import dailyLifeImage from 'asset/image/dailyLifeImage.jpg';
import diningImage from 'asset/image/diningImage.jpg';
import cultureImage from 'asset/image/cultureImage.jpg';

function ThemeDetail(props) {
    const [detailTheme, setDetailTheme] = useState('');

    const { themeId } = useParams();

    useEffect(() => {
        axios.get(`/theme/findThemeDetail/${themeId}`)
                .then(response => {
                    setDetailTheme(response.data);
                })
                .catch(error => {
                    console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
                });
    }, [themeId]);

    console.log(detailTheme);

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

        if(!detailTheme) {
            return <div>잠시만 기다려 주세요</div>;
        }

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
                        테마 상세조회
                        </span>{" "}
                    </h2>
                </div>
                <div className='themeBackgroundImg'>
                    <img src={getThemeBackgroundImage(detailTheme.themeBackground)} alt={detailTheme.themeName} />
                </div>
                <div className='themeInfoContainer'>
                    <div className='themeNameContainer'>
                        <span>테마명</span>
                        <p>{detailTheme.themeName}</p>
                    </div>
                    <div className='themeCategoryContainer'>
                        <span>대분류</span>
                        <p>{detailTheme.themeMainCategoryName}</p>
                    </div>
                    <div className='themeSubCategoryContainer'>
                        <span>소분류</span>
                        <p>{detailTheme.themeSubCategoryName.join(", ")}</p>
                    </div>
                </div>
                <div className='themeContentDiv'>
                <span>테마 설명</span>
                </div>
                <div className='themeContentContainer'>
                    <p>{detailTheme.themeDescription}</p>
                </div>
                <div className='moveThemeListBtnDiv'>
                    <Link to={'/themeSearchAll'}>
                    <button className='moveThemeListBtn'>목록보기</button>
                    </Link>
                </div>

            </div> {/* container */}
        </div> {/* faq app-pages app-section */}
        </>
    );
}

export default ThemeDetail;