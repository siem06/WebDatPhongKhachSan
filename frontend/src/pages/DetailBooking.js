import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {
  getRoomsById,
  getBookingById,
  updateBooking,
  getAllImage,
} from "../service/api";
import Notification from "../components/Notification";
import { useLocation } from "react-router-dom";

export default function DetailBooking() {
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState([]);
  const [roomImages, setRoomImages] = useState({});
  const [notification, setNotification] = useState("");
  const location = useLocation();
  const { state: data } = location;
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        if (data !== undefined) {
          const getBooking = await getBookingById(data.id);
          setBooking(getBooking);
          const roomIds = getBooking?.rooms.map((room) => room.id);
          const roomData = await getRoomsById(roomIds);
          setRoomDetails(roomData);

          // Fetch images for each room
          const images = {};
          for (const roomId of roomIds) {
            const roomImages = await getAllImage(roomId);
            images[roomId] = roomImages.length > 0 ? roomImages[0].img : "";
          }
          setRoomImages(images);
        }
      } catch (error) {
        console.error("Failed to fetch room data", error);
      }
    };

    fetchRoomData();
  }, [data]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const handleCancel = async () => {
    try {
      const newBooking = await updateBooking(data.id, { statusBooking: 5 });
      setBooking(newBooking);

      if (newBooking.methodPay === "cash") {
        alert("Đơn đặt phòng bạn đã hủy thành công!");
      } else {
        alert("Hãy đến tại khách sạn để làm thủ tục nhận lại tiền hoàn");
        showNotification("success", "Đơn đặt phòng bạn đã hủy thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const linkDetail = (roomId) => {
    navigate(`/room_detail?roomId=${roomId}`);
  };

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

  return (
    <div className="container mt-7 justify-content-center border">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <div className="d-flex w-full flex-col">
        <div className="relative d-flex flex-col justify-between p-4 sm:flex-row row">
          <div className="d-flex">
            <div className="text-black mb-2 col-5">Họ và tên:</div>
            <span className="text-black font-weight-bold">
              {booking?.user?.username}
            </span>
          </div>
          <div className="d-flex">
            <div className="text-black mb-2 col-5">Số điện thoại:</div>
            <span className="text-black font-weight-bold">
              {booking?.user?.phone}
            </span>
          </div>
          <div className="d-flex">
            <div className="text-black mb-2 col-5">Email:</div>
            <span className="text-black font-weight-bold">
              {booking?.user?.email}
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
            <div className="text-black mb-2 col-5">PTTT:</div>
            <span className="text-black font-weight-bold">
              {data.methodPay}
            </span>
          </div>
          <div className="d-flex">
            <div className="text-black mb-2 col-5">Trạng thái:</div>
            <span className="text-black font-weight-bold">
              {booking.statusBooking === 1 ? "Thành công" : "Đã hủy"}
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {booking?.statusBooking === 5 ? (
          <button
            className="w-20 m-auto btn btn-danger text-white"
            onClick={handleCancel}
            disabled
          >
            Hủy Phòng
          </button>
        ) : (
          <button
            className="w-20 m-auto btn btn-danger text-white"
            onClick={handleCancel}
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
                    <div className="text-black mb-2 col-7">Mã phòng:</div>
                    <span className="text-black font-weight-bold">
                      #MP{data?.id}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-7">Số ngày:</div>
                    <span className="text-black font-weight-bold">
                      {data?.totalDate}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-7">Số phòng:</div>
                    <span className="text-black font-weight-bold">
                      {data?.totalRoom}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-7">
                      Thời gian nhận phòng:
                    </div>
                    <span className="text-black font-weight-bold">
                      {data?.checkinDate}
                    </span>
                  </div>
                  <div className="d-flex">
                    <div className="text-black mb-2 col-7">
                      Thời gian trả phòng:
                    </div>
                    <span className="text-black font-weight-bold">
                      {data?.checkoutDate}
                    </span>
                  </div>
                  <div className="text-black mb-2 col-7">Danh sách phòng:</div>
                  {booking.rooms && booking.rooms.length > 0 ? (
                    booking.rooms.map((room) => (
                      <div key={room.id} className="mb-3">
                        <div className="d-flex">
                          <div className="text-black mb-2 col-7">Mã phòng:</div>
                          <span className="text-black font-weight-bold">
                            {room.code}
                          </span>
                        </div>
                        <div className="d-flex">
                          <div className="text-black mb-2 col-7">
                            Loại phòng:
                          </div>
                          <span className="text-black font-weight-bold">
                            {getTypeRoomLabel(room.type)}
                          </span>
                        </div>
                        <div className="d-flex">
                          <div className="text-black mb-2 col-7">Hình ảnh:</div>
                          <img
                            alt={`Room ${room.id}`}
                            loading="lazy"
                            decoding="async"
                            className="size-140 rounded-4 object-cover"
                            src={roomImages[room.id] || ""}
                            style={{
                              color: "transparent",
                              width: "140px",
                              height: "100px",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              linkDetail(room.id);
                            }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>Không có phòng nào được đặt</div>
                  )}
                  <div className="d-flex">
                    <div className="text-black mb-2 col-7">Ghi chú:</div>
                    <span className="text-black font-weight-bold">
                      {data?.bookingNote === ""
                        ? "Không có"
                        : data?.bookingNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
