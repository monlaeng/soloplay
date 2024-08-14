import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="container">
                <div className="panel-control-left">
                <a href="#" data-activates="slide-out-left" className="sidenav-control">
                    <i className="fa fa-align-left"></i>
                </a>
                </div>
                <div className="site-title">
                <Link to="home.jsx" className="logo">
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

export default Navbar;