import React, { useState } from "react";
import Logo from "../assets/image/Logo.png";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";

export default function Header({ loggedIn }) {
  const [active, setActive] = useState("/");
  const getActiveClass = (path) => {
    return active === path ? "active" : "";
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      // setShowMenu(false);
      setShowSidebar(false);
    }
  };
  return (
    <header className="header_area">
      <div className="d">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div>
            <NavLink className="navbar-brand logo_h" to="/">
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div>
            <button
              className={`nav__menu navbar-toggler `}
              type="button"
              onClick={toggleSidebar}
            >
              <span class="lnr lnr-list"></span>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse offset justif justify-content-center ${
              showSidebar ? "show" : ""
            } right-sidebar`}
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto ">
              <li className="nav-item btn-close" onClick={closeMenuOnMobile}>
                <span class="lnr lnr-cross"></span>
              </li>
              <li className={`nav-item ${getActiveClass("/")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/")}
                  to="/"
                >
                  TRANG CHỦ
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/about")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/about")}
                  to="/about"
                >
                  GIỚI THIỆU
                </NavLink>
              </li>
              <li
                className={`nav-item submenu dropdown  ${
                  active.includes("/room") ? "active" : ""
                }`}
              >
                <NavLink
                  className="nav-link dropdown-toggle "
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setActive("/room")}
                  to="/room"
                >
                  PHÒNG<span className="lnr lnr-chevron-down"></span>
                </NavLink>
                <ul className="dropdown-menu">
                  <li className={`nav-item ${getActiveClass("/standard")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => setActive("/room")}
                      to="/blog"
                    >
                      Tiêu chuẩn
                    </NavLink>
                  </li>
                  <li className={`nav-item ${getActiveClass("/superior")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => setActive("/room")}
                      to="/blog"
                    >
                      Cao cấp
                    </NavLink>
                  </li>
                  <li className={`nav-item ${getActiveClass("/deluxe")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => setActive("/room")}
                      to="/blog-"
                    >
                      Đặc biệt
                    </NavLink>
                  </li>
                  <li className={`nav-item ${getActiveClass("/suite")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => setActive("/room")}
                      to="/blog"
                    >
                      Tổng thống
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${getActiveClass("/blog")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/blog")}
                  to="/blog"
                >
                  TIN TỨC
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/service")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/service")}
                  to="/service"
                >
                  DỊCH VỤ
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/contact")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/contact")}
                  to="/contact"
                >
                  LIÊN HỆ
                </NavLink>
              </li>
              {loggedIn ? (
                <li className={`nav-item `}>
                  <NavLink
                    className="nav-link font-size-16 customLogin"
                    to="/profile"
                  >
                    <span className="lnr lnr-user w-10"></span>TÀI KHOẢN
                  </NavLink>
                </li>
              ) : (
                <li className={`nav-item `}>
                  <NavLink
                    className="nav-link font-size-16 customLogin"
                    onClick={() => setActive("/login")}
                    to="/login"
                  >
                    ĐĂNG KÝ/ ĐĂNG NHẬP
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
