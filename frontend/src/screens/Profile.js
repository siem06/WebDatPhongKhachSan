import React, { useState } from "react";
import ProfileInfo from "../pages/ProfileInfo";
import HistoryBook from "../pages/HistoryBook";
import "../assets/css/profile.css";
import LikeRoom from "../pages/LikeRoom";
import imgs from "../assets/image";
export default function Profile() {
  const [selectedOption, setSelectedOption] = useState("profile");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

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
                <img
                  class="avatar-img rounded-circle border border-2 border-white"
                  src={imgs.instagram1}
                  alt=""
                />
              </div>
              <h6 class="mb-0">Jacqueline Miller</h6>
              <a href="#" class="text-reset text-primary-hover small">
                hello@gmail.com
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
                  onClick={() => handleOptionChange("logout")}
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
