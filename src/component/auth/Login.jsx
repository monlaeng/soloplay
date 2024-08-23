import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Login(props) {
    const [formData, setFormData] = useState({
        userId: '',
        userPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', formData, {
                headers: {
                    'Content-Type': 'application/json'  // JSON 형식으로 전송
                },
                withCredentials: true
            });

            alert(response.data);  // 성공 시 서버에서 받은 메시지를 알림으로 표시

            // 로그인 성공 후 루트 경로로 이동
            if (response.status === 200) {
                navigate('/');  // navigate 함수를 사용해 "/" 경로로 이동
            }
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data);  // 실패 시 서버에서 받은 메시지를 알림으로 표시
            } else {
                alert('오류가 발생했습니다.');  // 기타 오류 발생 시 기본 메시지
            }
            // 실패 시에도 루트 경로로 이동
            navigate('/auth/login');
        }
    };

    return (
        <div className="login app-pages app-section">
            <div className="container">
                <div className="pages-title">
                    <h3>Login</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input 
                            id="userId" 
                            type="text" 
                            className="validate" 
                            value={formData.userId} 
                            onChange={handleChange} 
                        />
                        <label htmlFor="userId">ID</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="userPassword" 
                            type="password" 
                            className="validate" 
                            value={formData.userPassword} 
                            onChange={handleChange} 
                        />
                        <label htmlFor="userPassword">Password</label>
                    </div>
                    <button className="button" type="submit">Login</button>
                    <div className="create-account">Not Registered? <a href="/auth/registration">Create an account</a></div>
                </form>
            </div>
        </div>
    );
}

export default Login;
