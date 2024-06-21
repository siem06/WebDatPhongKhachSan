import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import {
  getAllImage,
  getRoomsById,
  updateProfile,
  getByIdUserAll,
  updateRoles,
  updateBookingStatus,
  getBookingById,
  updateBooking,
} from "../service/api";
import Notification from "../components/Notification";

export default function ModalDetail(props) {
  const {
    header,
    title,
    bookDetail,
    changePass,
    btnclose,
    btnsave,
    data,
    userDetails,
  } = props;

  const getTypeRoomLabel = (type) => {
    switch (type) {
      case 1:
        return "Phòng đơn Tiêu chuẩn";
      case 2:
        return "Phòng đơn Cao cấp";
      case 3:
        return "Phòng đơn Đặc biệt";
      case 4:
        return "Phòng Tổng thống";
      case 5:
        return "Phòng đôi Tiêu chuẩn";
      case 6:
        return "Phòng đôi Cao cấp";
      case 7:
        return "Phòng đôi Đặc biệt";
      default:
        return "Không xác định";
    }
  };
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState({});
  const [permissions, setPermissions] = useState({});
  const [newData, setEditableData] = useState(data);
  const [notification, setNotification] = useState("");
  const [reloadData, setReloadData] = useState(false);

  const [selectedRoles, setSelectedRoles] = useState([]);
  useEffect(() => {
    console.log("Selected roles", data);
    const fetchRoomData = async () => {
      try {
        if (data !== undefined) {
          const getBooking = await getBookingById(data.id);
          const roomIds = getBooking?.rooms.map((room) => room.id);
          const roomData = await getRoomsById(roomIds);
          setRoomDetails(roomData);
        }
      } catch (error) {
        console.error("Failed to fetch room data", error);
      }
    };

    fetchRoomData();
  }, [data]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (data.id !== undefined) {
          const userData = await getByIdUserAll(data.id);
          setEditableData(userData);
          setSelectedRoles(userData.roles);
          const userRoles = userData.roles;
          const initialPermissions = {};
          userRoles.forEach((role) => {
            initialPermissions[role.name] = true;
          });
          setPermissions(initialPermissions);
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUserData();
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableData({
      ...newData,
      [name]: value,
    });
  };
  const handleSave = async () => {
    try {
      const roles = Object.keys(permissions).map((key) => ({
        name: key,
        active: permissions[key],
      }));

      const updatedData = {
        ...newData,
        role: roles,
      };

      await updateProfile(data.id, updatedData);
      const newRoles = selectedRoles.map((role) => {
        if (role === 1) {
          return "user";
        } else {
          return "admin";
        }
      });

      await updateRoles(newData.id, newRoles);
      props.onHide();
    } catch (error) {
      console.error("Failed to save data", error);
    }
  };
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  const handelCancel = async () => {
    try {
      const newBooking = await updateBooking(data.id, { statusBooking: 5 });
      console.log("new booking", newBooking);
      setReloadData((prev) => !prev);
      showNotification("success", "Đơn đặt phòng bạn đã hủy thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  const link_detail = (roomId) => {
    navigate(`/room_detail?roomId=${roomId}`);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    setSelectedRoles((prevSelectedRoles) => {
      if (checked) {
        return [...prevSelectedRoles, Number(value)];
      } else {
        return prevSelectedRoles.filter((roleId) => roleId !== Number(value));
      }
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center text-black"
        >
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5 className="text-center title-header text-black">{title}</h5>

          {bookDetail && (
            <div>
              {notification && (
                <Notification
                  type={notification.type}
                  message={notification.message}
                />
              )}
              <div className="d-flex w-full flex-col ">
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Họ và tên: </div>
                    <span className="text-black font-weight-bold">
                      {newData.username}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Số điện thoại:</div>
                    <span className="text-black font-weight-bold">
                      {newData.phone}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Email: </div>
                    <span className="text-black font-weight-bold">
                      {newData.email}
                    </span>
                  </div>
                </div>
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Tổng giá phòng:</div>
                    <span className="text-black font-weight-bold">
                      <CurrencyFormat
                        value={data.totalPrice}
                        thousandSeparator={true}
                        suffix={"VND"}
                        decimalScale={2}
                        displayType="text"
                        className="text-black"
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
              <div className="d-flex justify-content-center">
                {data.statusBooking === 5 ? (
                  <button
                    className="w-20 m-auto btn btn-danger text-white"
                    onClick={handelCancel}
                    disabled
                  >
                    Hủy Phòng
                  </button>
                ) : (
                  <button
                    className="w-20 m-auto btn btn-danger text-white"
                    onClick={handelCancel}
                  >
                    Hủy Phòng
                  </button>
                )}
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
                              #MP{data.id}
                            </span>
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7">
                              Số ngày:
                            </div>
                            <span className="text-black font-weight-bold">
                              {data.totalDate}
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
                              alt={`Room ${roomDetails?.id}`}
                              loading="lazy"
                              decoding="async"
                              data-nimg="1"
                              className="size-140 rounded-4 object-cover"
                              src={
                                roomDetails?.images
                                  ? roomDetails?.images[0].img
                                  : ""
                              }
                              style={{
                                color: "transparent",
                                width: "140px",
                                height: "100px",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                link_detail(roomDetails?.id);
                              }}
                            />
                          </div>
                          <div className="d-flex">
                            <div className="text-black mb-2 col-7"></div>
                            <span className="text-black font-weight-bold">
                              {getTypeRoomLabel(roomDetails?.type)}
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
                <div
                  className="relative
flex flex-col"
                >
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
          {userDetails && (
            <div>
              <div className="d-flex w-full flex-col">
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Họ và tên: </div>
                    <input
                      type="text"
                      name="username"
                      placeholder={data.username}
                      value={newData.username}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Email: </div>
                    <input
                      type="email"
                      name="email"
                      placeholder={data.email}
                      value={newData.email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Số điện thoại:</div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={data.phone}
                      value={newData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-5">Trạng thái: </div>
                    <select
                      name="status"
                      value={newData.status}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value={1}>Đã xác thực</option>
                      <option value={0}>Chưa xác thực</option>
                      <option value={5}>Khóa tài khảon</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex-col relative justify-between mt-2">
                <div className="relative flex flex-col">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="d-flex">
                        <div className="text-black mb-2 col-5 m-3">
                          Quyền hạn:
                        </div>
                      </div>

                      <div className="d-flex">
                        <label>
                          <input
                            type="checkbox"
                            id="1"
                            value={1}
                            checked={selectedRoles.includes(1)}
                            onChange={handleCheckboxChange}
                          />
                          User
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="2"
                            value={2}
                            checked={selectedRoles.includes(2)}
                            onChange={handleCheckboxChange}
                          />
                          Admin
                        </label>
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
          <Button style={{ backgroundColor: "#5143d9" }} onClick={handleSave}>
            Lưu
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
