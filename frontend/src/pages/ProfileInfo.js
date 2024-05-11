import React, { useState, useEffect } from "react";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import imgs from "../assets/image";
import { changePassword, updateProfile, uploadAvatar } from "../service/api";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const navigation = useNavigate();
  const [img, setImg] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);
  const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [error, setError] = useState("");
  const [classSuccess, setClassSuccess] = useState("text-success");
  const [avatar, setAvatar] = useState(imgs.author);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedInUser) {
      console.log("Thông tin người dùng chưa đăng nhập");
      navigation("/login");
    } else {
      // Lưu dữ liệu người dùng vào state
      setUserData(loggedInUser);
      setAvatar(loggedInUser.user.avatar || imgs.author);
      setUseName(loggedInUser.user.useName || "");
      setEmail(loggedInUser.user.email || "");
      setPhone(loggedInUser.user.phone || "");
      setBirthday(loggedInUser.user.birthday || "");
    }
  }, [navigation]);

  const handleOldPass = (event) => {
    setOldPass(event.target.value);
  };

  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const handleReNewPass = (event) => {
    setReNewPass(event.target.value);
  };
  const handleUseName = (event) => {
    setUseName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const saveBtn = async (event) => {
    event.preventDefault();
    try {
      // Tạo đối tượng newData từ các giá trị state tương ứng
      const newData = {
        useName: useName,
        email: email,
        phone: phone,
        birthday: birthday,
      };
      await updateProfile(userData.user.id, newData);
      const updatedUserData = {
        ...userData,
        user: { ...userData.user, ...newData },
      };
      setUserData(updatedUserData);
      alert("Thông tin đã chỉnh sửa thành công!");
    } catch (error) {
      console.log("Error", error);
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
    setImg(file);
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      const result = await uploadAvatar(formData);

      const updatedUserData = {
        ...userData,
        user: { ...userData.user, avatar: result.user.avatar },
      };
      // Lưu dữ liệu người dùng đã được cập nhật
      localStorage.setItem("user", JSON.stringify(updatedUserData));
      // Cập nhật lại dữ liệu người dùng trong state
      setUserData(updatedUserData);
      setAvatar(result.user.avatar || imgs.author);
      setResultMessage({ type: "success", message: result });
    } catch (error) {
      console.error(error.message);
      setResultMessage({ type: "error", message: error.message });
    }
  };

  if (!userData) {
    return null;
  }

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
                      // src="https://drive.google.com/thumbnail?id=1TQteHOL2N6-APAph5lIa4qjsX4Lqi1l3"
                      src={avatar}
                      alt="ff"
                    />
                  </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImgChange}
                    />
                    <button
                      className="m-2"
                      onClick={handleUpload}
                      disabled={!selectedFile}
                    >
                      Upload Image
                    </button>
                  </div>
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Input
                  title="Họ và tên"
                  placeholder={
                    userData.user ? userData.user.useName : "Chưa có thông tin"
                  }
                  type="text"
                  value={useName}
                  onChange={handleUseName}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Ngày sinh <span className="text-danger">*</span>
                </label>
                <Input
                  placeholder={userData.user.birthday}
                  type="text"
                  value={birthday}
                  onChange={handleBirthday}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <Input
                  title="Số điện thoại"
                  placeholder={userData.user.phone}
                  type="text"
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
              <div className="col-md-12">
                <Input
                  title="Email"
                  placeholder={userData.user.email}
                  type="text"
                  value={email}
                  onChange={handleEmail}
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
