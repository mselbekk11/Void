import React from "react";
import './navbar.css'
import Logo from '../../assets/img/logo.png';
import ButtonArrow from '../../assets/img/button-arrow.png';

function NavBar(){
    return (
        <div className="nav-container">
            <nav className="nav">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="metamask logo"></img></a>
                </div>
                <div className="nav-items">
                    <a href="#">Courses</a>
                    <a href="#">Contact</a>
                    <a href="#"><button>Sign in<img src={ButtonArrow} alt="metamask logo"></img></button></a>
                </div>
            </nav>
        </div>
      );
}

export default NavBar;