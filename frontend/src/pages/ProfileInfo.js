import React, { useState } from "react";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ModalDetail from "../Layout/ModalDetail";
import imgs from "../assets/image";
import { changePassword, getAll, uploadAvatar } from "../service/api";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const navigation = useNavigate();
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")).user
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [error, setError] = useState("");
  const [classSuccess, setClassSuccess] = useState("text-success");
  const [avatar, setAvatar] = useState(user ? user.avatar : imgs.author);

  const handleOldPass = (event) => {
    setOldPass(event.target.value);
  };
  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };
  const handleReNewPass = (event) => {
    setReNewPass(event.target.value);
  };
  if (!user) {
    console.log("Thông tin người dùng chưa đăng nhập");
    navigation("/login");
    return null;
  }

  const saveBtn = async (event) => {
    event.preventDefault();
    try {
      await getAll();
    } catch (error) {
      console.log("Error");
    }
  };
  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      const data = await changePassword(oldPass, newPass, reNewPass);
      setClassSuccess("text-success");
      setError(data.message);
    } catch (error) {
      console.log("Error", error);
      setClassSuccess("text-danger");
      setError(error.response.data.message);
    }
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    // file.preview= URL.createObjectURL
    setImg(file); // Cập nhật img (nếu cần)
    setSelectedFile(file);
  };
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      const result = await uploadAvatar(formData);
      localStorage.setItem("user", JSON.stringify(result.user));
      setUser(result.user);
      setAvatar(result.user.avatar);
      console.log("ava", user);
      setResultMessage({ type: "success", message: result });
    } catch (error) {
      console.error(error.message);
      setResultMessage({ type: "error", message: error.message });
    }
  };

  return (
    <div className="rounded bg-white mb-5">
      <div className="row">
        <div className="border-righ">
          <div className="card border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">THÔNG TIN CÁ NHÂN</h4>
            </div>
            <div className="col-12">
              <label className="form-label">Cập nhật ảnh của bạn</label>
              <div className="d-flex align-items-center">
                <span className="position-relative me-4" title="Thay đổi ảnh">
                  <span className="avatar avatar-xl">
                    <img
                      id="uploadfile-1-preview"
                      className="avatar-img rounded-circle border border-white border-3 shadow"
                      src={avatar}
                      alt=""
                    />
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImgChange}
                  />
                </span>
                <button onClick={handleUpload} disabled={!selectedFile}>
                  Upload Image
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Input
                  title="Họ và tên"
                  placeholder={user ? user.useName : "Chưa có thông tin"}
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Ngày sinh <span className="text-danger">*</span>
                </label>
                <Input placeholder={user.birthday} type="text" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <Input
                  title="Số điện thoại"
                  placeholder={user.phone}
                  type="text"
                />
              </div>
              <div className="col-md-12">
                <Input title="Email" placeholder={user.email} type="text" />
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
          <div className="card border p-3 mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">THAY ĐỔI MẬT KHẨU</h4>
            </div>
            <div className="mb-3">
              <Input
                title="Mật khẩu hiện tại"
                placeholder="Nhập mật khẩu hiện tại"
                type="password"
                className="form-control"
                value={oldPass}
                onChange={handleOldPass}
              />
            </div>
            <div className="mb-3">
              <div className="input-group">
                <Input
                  title="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới"
                  type="password"
                  className="form-control"
                  value={newPass}
                  onChange={handleNewPass}
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
                value={reNewPass}
                onChange={handleReNewPass}
              />
            </div>
            {error && <p className={classSuccess}>{error}</p>}
            <div className="text-end m-2 d-flex justify-content-end">
              <div className="col-3 text-white">
                <Button
                  title="Thay đổi"
                  className="text-white"
                  onClick={handleChangePassword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
