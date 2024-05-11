import React, { useState, useEffect } from "react";
import ProfileInfo from "../pages/ProfileInfo";
import HistoryBook from "../pages/HistoryBook";
import "../assets/css/profile.css";
import LikeRoom from "../pages/LikeRoom";
import { logout } from "../service/api";
import { useNavigate } from "react-router-dom";
import { stringAvatar } from "../utils/UserLogo";
import Avatar from "@mui/material/Avatar";

export default function Profile({ setLoggedIn }) {
  const [selectedOption, setSelectedOption] = useState("profile");
  const [user, setUser] = useState(null);
  const navigation = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleLogout = async () => {
    try {
      const response = await logout();
      localStorage.removeItem("user");
      setLoggedIn(false);
      navigation("/");
      console.log(response);
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedInUser) {
      navigation("/login");
    } else {
      setUser(loggedInUser.user);
    }
  }, []);

  const renderOption = () => {
    switch (selectedOption) {
      case "profile":
        return <ProfileInfo />;
      case "history":
        return <HistoryBook />;
      case "likeRoom":
        return <LikeRoom />;
      case "logout":
        return <HistoryBook />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="container profile-container">
      <div className="row">
        <div className="col-md-3 sidebar bg-light">
          <nav className=" navbar-expand-lg navbar-light nabar-right card border p-3">
            <div class="text-center mb-3">
              <div class="avatar avatar-xl mb-2">
                {user && <Avatar {...stringAvatar(user.useName)} />}
              </div>
              <h6 class="mb-0">{user == null ? "Name" : user.useName}</h6>
              <a href="#" class="text-reset text-primary-hover small">
                {user == null ? "" : user.email}
              </a>
            </div>
            <ul className="navbar-nav mr-auto naviProfile">
              <li className="nav-item">
                <button
                  className={` btn btn-link nav-link ${
                    selectedOption === "profile" && "active"
                  }`}
                  onClick={() => handleOptionChange("profile")}
                >
                  <i class="bi bi-person fa-fw me-2"></i>
                  Thông tin
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-link nav-link ${
                    selectedOption === "history" && "active"
                  }`}
                  onClick={() => handleOptionChange("history")}
                >
                  <i class="bi bi-ticket-perforated fa-fw me-2"></i>
                  Lịch sử đặt phòng
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-link nav-link ${
                    selectedOption === "likeRoom" && "active"
                  }`}
                  onClick={() => handleOptionChange("likeRoom")}
                >
                  <i class="bi bi-heart fa-fw me-2"></i>
                  Phòng yêu thích
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-link nav-link ${
                    selectedOption === "logout" && "active"
                  }`}
                  onClick={handleLogout}
                >
                  <i class="fas fa-sign-out-alt fa-fw me-2"></i>
                  Đăng xuất
                </button>
              </li>
            </ul>
          </nav>
          {/* </div> */}
        </div>
        <div className="col-md-9">{renderOption()}</div>
      </div>
    </div>
  );
}
