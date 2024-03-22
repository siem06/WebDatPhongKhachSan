import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../components/Input/Input";
export default function ModalDetail(props) {
  const { header,title,bookDetail, changePass, btnClose, btnSave } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center text-black">
         {header}
          {/* <h2 className="text-center">Đặt phòng thành công</h2>
        <p>
          Chúng tôi đã gửi thông tin vé chi tiết về mail bạn. Vui lòng kiểm tra.
        </p> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5 className="text-center title-header text-black">
           {title}
          </h5>
          {bookDetail && (
            <div>
              <div className="d-flex w-full flex-col pb-8 ">
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">Họ và tên: </div>
                    <span className="text-black font-weight-bold">
                      Phan Hong Siem
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">Số điện thoại:</div>
                    <span className="text-black font-weight-bold">
                      0362113708
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">Email: </div>
                    <span className="text-black font-weight-bold">
                      hongsiem20022gmail.com
                    </span>
                  </div>
                </div>
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Tổng giá phòng:</div>
                    <span className="text-black font-weight-bold">
                      1.220.000Đ
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">PTTT: </div>
                    <span className="text-black font-weight-bold">MOMO</span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Trạng thái: </div>
                    <span className="text-black font-weight-bold">
                      Thành công
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-col relative justify-between">
                <div className="relative flex flex-col">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-10 col-md-8 col-lg-6">
                        <div className="p-4 border rounded bg-white">
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Mã phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              #afdc
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Thời gian nhận phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              1/1/2023
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Thời gian trả phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              2/1/2023
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Loại phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              Phòng view bãi biển
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Ghi chú:
                            </div>
                            <span className="text-black font-weight-bold">
                              Không có
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {changePass && (
            <div>
              <div className="flex-col relative justify-between">
                <div className="relative flex flex-col">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="p-4 border rounded bg-white">
                        <Input
                          title="Mật khẩu cũ"
                          placeholder="Mật khẩu cũ"
                          type="text"
                        />

                        <Input
                          title="Mật khẩu mới"
                          placeholder="Mật khẩu mới"
                          type="text"
                        />

                        <Input
                          title="Nhập lại mật khẩu"
                          placeholder="Nhập lại mật khẩu"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {btnClose && <Button onClick={props.onHide}>Đóng</Button>}
        {btnSave && <Button onClick={props.onHide}>Lưu</Button>}
      </Modal.Footer>
    </Modal>
  );
}
