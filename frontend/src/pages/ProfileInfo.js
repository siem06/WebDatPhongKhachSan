import React from "react";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ModalDetail from "../Layout/ModalDetail";
import imgs from "../assets/image";

export default function ProfileInfo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="rounded bg-white mb-5">
      <div className="row  ">
        <div className=" border-righ">
          <div class="card border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">THÔNG TIN CÁ NHÂN</h4>
            </div>
            <div class="col-12">
              <label class="form-label">Cập nhật ảnh của bạn</label>
              <div class="d-flex align-items-center">
                <label
                  class="position-relative me-4"
                  for="uploadfile-1"
                  title="Thay đổi ảnh"
                >
                  <span class="avatar avatar-xl">
                    <img
                      id="uploadfile-1-preview"
                      class="avatar-img rounded-circle border border-white border-3 shadow"
                      src={imgs.author}
                      alt=""
                    />
                  </span>
                </label>
                <label
                  class="btn btn-sm btn-primary-soft mb-0 text-white bg-primary
                  "
                  for="uploadfile-1"
                >
                  Thay đổi
                </label>
                <input
                  id="uploadfile-1"
                  class="form-control d-none "
                  type="file"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Input
                  title="Họ và tên"
                  placeholder="Nhập họ và tên"
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label class="form-label">
                  Ngày sinh <span class="text-danger">*</span>
                </label>
                <Input placeholder="Ngày sinh" type="date" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <Input
                  title="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  type="text"
                />
              </div>
              <div className="col-md-12">
                <Input title="Email" placeholder="Nhập email" type="text" />
              </div>
              <div className="text-end m-2 d-flex justify-content-end">
                <div className=" col-3 text-white">
                  <Button title=" Lưu" className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div class="card border p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
              <h4 className="text-right">THAY ĐỔI MẬT KHẨU</h4>
            </div>
            <div class="mb-3">
              <Input
                title="Mật khẩu hiện tại"
                placeholder="Nhập mật khẩu hiện tại"
                type="password"
                className="form-control"
              />
            </div>
            <div class="mb-3">
              <div class="input-group">
                <Input
                  title="Mật khẩu mới"
                  placeholder="Nhập mật khẩu mới"
                  type="password"
                  className="form-control"
                />
                <span class="input-group-text p-0 bg-transparent">
                  <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                </span>
              </div>
            </div>
            <div class="mb-3">
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
