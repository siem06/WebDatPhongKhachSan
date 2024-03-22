import React, { useState } from "react";
import ProfileInfo from "../pages/ProfileInfo";
import HistoryBook from "../pages/HistoryBook";
import "../assets/css/profile.css";
import LikeRoom from "../pages/LikeRoom";
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
        <div className="col-md-3 sidebar">
          {/* <div>Tên</div>
          <div> */}
          <nav className=" navbar-expand-lg navbar-light bg-light nabar-right">
            <ul className="navbar-nav mr-auto naviProfile">
              <li className="nav-item userProfile">
                <span className="lnr lnr-user"></span>User
              </li>
              <li className="nav-item">
                <button
                  className={` btn btn-link nav-link ${
                    selectedOption === "profile" && "active"
                  }`}
                  onClick={() => handleOptionChange("profile")}
                >
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
