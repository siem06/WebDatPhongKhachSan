import React, { useState } from "react";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ModalDetail from "../Layout/ModalDetail";
import imgs from "../assets/image";
import { getAll } from "../service/api";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const navigation = useNavigate();

  const [modalShow, setModalShow] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log("Thông tin người dùng đã đăng nhập:", user.user.id);
  } else {
    console.log("gg");
    navigation("/login");
  }
  const saveBtn = async (event) => {
    event.preventDefault();
    try {
      await getAll();
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <div className="rounded bg-white mb-5">
      <div className="row  ">
        <div className=" border-righ">
          <div className="card border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">{user.user.id} THÔNG TIN CÁ NHÂN</h4>
            </div>
            <div className="col-12">
              <label className="form-label">Cập nhật ảnh của bạn</label>
              <div className="d-flex align-items-center">
                <label
                  className="position-relative me-4"
                  for="uploadfile-1"
                  title="Thay đổi ảnh"
                >
                  <span className="avatar avatar-xl">
                    <img
                      id="uploadfile-1-preview"
                      className="avatar-img rounded-circle border border-white border-3 shadow"
                      src={imgs.author}
                      alt=""
                    />
                  </span>
                </label>
                <label
                  className="btn btn-sm btn-primary-soft mb-0 text-white bg-primary
                  "
                  for="uploadfile-1"
                >
                  Thay đổi
                </label>
                <input
                  id="uploadfile-1"
                  className="form-control d-none "
                  type="file"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Input
                  title="Họ và tên"
                  placeholder={
                    user.user.useName == null
                      ? "Chưa có thông tin"
                      : user.user.useName
                  }
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Ngày sinh <span className="text-danger">*</span>
                </label>
                <Input placeholder={user.user.birthday} type="text" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <Input
                  title="Số điện thoại"
                  placeholder={user.user.phone}
                  type="text"
                />
              </div>
              <div className="col-md-12">
                <Input
                  title="Email"
                  placeholder={user.user.email}
                  type="text"
                />
              </div>
              <div className="text-end m-2 d-flex justify-content-end">
                <div className=" col-3 text-white">
                  <Button
                    title=" Lưu"
                    className="text-white"
                    onClick={saveBtn}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">THAY ĐỔI MẬT KHẨU</h4>
            </div>
            <div className="mb-3">
              <Input
                title="Mật khẩu hiện tại"
                placeholder="Nhập mật khẩu hiện tại"
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <div className="input-group">
                <Input
                  title="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới"
                  type="password"
                  className="form-control"
                />
                <span className="input-group-text p-0 bg-transparent">
                  <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <Input
                title="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu"
                type="password"
                className="form-control"
              />
            </div>
            <div className="text-end m-2 d-flex justify-content-end">
              <div className="col-3 text-white">
                <Button title="Thay đổi" className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
