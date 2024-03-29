import React from "react";
import "../assets/css/profile.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ModalDetail from "../Layout/ModalDetail";

export default function ProfileInfo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="rounded bg-white mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
            <Button title="Đổi mật khẩu" onClick={() => setModalShow(true)}/>
            <ModalDetail
              show={modalShow}
              changePass={true}
              btnSave
              header="Đổi mật khẩu"
              title="Thay đổi mật khẩu"
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">THÔNG TIN</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Họ và tên</label>
                <Input placeholder="Nhập họ và tên" type="text"/>
              </div>
              <div className="col-md-6">
                <label className="labels">Ngày Sinh</label>
                <Input placeholder="Nhập họ và tên" type="date"/>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Số điện thoại</label>
                <Input placeholder="Nhập số điện thoại" type="text"/>
              </div>
              <div className="col-md-12">
                <label className="labels">Email</label>
                <Input placeholder="Nhập email" type="text"/>
              </div> 
            </div>
            <div className="mt-5 text-center">
              <Button title=" Lưu"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
