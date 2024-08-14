import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="panel-control-left">
          <Link to="/controller">
            <i class="fa fa-align-left"></i>
          </Link>
        </div>
        <div className="site-title">
          <Link to="/" className="logo">
            <h1>SOLoPLAY</h1>
          </Link>
        </div>
        <div className="panel-control-right">
          <Link to="#">
            <i className="fa fa-envelope-o"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
