import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext'; 
import LoginImg from "asset/image/login.png";
import LogoutImg from "asset/image/logout.png";
import axios from 'axios'; 
import "asset/css/nav.css";

function NavBar({ togglePanel }) {
    const { user, setUser } = useContext(AuthContext); // Context에서 user와 setUser를 가져옵니다.

    const handleLogout = async () => {
      try {
          // 스프링 서버에 로그아웃 요청을 보냅니다.
          const response = await axios.post('/auth/logout', {}, { withCredentials: true });

          if (response.status === 200) {
              // 클라이언트 측 로그아웃 처리
              setUser(null); 
              sessionStorage.removeItem('user'); // 세션에서 사용자 정보 제거
          } else {
              console.error('로그아웃 실패');
          }
      } catch (error) {
          console.error('로그아웃 요청 중 오류 발생:', error);
      }
  };
  
    return (
        <div className="navbar">
            <div className="container">
                <div className="panel-control-left">
                    <a href="#" onClick={togglePanel} className="sidenav-control">
                        <i className="fa fa-align-left"></i>
                    </a>
                </div>
                <div className="site-title">
                    <Link to="/" className="logo">
                        <div className="soloplay-logo-container">
                            <h1 className="soloplay-text">SOLoPLAY</h1>
                        </div>
                    </Link>
                </div>
                <div className="panel-control-right">
                    {user ? (
                        <div className="user-controls">
                            <img src={LogoutImg} alt="Logout" className="logout-icon" onClick={handleLogout} />
                        </div>
                    ) : (
                        <Link to="/auth/login" className="user-icon">
                            <img src={LoginImg} alt="Login" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
