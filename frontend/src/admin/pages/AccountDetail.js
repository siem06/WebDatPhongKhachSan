import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layout/Header";
import ProfileInfo from "../../pages/ProfileInfo";

export default function AccountDetail() {
  return (
    <main className="main-content position-relative  border-radius-lg ">
      <Header pageCurrent="Thông tin cá nhân" />
      <ProfileInfo />
    </main>
  );
}
