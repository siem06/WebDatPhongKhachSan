import "@fortawesome/fontawesome-free/css/all.min.css";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import Avatar from "@mui/material/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import Logo from "../assets/image/Logo.png";
import { stringAvatar } from "../utils/UserLogo";

export default function Header({ loggedIn, user }) {
  const [active, setActive] = useState("/");
  const [showSidebar, setShowSidebar] = useState(false);

  const getActiveClass = (path) => {
    return active === path ? "active" : "";
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
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
              <span className="lnr lnr-list"></span>
            </button>
          </div>
          <div className="language-dropdown">
            <div id="google_translate_element"></div>
          </div>
          <div
            className={`collapse navbar-collapse offset justify-content-center ${
              showSidebar ? "show" : ""
            } right-sidebar`}
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto ">
              <li className="nav-item btn-close" onClick={closeMenuOnMobile}>
                <span className="lnr lnr-cross"></span>
              </li>
              <li className={`nav-item ${getActiveClass("/")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/about")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/about")}
                  to="/about"
                >
                  About us
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/room")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/room")}
                  to="/room"
                >
                  Room
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/blog")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/blog")}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/service")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/service")}
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className={`nav-item ${getActiveClass("/contact")}`}>
                <NavLink
                  className="nav-link"
                  onClick={() => setActive("/contact")}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className={`nav-item `}>
                <Link className="nav-link" to="/cart">
                  <BedroomParentIcon />
                </Link>
              </li>
              {loggedIn ? (
                <li
                  className={`nav-item d-flex justify-content-center align-items-center `}
                >
                  <NavLink
                    className="nav-link"
                    to={user?.roles?.includes(2) ? "/dashboard" : "/profile"}
                  >
                    {user && <Avatar {...stringAvatar(user.email)} />}
                  </NavLink>
                </li>
              ) : (
                <li className={`nav-item `}>
                  <NavLink
                    className="nav-link font-size-16 customLogin"
                    onClick={() => setActive("/login")}
                    to="/login"
                  >
                    SIGN IN/SIGN UP
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
