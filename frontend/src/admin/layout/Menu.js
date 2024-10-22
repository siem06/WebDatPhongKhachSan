import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../service/api";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";
export default function Menu({ setLoggedIn, classname }) {
  const [active, setActive] = useState("");
  const navigation = useNavigate();

  const handleSetActive = (path) => {
    setActive(path);
  };
  const handleLogout = async () => {
    try {
      const response = await logout();
      localStorage.removeItem("user");
      setLoggedIn(false);
      navigation("/login");
      console.log(response);
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };

  return (
    <>
      <aside
        className={`sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-dark menuAdmin ${classname} `}
        id="sidenav-main"
      >
        <div className="sidenav-header  d-flex justify-content-center align-items-center">
          {/* <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i> */}
          {/* <a className="navbar-brand m-0" href="/"> */}
          <p
            className="  d-flex ms-1 font-weight-bold  nav-link-text ms-1 "
            style={{ color: "#fff" }}
          >
            Admin Luxurious hotel
          </p>
          {/* </a> */}
        </div>
        {/* <hr className="horizontal light mt-0 mb-2" /> */}
        <div
          className="navbar-collapse1 w-auto max-height-vh-100 overflow-visible"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className={`nav-item ${active === "/" ? "active" : ""}`}>
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/dashboard")}
                to="/dashboard"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Trang chủ</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${active === "/manageroom" ? "active" : ""}`}
            >
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/manageroom")}
                to="/manageroom"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Quản lý phòng</span>
              </NavLink>
            </li>
            <li className={`nav-item ${active === "/booking" ? "active" : ""}`}>
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/booking")}
                to="/booking"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Quản lý đặt phòng</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                active === "/manageaccount" ? "active" : ""
              }`}
            >
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/manageaccount")}
                to="/manageaccount"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Quản lý tài khoản</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                active === "/managegeneral" ? "active" : ""
              }`}
            >
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/managegeneral")}
                to="/managegeneral"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">
                    format_textdirection_r_to_l
                  </i>
                </div>
                <span className="nav-link-text ms-1">Quản lý chung</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                active === "/supportCustomer" ? "active" : ""
              }`}
            >
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/supportCustomer")}
                to="/supportCustomer"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">phone</i>
                </div>
                <span className="nav-link-text ms-1">Hỗ trợ khách hàng</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                active === "/managecomment" ? "active" : ""
              }`}
            >
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/managecomment")}
                to="/managecomment"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">comment</i>
                </div>
                <span className="nav-link-text ms-1">Quản lý đánh giá</span>
              </NavLink>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                onClick={() => handleSetActive("/detailProfile")}
                to="/detailProfile"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link text-white" onClick={handleLogout}>
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">logout</i>
                </div>
                <span className="nav-link-text ms-1">Đăng xuất</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
