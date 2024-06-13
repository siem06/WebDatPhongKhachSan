import moment from "moment";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import "../assets/css/profile.css";
import imgs from "../assets/image";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Notification from "../components/Notification";
import {
  changePassword,
  getByIdUserAll,
  updateProfile,
  uploadAvatar,
} from "../service/api";

export default function ProfileInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigation = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [resultMessage, setResultMessage] = useState(null);

  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    phone: user?.phone,
    birthday: user?.birthday,
    avatar: user?.avatar,
  });

  const [notification, setNotification] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [error, setError] = useState(user?.username);
  const [classSuccess, setClassSuccess] = useState("text-success");

  useEffect(() => {
    if (!user) {
      console.log("Thông tin người dùng chưa đăng nhập");
      navigation("/login");
    }
    getByIdUser();
  }, []);

  const getByIdUser = async () => {
    try {
      const result = await getByIdUserAll(user.id);
      sessionStorage.setItem("user", JSON.stringify(result));
    } catch (e) {}
  };

  const handleOldPass = (event) => {
    setOldPass(event.target.value);
  };

  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const handleReNewPass = (event) => {
    setReNewPass(event.target.value);
  };

  const saveBtn = async (event) => {
    event.preventDefault();
    try {
      const response = await updateProfile(user.id, formData);
      setFormData(response.user);
      showNotification("success", "Thông đã đã chỉnh sửa thành công!");
      sessionStorage.setItem("user", JSON.stringify(response.user));

      // alert("Thông tin đã chỉnh sửa thành công!");
    } catch (error) {
      console.log("Error", error);
      showNotification("error", "Đã có lỗi! Hãy thử lại!");
    }
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    if (newPass !== reNewPass) {
      setClassSuccess("text-danger");
      setError("Mật khẩu mới và mật khẩu nhập lại không khớp!");
      return;
    }

    try {
      const data = await changePassword(oldPass, newPass, reNewPass);
      showNotification("success", data.message);
      setOldPass("");
      setNewPass("");
      setReNewPass("");
    } catch (error) {
      console.log("Error", error);
      showNotification("success", error.response?.data?.message);
    }
  };

  const handleImgChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const result = await uploadAvatar({ avatar: file });
        console.log("bdhdhhddh", result.user);
        setFormData(result.user);
        showNotification("success", "Cập nhật ảnh đại điện thành công!");

        sessionStorage.setItem("user", JSON.stringify(result.user));
      } catch (error) {
        console.error(error.message);
        setResultMessage({ type: "error", message: error.message });
      } finally {
        setSelectedFile(null);
      }
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  const getFormattedDateTime = () => {
    return moment().format("YYYY-MM-DDTHH:mm");
  };

  // Format the dateExpiration to YYYY-MM-DDTHH:MM if it exists
  const formatBirthday = formData.birthday
    ? moment(formData.birthday).format("YYYY-MM-DDTHH:mm")
    : getFormattedDateTime();
  return (
    <div className="rounded bg-white mb-5">
      <div className="row">
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
          />
        )}
        <div className="border-righ">
          <div className="card border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">THÔNG TIN CÁ NHÂN</h4>
            </div>
            <div className="col-12">
              <label className="form-label">Cập nhật ảnh của bạn</label>
              <div className="d-flex align-items-center">
                <span className="position-relative d-flex" title="Thay đổi ảnh">
                  <span className="avatar avatar-xl me-4">
                    <img
                      id="uploadfile-1-preview"
                      className="avatar-img border-white rounded-circle custom-img"
                      src={formData?.avatar ? formData?.avatar : imgs.author}
                      alt="avatar"
                    />
                  </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImgChange}
                      style={{ display: "none" }}
                      id="fileInput"
                    />
                    <button
                      className=" btn-changAva text-capitalize"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      Đổi ảnh
                    </button>
                  </div>
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="form-label">
                  Họ và tên <span className="text-danger"></span>
                </label>
                <Input
                  // placeholder={userData.user.username}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className=" rounded-2 form-input"
                  styleInput={{ padding: "10px" }}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Ngày sinh <span className="text-danger">*</span>
                </label>
                <input
                  placeholder={formData?.birthday}
                  value={formatBirthday}
                  onChange={(e) =>
                    setFormData({ ...formData, birthday: e.target.value })
                  }
                  style={{
                    backgroundColor: "transparent",
                  }}
                  type="datetime-local"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="form-label">
                  Số điện thoại <span className="text-danger"></span>
                </label>
                <CurrencyFormat
                  placeholder={formData.phone}
                  value={formData.phone || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  style={{
                    backgroundColor: "transparent",
                  }}
                  mask=""
                />
              </div>
              <div className="col-md-12">
                <Input
                  placeholder={formData.email}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="text"
                  disabled
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
