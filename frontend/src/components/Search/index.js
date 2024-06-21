import "@fortawesome/fontawesome-free/css/all.min.css";
import { Box, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import dayjs from "dayjs";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useState } from "react";
import { getAllRooms, getBookingByStatus } from "../../service/api";
import "./style.css";

export default function Search({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  const [availableRooms, setAvailableRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => setter(Math.max(0, value - 1));

  const searchAvailableRooms = async (checkInDate, checkOutDate) => {
    try {
      const allRooms = await getAllRooms(); // Lấy danh sách tất cả các phòng
      const existingBookings = await getBookingByStatus(); // Lấy danh sách các đặt phòng hiện tại
      const newCheckin = dayjs(checkInDate).startOf("day"); // Ngày check-in được chọn
      const newCheckout = dayjs(checkOutDate).startOf("day"); // Ngày check-out được chọn

      // Lưu danh sách các phòng còn trống
      let availableRooms = allRooms.slice(); // Khởi tạo với tất cả các phòng

      // Duyệt qua từng đặt phòng hiện tại để kiểm tra xung đột
      for (let i = 0; i < existingBookings.length; i++) {
        const existingBooking = existingBookings[i];
        const existingCheckin = dayjs(existingBooking.checkinDate).startOf(
          "day"
        ); // Ngày check-in của đặt phòng hiện tại
        const existingCheckout = dayjs(existingBooking.checkoutDate).startOf(
          "day"
        ); // Ngày check-out của đặt phòng hiện tại

        // Kiểm tra xem có xung đột giữa ngày check-in và check-out đã chọn với các đặt phòng hiện tại không
        if (
          newCheckin.isBefore(existingCheckout) &&
          newCheckout.isAfter(existingCheckin)
        ) {
          // Nếu có xung đột, loại bỏ phòng này khỏi danh sách phòng còn trống
          existingBooking.rooms.forEach((bookedRoom) => {
            availableRooms = availableRooms.filter(
              (room) => room.id !== bookedRoom.id
            );
          });
        }
      }

      // Trả về danh sách các phòng còn trống
      return availableRooms;
    } catch (error) {
      console.error("Lỗi khi tìm kiếm các phòng còn trống:", error);
      throw error;
    }
  };

  const handleSearch = async () => {
    try {
      const rooms = await searchAvailableRooms(checkInDate, checkOutDate);
      console.log("Available rooms:", rooms);
      setAvailableRooms(rooms);
      onSearchResults(rooms);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm phòng:", error);
    }
  };

  const handleDateChange = (newValue) => {
    const startDate = dayjs(checkInDate).startOf("day");
    const endDate = dayjs(newValue).startOf("day");
    const diff = endDate.diff(startDate, "day");
    setCheckOutDate(newValue);
  };

  return (
    <>
      <form className="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-3">
            <div className="text-15 text-dark">Nhận phòng</div>
            <Box style={{ padding: "5px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={checkInDate}
                  onChange={(newValue) => setCheckInDate(newValue)}
                  minDate={dayjs().startOf("day")}
                  renderInput={(params) => (
                    <TextField {...params} className="input-field" />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </div>

          <div className="col-lg-3">
            <div className="text-15 text-dark">Trả phòng</div>
            <Box style={{ padding: "5px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={checkOutDate}
                  onChange={(newValue) => {
                    setCheckOutDate(newValue);
                    handleDateChange(newValue);
                  }}
                  minDate={dayjs(checkInDate).add(1, "day")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </div>

          <div className="col-lg-3">
            <div className="form-control-border form-control-transparent form-fs-md d-flex">
              <i className="fa fa-person fs-3 me-2 mt-2 text-dark"></i>
              <div className="w-100">
                <label className="form-label">Khách &amp; phòng</label>
                <div className="dropdown guest-selector me-2">
                  <input
                    type="text"
                    className="form-guest-selector form-control selection-result"
                    value={`${adults} Người lớn - ${children} Trẻ em `}
                    data-bs-auto-close="outside"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    readOnly
                  />
                  <ul className="dropdown-menu guest-selector-dropdown p-4">
                    <li className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-0">Người lớn</h6>
                        <small> Lớn hơn 13 tuổi</small>
                      </div>
                      <div className="hstack gap-1 align-items-center">
                        <button
                          type="button"
                          className="btn btn-link adult-remove p-0 mb-0"
                          onClick={() => handleDecrement(setAdults, adults)}
                        >
                          <i className="fa fa-minus-circle fs-5 fa-fw"></i>
                        </button>
                        <h6 className="guest-selector-count mb-0 adults">
                          {adults}
                        </h6>
                        <button
                          type="button"
                          className="btn btn-link adult-add p-0 mb-0"
                          onClick={() => handleIncrement(setAdults, adults)}
                        >
                          <i className="fa fa-plus-circle fs-5 fa-fw"></i>
                        </button>
                      </div>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-0">Trẻ em</h6>
                        <small>Nhỏ hơn 13 tuổi</small>
                      </div>
                      <div className="hstack gap-1 align-items-center">
                        <button
                          type="button"
                          className="btn btn-link child-remove p-0 mb-0"
                          onClick={() => handleDecrement(setChildren, children)}
                        >
                          <i className="fa fa-minus-circle fs-5 fa-fw"></i>
                        </button>
                        <h6 className="guest-selector-count mb-0 child">
                          {children}
                        </h6>
                        <button
                          type="button"
                          className="btn btn-link child-add p-0 mb-0"
                          onClick={() => handleIncrement(setChildren, children)}
                        >
                          <i className="fa fa-plus-circle fs-5 fa-fw"></i>
                        </button>
                      </div>
                    </li>
                    <li className="dropdown-divider"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 ms-auto">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="icon-lg btn btn-round btn-primary mb-0"
                onClick={handleSearch}
              >
                <i className="fa fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
