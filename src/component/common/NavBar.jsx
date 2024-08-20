import React from "react";
import { Link } from "react-router-dom";
import ControllerImg from "asset/image/controller.png"
function NavBar({ togglePanel }) {
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
          <Link to="/auth/login">
            <i className="fa fa-user-circle-o"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
