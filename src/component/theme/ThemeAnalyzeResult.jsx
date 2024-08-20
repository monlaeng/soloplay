import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'asset/css/ThemeResultPage.css';
import axios from 'axios';

function ThemeAnalyzeResult(props) {
    const location = useLocation(); // useLocation 훅 사용
    const { theme, reason } = location.state || { theme: '테마 없음', reason: '이유 없음' };
    const [subcategories, setSubcategories] = useState([]);

    const handleRegisterTheme = async () => {
        try {
            const response = await axios.post('/api/theme/recommend', {
                theme: theme,
                details: reason.split("\n") // 세부 설명을 줄 단위로 나눠서 보냄
            });
            setSubcategories(response.data.subCategories || []); // 빈 배열로 초기화
        } catch (error) {
            console.error("Error recommending subcategories:", error);
            console.log("오류");
            setSubcategories([]); // 오류가 발생할 경우 빈 배열로 초기화
        }
    };

    return (
        <div className="theme-result-container">
            <section className="result-section">
                <h2 className="result-theme">분석 결과 : {theme} 테마</h2>
                <p className="result-reason">{reason}</p>
                <button className="register-button" onClick={handleRegisterTheme}>
                    테마 등록하기
                </button>
            </section>
            {subcategories.length > 0 && (
                <section className="subcategory-section">
                    <h3 className="subcategory-title">추천된 소분류 항목:</h3>
                    <ul className="subcategory-list">
                        {subcategories.map((subcategory, index) => (
                            <li key={index}>{subcategory}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default ThemeAnalyzeResult;
