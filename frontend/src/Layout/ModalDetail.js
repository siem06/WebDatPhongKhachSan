import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import { getAllImage, getRoomsById } from "../service/api";

export default function ModalDetail(props) {
  const {
    header,
    title,
    bookDetail,
    changePass,
    btnclose,
    btnsave,
    forgotPass,
    data,
  } = props;

  const getTypeRoomLabel = (typeRoom) => {
    switch (typeRoom) {
      case 1:
        return "Phòng Tiêu chuẩn";
      case 2:
        return "Phòng Cao cấp";
      case 3:
        return "Phòng Đặc biệt";
      case 4:
        return "Phòng Tổng thống";
      default:
        return "Không xác định";
    }
  };
  const navigation = useNavigate();

  const [roomDetails, setRoomDetails] = useState({});
  const [roomImages, setRoomImages] = useState([]);
  useEffect(() => {
    console.log("dd", data);
    const fetchRoomData = async () => {
      try {
        if (data !== undefined) {
          console.log("ddssssssss", data.idRoom);
          const roomData = await getRoomsById(data.idRoom);
          const imagesData = await getAllImage(data.idRoom);
          const imagesObj = {};
          imagesObj[data.idRoom] = imagesData[0];
          setRoomDetails(roomData);
          setRoomImages(imagesObj);
        } else {
          return;
        }
      } catch (error) {
        console.error("Failed to fetch room data", error);
      }
    };

    fetchRoomData();
  }, [data]);
  const link_detail = (roomId) => {
    navigation(`/room_detail?roomId=${roomId}`);
  };
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
          <p>
            Chúng tôi đã gửi thông tin vé chi tiết về mail bạn. Vui lòng kiểm
            tra.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5 className="text-center title-header text-black">{title}</h5>
          {bookDetail && (
            <div>
              <div className="d-flex w-full flex-col ">
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">Họ và tên: </div>
                    <span className="text-black font-weight-bold">
                      {data.useName}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">Số điện thoại:</div>
                    <span className="text-black font-weight-bold">
                      {data.phone}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">Email: </div>
                    <span className="text-black font-weight-bold">
                      {data.email}
                    </span>
                  </div>
                </div>
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5 ">
                      Tổng giá phòng:
                    </div>
                    <span className="text-black font-weight-bold">
                      <CurrencyFormat
                        value={data.totalPrice}
                        thousandSeparator={true}
                        suffix={"VND"}
                        decimalScale={2}
                        displayType="text"
                        className="text-black "
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      />
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">PTTT: </div>
                    <span className="text-black font-weight-bold">
                      {data.methodPay}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Trạng thái: </div>
                    <span className="text-black font-weight-bold">
                      {data.statusBooking === 1 ? "Thành công" : "Đã hủy"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <button
                  className="w-20 m-auto btn btn-danger text-white"
                  onClick={() => console.log("Cancel")}
                >
                  Hủy Phòng
                </button>
              </div>
              <div className="flex-col relative justify-between mt-2">
                <div className="relative flex flex-col">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-10 col-md-8 col-lg-9">
                        <div className="p-4 border rounded bg-white">
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Mã phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              #MP{data.bookingId}
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Thời gian nhận phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              {data.checkinDate}
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Thời gian trả phòng:
                            </div>
                            <span className="text-black font-weight-bold">
                              {data.checkoutDate}
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Loại phòng:
                            </div>
                            <img
                              alt={`Room ${data.idRoom}`}
                              loading="lazy"
                              decoding="async"
                              data-nimg="1"
                              className="size-140 rounded-4 object-cover"
                              src={
                                roomImages && roomImages[data.idRoom]
                                  ? roomImages[data.idRoom].img
                                  : ""
                              }
                              style={{
                                color: "transparent",
                                width: "140px",
                                height: "100px",
                              }}
                              onClick={(e) => {
                                e.preventDefault(); // Prevent the default link action
                                link_detail(data.idRoom);
                              }}
                            />
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7"></div>
                            <span className="text-black font-weight-bold">
                              {getTypeRoomLabel(data.typeRoom)}
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Ghi chú:
                            </div>
                            <span className="text-black font-weight-bold">
                              {data.bookingNote === ""
                                ? "Không có"
                                : data.bookingNote}
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
        {btnclose && (
          <Button style={{ backgroundColor: "#5143d9" }} onClick={props.onHide}>
            Đóng
          </Button>
        )}
        {btnsave && (
          <Button style={{ backgroundColor: "#5143d9" }} onClick={props.onHide}>
            Lưu
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
