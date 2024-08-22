import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'asset/css/ThemeResultPage.css';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달창 접근성 설정

function ThemeAnalyzeResult(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, reason } = location.state || { theme: '테마 없음', reason: '이유 없음' };
    const [subcategories, setSubcategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRecommendTheme = async () => {
        try {
            const response = await axios.post('/api/theme/recommend', {
                theme: theme,
                details: reason.split("\n")
            });
            setSubcategories(response.data.subCategories || []);
            setIsModalOpen(true); // 모달 열기
        } catch (error) {
            console.error("Error recommending subcategories:", error);
            setSubcategories([]);
        }
    };

    const handleRegisterTheme = () => {
        // 모달창에 표기된 소분류 테마들을 ThemeRegister 페이지로 이동하면서 'theme'에 반영
        navigate('/themeRegister', { state: { theme: subcategories.join(", ") } });
    };

    const handleRetry = () => {
        navigate('/bucketlist');
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="theme-result-container">
            <section className="result-section">
                <h2 className="result-theme">분석 결과 : {theme} 테마</h2>
                <p className="result-reason">
                    {reason.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <div className="button-group">
                    <button className="register-button" onClick={handleRecommendTheme}>
                        소분류 테마 확인하기
                    </button>
                </div>
            </section>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="소분류 테마"
                className="Modal"
                overlayClassName="Overlay"
            >
                <h3 className="subcategory-title">추천된 소분류 항목</h3>
                <ul className="subcategory-list">
                    {subcategories.map((subcategory, index) => (
                        <li key={index}>{subcategory}</li>
                    ))}
                </ul>
                <div className="modal-button-group">
                    <button className="register-button" onClick={handleRegisterTheme}>
                        테마 등록하기
                    </button>
                    <button className="retry-button" onClick={handleRetry}>
                        재추천 받기
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default ThemeAnalyzeResult;
