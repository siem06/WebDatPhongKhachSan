import React, { useState } from "react";
import Logo from "../assets/image/Logo.png";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { getRoomsByType } from "../service/api";
import { stringAvatar } from "../utils/UserLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
export default function Header({ loggedIn, user }) {
  console.log("yy", user);
  const [active, setActive] = useState("/");
  const getActiveClass = (path) => {
    return active === path ? "active" : "";
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
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
  const handleRoomTypeSelect = async (type) => {
    console.log("kkkk", type);
    try {
      // Gọi API để lấy danh sách phòng theo loại phòng
      const rooms = await getRoomsByType(type);
      setRooms(rooms);
      // Xử lý logic hiển thị danh sách phòng, ví dụ: lưu vào state hoặc hiển thị trực tiếp
      console.log(rooms);
    } catch (error) {
      console.error("Error fetching rooms by type:", error);
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

          <div
            className={`collapse navbar-collapse offset justif justify-content-center ${
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
                className={`nav-item submenu dropdown ${
                  isDropdownOpen ? "show" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  className="nav-link dropdown-toggle "
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  onClick={() => setActive("/room")}
                  to="/room"
                >
                  PHÒNG<span className="lnr lnr-chevron-down"></span>
                </NavLink>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li className={`nav-item ${getActiveClass("/standard")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => handleRoomTypeSelect(1)}
                    >
                      Tiêu chuẩn
                    </NavLink>
                  </li>
                  <li className={`nav-item ${getActiveClass("/superior")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => handleRoomTypeSelect(2)}
                    >
                      Cao cấp
                    </NavLink>
                  </li>
                  <li className={`nav-item ${getActiveClass("/deluxe")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => handleRoomTypeSelect(3)}
                    >
                      Đặc biệt
                    </NavLink>
                  </li>
                  <li className={`nav-item ${getActiveClass("/suite")}`}>
                    <NavLink
                      className="nav-link"
                      onClick={() => handleRoomTypeSelect(4)}
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
              <li className={`nav-item `}>
                <Link className="nav-link" to="/cart">
                  <BedroomParentIcon />
                </Link>
              </li>
              {loggedIn ? (
                <li
                  className={`nav-item d-flex justify-content-center align-items-center `}
                >
                  <NavLink className="nav-link" to="/profile">
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
