import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ControllerImg from "asset/image/controller.png"
function NavBar({ togglePanel }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Spring Boot 서버로부터 유저 정보 가져오기
    fetch('/api/user', {
      method: 'GET',
      credentials: 'include', // 쿠키를 포함하여 요청
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        sessionStorage.setItem('user', JSON.stringify(data)); // 브라우저의 sessionStorage에 저장
      })
      .catch(error => console.error('Error fetching user:', error));
  }, []);

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
            <h1>SOLoPLAY</h1>
            {/* <img src={ControllerImg}></img> */}
          </Link>
        </div>
        <div className="panel-control-right">
        <Link to={user ? "/point" : "/auth/login"}>
            <i className="fa fa-user-circle-o"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
