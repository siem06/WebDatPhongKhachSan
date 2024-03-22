import React, { useState } from "react";
import Logo from "../assets/image/Logo.png";
import { NavLink } from 'react-router-dom'; 

import "bootstrap/dist/css/bootstrap.min.css"; 
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"; 
import "owl.carousel/dist/assets/owl.carousel.min.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";

export default function Header({loggedIn}) {
  const [active, setActive] = useState('/');
  const getActiveClass = (path) => {
    return active === path ? 'active' : '';
  }

  return (
    <header className="header_area">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand logo_h" to="/"><img src={Logo} alt=""/></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse offset justif justify-content-center" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className={`nav-item ${getActiveClass('/')}`}><NavLink className="nav-link" onClick={() => setActive('/')} to="/">TRANG CHỦ</NavLink></li> 
              <li className={`nav-item ${getActiveClass('/about')}`}><NavLink className="nav-link" onClick={() => setActive('/about')} to="/about">GIỚI THIỆU</NavLink></li>
              <li className={`nav-item submenu dropdown ${active.includes('/room') ? 'active' : ''}`}>
                <a href="#in" className="nav-link dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PHÒNG <span className="lnr lnr-chevron-down"></span></a>
                <ul className="dropdown-menu">
                  <li className={`nav-item ${getActiveClass('/standard')}`}><NavLink className="nav-link" onClick={() => setActive('/room')} to="/blog">Tiêu chuẩn</NavLink></li>
                  <li className={`nav-item ${getActiveClass('/superior')}`}><NavLink className="nav-link" onClick={() => setActive('/room')} to="/blog">Cao cấp</NavLink></li>
                  <li className={`nav-item ${getActiveClass('/deluxe')}`}><NavLink className="nav-link" onClick={() => setActive('/room')} to="/blog-">Đặc biệt</NavLink></li>
                  <li className={`nav-item ${getActiveClass('/suite')}`}><NavLink className="nav-link" onClick={() => setActive('/room')} to="/blog">Tổng thống</NavLink></li>
                </ul>
              </li> 
              <li className={`nav-item ${getActiveClass('/blog')}`}><NavLink className="nav-link" onClick={() => setActive('/blog')} to="/blog">TIN TỨC</NavLink></li>
              <li className={`nav-item ${getActiveClass('/profile')}`}><NavLink className="nav-link" onClick={() => setActive('/profile')} to="/profile">DỊCH VỤ</NavLink></li>
              <li className={`nav-item ${getActiveClass('/contact')}`}><NavLink className="nav-link" onClick={() => setActive('/contact')} to="/profile">LIÊN HỆ</NavLink></li>
            </ul>
          </div> 
          <div> 
          {loggedIn ? (
              <NavLink className="nav-link font-size-16 customLogin" to="/profile"><span class="lnr lnr-user w-10"></span>TÀI KHOẢN</NavLink>
            ) : (
              <NavLink className="nav-link font-size-16 customLogin" onClick={() => setActive('/login')} to="/login">ĐĂNG KÝ/ ĐĂNG NHẬP</NavLink>
            )}
          
          </div>
        </nav>
      </div>
    </header>
  );
}
