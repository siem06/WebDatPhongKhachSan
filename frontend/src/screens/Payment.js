import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useLocation } from "react-router-dom";
import "../assets/css/responsive.css";
import "../assets/css/room.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import Breadcrumb from "../components/Breadcrumb";
import Notification from "../components/Notification";
import Paypal from "../components/Paypal";
import {
  createBookingDetails,
  getAllBooking,
  getAllImage,
  getPayment,
  getRoomsById,
  postBooking,
  removeAllCart,
  sendEmail,
} from "../service/api";

import moment from "moment";

export default function Payment() {
  const [currentTab, setCurrentTab] = useState(1);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const { roomIds, accountId } = location.state;
  const [roomDetails, setRoomDetails] = useState([]);
  const [note, setNote] = useState("");
  const [notification, setNotification] = useState(null);
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
  const handleNote = (event) => {
    setNote(event.target.value);
  };
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const goToPreviousTab = () => {
    if (currentTab > 1) {
      setCurrentTab(currentTab - 1);
    }
  };

  const isActiveTab = (tab) => {
    return tab === currentTab;
  };

  const [roomCount, setRoomCount] = useState(1);

  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));

  const defaultCheckOutDate = dayjs().add(1, "day");

  const [daysDiff, setDaysDiff] = useState(0);
  const handleDateChange = (newValue) => {
    const startDate = dayjs(checkInDate).startOf("day");
    const endDate = dayjs(newValue).startOf("day");
    const diff = endDate.diff(startDate, "day");
    setDaysDiff(diff);
    setCheckOutDate(newValue); // Cập nhật state checkOutDate khi ngày trả phòng thay đổi
  };

  // const totalPrice =
  //   roomDetails && roomDetails.price
  //     ? roomDetails.price * daysDiff
  //     : "Loading...";
  const totalPrice = roomDetails.reduce(
    (total, room) => total + room.price * daysDiff * roomCount,
    0
  );

  const saveBookingToDatabase = async () => {
    const bookingData = {
      userId: loggedInUser.id,
      totalPrice: totalPrice,
      totalRoom: roomCount,
      totalDate: daysDiff,
      checkinDate: checkInDate,
      checkoutDate: checkOutDate,
      statusBooking: 0,
      note: note,
      methodPay: paymentMethod,
    };

    try {
      const response = await postBooking(bookingData);
      const detailsPromises = roomIds.map(async (roomId) => {
        const data = {
          bookingId: response.id,
          roomId: roomId,
        };
        await createBookingDetails(data);
      });
      await Promise.all(detailsPromises);
      localStorage.setItem("booking", JSON.stringify(response));
      console.log("delo", response);
      return bookingData;
    } catch (error) {
      console.error("Có lỗi xảy ra khi đặt phòng:", error);
      return null;
    }
  };
  // Hàm kiểm tra xem ngày nhận phòng và ngày trả phòng của các phòng trong cùng một đơn đặt phòng có trùng nhau hay không

  const checkConflict = async () => {
    try {
      const existingBookings = await getAllBooking();
      console.log("existingBookings", existingBookings);

      const newCheckin = dayjs(checkInDate).startOf("day");
      const newCheckout = dayjs(checkOutDate).startOf("day");
      console.log("newCheckin", newCheckin.format(), newCheckout.format());

      for (let i = 0; i < existingBookings.length; i++) {
        const existingBooking = existingBookings[i];
        const existingCheckin = dayjs(existingBooking.checkinDate).startOf(
          "day"
        );
        const existingCheckout = dayjs(existingBooking.checkoutDate).startOf(
          "day"
        );
        console.log(
          "existingCheckin",
          existingCheckin.format(),
          existingCheckout.format()
        );

        // Kiểm tra xem có sự trùng lặp ngày đặt phòng
        if (
          newCheckin.isBefore(existingCheckout) &&
          newCheckout.isAfter(existingCheckin)
        ) {
          // Kiểm tra xem có sự trùng lặp phòng
          for (let j = 0; j < roomIds.length; j++) {
            const newRoomId = roomIds[j];

            for (let k = 0; k < existingBooking.rooms.length; k++) {
              const existingRoom = existingBooking.rooms[k];

              if (newRoomId === existingRoom.id) {
                console.log("Phòng bị trùng lặp:", newRoomId);
                return true; // Đã tìm thấy xung đột, không cần kiểm tra tiếp
              }
            }
          }
        }
      }

      // Không tìm thấy xung đột
      return false;
    } catch (error) {
      console.error("Lỗi khi kiểm tra xung đột phòng:", error);
      throw error;
    }
  };

  const handleButtonClick = async () => {
    if (currentTab === 1) {
      if (checkOutDate === null) {
        showNotification("error", "Vui lòng chọn ngày trả phòng!");
        return;
      }
      const isConflict = await checkConflict();
      console.log(
        "Check-in date:",
        checkInDate.format(),
        "Check-out date:",
        checkOutDate.format(),
        "Room IDs:",
        roomIds
      );
      if (isConflict) {
        showNotification(
          "error",
          "Ngày nhận phòng hoặc ngày trả phòng của bạn trùng với một đơn đặt phòng khác. Vui lòng chọn thời gian khác."
        );
        return;
      }
      console.log("tra", moment(checkInDate), moment(checkInDate));
      setCurrentTab(2);
      showNotification("warning", "Hãy thanh toán để hoàn tất đặt phòng!");
    } else if (currentTab === 2) {
      setCurrentTab(3);
    }
  };

  const book = JSON.parse(localStorage.getItem("booking"));

  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const detailsPromises = roomIds.map(async (roomId) => {
          const roomData = await getRoomsById(roomId);
          const imagesData = await getAllImage(roomId);
          return { ...roomData, images: imagesData[0] };
        });

        const details = await Promise.all(detailsPromises);
        setRoomDetails(details);
        setRoomCount(details.length);
      } catch (error) {
        console.error("Failed to fetch room data", error);
      }
    };
    const addPaypalScript = async () => {
      const { data } = await getPayment();
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPaypalScript();
    } else {
      setSdkReady(true);
    }
    fetchRoomData();
  }, [checkInDate, checkOutDate, roomIds]);
  console.log("vv", roomDetails);
  const [orderId, setOrderId] = useState(false);
  const createOrder = (data, actions) => {
    const usdPrice = (totalPrice / 25000).toFixed(2);
    return actions.order
      .create({
        purchase_units: [
          {
            description: `booking hotel ${roomIds.join(", ")}`,
            amount: { currency_code: "USD", value: usdPrice.toString() },
          },
        ],
        application_context: { shipping_preference: "NO_SHIPPING" },
      })
      .then((orderID) => {
        setOrderId(orderID);
        return orderID;
      });
  };

  const onApprove = async (data, actions) => {
    try {
      const book = JSON.parse(localStorage.getItem("booking"));
      const datanew = {
        statusBooking: 1,
      };

      console.log("Booking details:", book);

      await saveBookingToDatabase();

      const details = await actions.order.capture();
      const { payer } = details;

      await sendEmail(loggedInUser.email, book);

      showNotification("success", "Bạn đã đặt phòng thành công!");

      setCurrentTab(3);
      removeAllCart(loggedInUser.id);
    } catch (error) {
      console.error("Error during approval process:", error);
      showNotification(
        "error",
        "Đã xảy ra lỗi trong quá trình đặt phòng. Vui lòng thử lại."
      );
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  const onError = () => {
    showNotification("error", "Đặt phòng thất bại!");
  };

  return (
    <>
      <Breadcrumb currently="Thanh toán" classNameImg="service_banner_two" />

      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      <section className="pt-40 layout-pb-md mt-5">
        <div className="container">
          <div className="row x-gap-40 y-gap-30 items-center">
            <div className="col-auto">
              <div
                className={`size-60 rounded-full flex-center cursor-pointer transition ${
                  isActiveTab(1) ? "bg-blue-1" : "bg-light-2"
                }`}
                onClick={() => handleTabChange(1)}
              >
                {isActiveTab(1) && (
                  <i
                    className="fa fa-check-circle text-28 text-white"
                    aria-hidden="true"
                  ></i>
                )}
                <span className={isActiveTab(1) ? "text-white" : "text-blue-1"}>
                  1
                </span>
              </div>
              <div className="text-18 fw-500 ml-10 text-dark">
                Chi tiết thông tin
              </div>
            </div>

            <div className="col d-none d-sm-block ">
              <div className="w-full h-1 bg-border bg-opacity-25"></div>
            </div>
            <div className="col-auto">
              <div
                className={`size-60 rounded-full flex-center cursor-pointer transition ${
                  isActiveTab(2) ? "bg-blue-1" : "bg-light-2"
                }`}
                onClick={() => handleTabChange(2)}
              >
                {isActiveTab(2) && (
                  <i
                    className="fa fa-check-circle text-28 text-white"
                    aria-hidden="true"
                  ></i>
                )}
                <span className={isActiveTab(2) ? "text-white" : "text-blue-1"}>
                  2
                </span>
              </div>
              <div className="text-18 fw-500 ml-10 text-dark">Thanh toán</div>
            </div>
            <div className="col d-none d-sm-block">
              <div className="w-full h-1 bg-border"></div>
            </div>
            <div className="col-auto">
              <div
                className={`size-60 rounded-full flex-center cursor-pointer transition ${
                  isActiveTab(3) ? "bg-blue-1" : "bg-light-2"
                }`}
                onClick={() => handleTabChange(3)}
              >
                {isActiveTab(3) && (
                  <i
                    className="fa fa-check-circle text-28 text-white"
                    aria-hidden="true"
                  ></i>
                )}
                <span className={isActiveTab(3) ? "text-white" : "text-blue-1"}>
                  3
                </span>
              </div>
              <div className="text-18 fw-500 ml-10 text-dark">Xác nhận</div>
            </div>
          </div>
          {currentTab === 1 && (
            <div className="row">
              <div className="col-md-5 mt-30">
                <h2 className="text-18 fw-500 mt-40 md:mt-24 text-dark text-uppercase font-weight-bold ">
                  Thông tin chi tiết của bạn
                </h2>

                <div className="row x-gap-20 y-gap-20 pt-20">
                  <div className="col-12">
                    <div className="form-input ">
                      <label className="lh-1 text-16 text-light-1">
                        Họ và tên <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="lh-1 text-16 text-light-1 text-dark"
                        required
                        type="text"
                        value={loggedInUser.username}
                        readOnly={true}
                        // onChange={handleName}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input ">
                      <label className="lh-1 text-16 text-light-1">
                        Email <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="lh-1 text-16 text-light-1 text-dark"
                        required
                        type="text"
                        value={loggedInUser.email}
                        disabled
                        readOnly={true}
                        // onChange={handleEmail}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input ">
                      <label className="lh-1 text-16 text-light-1">
                        Số điện thoại <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="lh-1 text-16 text-light-1 text-dark"
                        required
                        type="text"
                        value={loggedInUser.phone}
                        readOnly={true}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="lh-1 text-16 text-light-1">
                        Yêu cầu đặc biệt
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="6"
                        value={note}
                        onChange={handleNote}
                        placeholder="Cho một phòng ........"
                        _mstplaceholder="2885870"
                        _msthash="258"
                        style={{
                          width: "100%",
                          border: "1px solid #ccc",
                          resize: "vertical",
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="row y-gap-20 items-center justify-between">
                      <div className="col-auto">
                        <div className="text-14 text-light-1 text-dark">
                          Bằng cách tiến hành đặt phòng này, tôi đồng ý với
                          <a className="text-blue-1 fw-500" href="/register">
                            Tôi đồng ý với Điều khoản sử dụng và Chính sách
                            quyền riêng tư của Luxurious
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 mt-30">
                <div className="booking-sidebar">
                  <div className="px-30 py-30 border-light rounded-4">
                    <div className="text-18 fw-500 mb-30 text-dark text-uppercase font-weight-bold">
                      Chi tiết đặt phòng của bạn
                    </div>
                    {roomDetails.map((item, index) => (
                      <div className="row x-gap-15 y-gap-20 mt-1">
                        <div className="col-auto">
                          <img
                            alt={`Room ${item.id}`}
                            loading="lazy"
                            decoding="async"
                            data-nimg="1"
                            className="size-140 rounded-4 object-cover"
                            src={item.images.img}
                            style={{
                              color: "transparent",
                              width: "220px",
                              height: "140px",
                            }}
                          />
                        </div>
                        <div className="col">
                          {/* <div className="d-flex x-gap-5 ">
       {[...Array(5)].map((_, index) => (
         <i
           key={index}
           className="fa fa-star text-warning text-10"
         ></i>
       ))}
     </div> */}
                          <div className=" y-gap-20 justify-between mt-3">
                            <div className=" col-auto lh-17 fw-500 font-weight-bold text-dark ">
                              {getTypeRoomLabel(item?.type)}
                            </div>
                            <div className=" col-auto text-14 lh-15 font-weight-bold text-dark  ">
                              <CurrencyFormat
                                value={item.price}
                                thousandSeparator={true}
                                suffix={"VND/ Ngày"}
                                decimalScale={2}
                                displayType={"text"}
                                className="text-black customInput"
                                style={{
                                  border: "none",
                                }}
                              />
                            </div>
                          </div>
                          <div className=" y-gap-20 justify-between mt-2">
                            <div className="col-auto">
                              <div className="d-flex items-center">
                                <div className="size-30 flex-center bg-blue-1 rounded-4">
                                  <div className="text-12 fw-600 text-dark">
                                    4.8
                                  </div>
                                </div>
                                <div className="fa fa-star text-warning text-10"></div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="text-14 text-dark">
                                3,014 đánh giá
                              </div>
                            </div>
                          </div>

                          <div className="y-gap-20 justify-between mt-3 ">
                            <div className=" col-auto fw-500  text-dark">
                              Số lượng phòng:
                            </div>
                            <div className=" col-auto d-flex align-items-center mb-4">
                              {roomDetails.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="border-top-light  mb-20"></div>
                    <div className="  justify-between  date-custom">
                      <div className="col-auto">
                        <div className="text-15 text-dark">Nhận phòng</div>
                        <Box style={{ padding: "5px" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={checkInDate}
                              onChange={(newValue) => setCheckInDate(newValue)}
                              minDate={dayjs().startOf("day")}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                              showTimeInput={true}
                            />
                          </LocalizationProvider>
                        </Box>
                      </div>
                      <div className="col-auto d-none d-md-block">
                        <div className="h-full w-1 bg-border"></div>
                      </div>
                      <div className="col-auto text-right text-md-left mt-3 mt-md-0">
                        <div className="text-15 text-dark">Trả phòng</div>
                        <Box style={{ padding: "5px" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              value={checkOutDate}
                              required
                              onChange={(newValue) => {
                                setCheckOutDate(newValue);
                                handleDateChange(newValue);
                              }}
                              minDate={dayjs(checkInDate).add(1, "day")}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                              showTimeInput={true}
                            />
                          </LocalizationProvider>
                        </Box>
                      </div>
                    </div>
                    {/* <div className="  justify-between  date-custom">
                      <div className="col-auto">
                        <div className="text-15 text-dark">Nhận phòng</div>
                        <TextField
                          type="datetime-local"
                          value={checkInDate.format("YYYY-MM-DDTHH:mm")}
                          onChange={(e) => {
                            const selectedDate = dayjs(e.target.value);
                            setCheckInDate(selectedDate);
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min: dayjs().format("YYYY-MM-DDTHH:mm"),
                          }}
                        />
                      </div>
                      <div className="col-auto d-none d-md-block">
                        <div className="h-full w-1 bg-border"></div>
                      </div>
                      <div className="col-auto text-right text-md-left mt-3 mt-md-0">
                        <div className="text-15 text-dark">Trả phòng</div>
                        <TextField
                          type="datetime-local"
                          value={checkOutDate.format("YYYY-MM-DDTHH:mm")}
                          onChange={(e) => {
                            const selectedDate = dayjs(e.target.value);
                            setCheckOutDate(selectedDate);
                            handleDateChange(selectedDate);
                          }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min: checkInDate
                              .add(1, "day")
                              .format("YYYY-MM-DDTHH:mm"),
                          }}
                        />
                      </div>
                    </div> */}

                    <div className="border-top-light mt-30 mb-20"></div>
                    <div className="row y-gap-20 justify-between items-center">
                      <div className="col-auto text-15 text-dark">
                        Tổng thời gian lưu trú:
                      </div>
                      <div className="col-auto fw-500 font-weight-bold text-dark">
                        {daysDiff} ngày
                      </div>
                      {/* <a href="/room" className="text-15 text-blue-1 underline ">Bạn đặt phòng khác?</a> */}
                    </div>
                    <div className="border-top-light mt-30 mb-20"></div>
                    <div className="row y-gap-20 justify-between items-center">
                      <div className="col-auto">
                        <div className="text-15 text-dark">Bạn đã chọn:</div>
                        <div className="text-15 text-dark">Tổng giá phòng</div>
                      </div>

                      <div className="col-auto">
                        <div className="text-15 font-weight-bold text-dark">
                          {roomCount} phòng
                        </div>
                        <div className="fw-500 font-weight-bold text-dark">
                          <CurrencyFormat
                            value={totalPrice}
                            thousandSeparator={true}
                            suffix={"VND"}
                            decimalScale={2}
                            displayType={"text"}
                            className="text-black customInput"
                            style={{
                              border: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <a href="/room" className="text-15 text-blue-1 underline">
                      Bạn muốn thay đổi lựa chọn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div className="mt-40">
                  <h3 className="text-22 fw-500 mb-20 text-dark">Thanh toán</h3>
                  <div className="react-tabs" data-rttabs="true">
                    <div
                      className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                      role="tabpanel"
                      id="panel:r0:0"
                      aria-labelledby="tab:r0:0"
                    >
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Chọn phương thức thanh toán
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={paymentMethod}
                          onChange={handlePaymentMethodChange}
                        >
                          {/* <FormControlLabel
                            value="VNPAY"
                            control={<Radio />}
                            label="VNPAY"
                          /> */}
                          <FormControlLabel
                            value="PayPal"
                            control={<Radio />}
                            label="PayPal"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div
                      className="react-tabs__tab-panel"
                      role="tabpanel"
                      id="panel:r0:1"
                      aria-labelledby="tab:r0:1"
                    ></div>
                  </div>
                </div>
                <div className="w-full h-1 bg-border mt-40 mb-40"></div>
              </div>
              <div className="col-xl-5 col-lg-4">
                <div className="booking-sidebar">
                  <div className="px-30 py-30 border-light rounded-4 mt-30">
                    <div className="text-18 fw-500 mb-2 text-uppercase font-weight-bold text-dark ">
                      Tổng thanh toán
                    </div>
                    <div className="row y-gap-5 justify-between">
                      <div className="col-auto">
                        <div className="text-15 font-weight-bold text-dark">
                          Số lượng phòng
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="text-15">{roomCount}</div>
                      </div>
                    </div>
                    <div className="row y-gap-5 justify-between ">
                      <div className="col-auto">
                        <div className="text-15 font-weight-bold text-dark">
                          {roomDetails.type}
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="text-15"></div>
                      </div>
                    </div>
                    <div className="row y-gap-5 justify-between ">
                      <div className="col-auto">
                        <div className="text-15 font-weight-bold text-dark">
                          Thuế và phí
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="text-15">0</div>
                      </div>
                    </div>
                    <div className="row y-gap-5 justify-between ">
                      <div className="col-auto">
                        <div className="text-15 font-weight-bold text-dark">
                          Phí giữ phòng
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="text-15">Miễn phí</div>
                      </div>
                    </div>
                    <div className="px-20 py-20 bg-blue-2 rounded-4  mt-20">
                      <div className="row y-gap-5 justify-between">
                        <div className="col-auto">
                          <div className="text-18 lh-13 fw-500 text-uppercase font-weight-bold text-dark">
                            Giá
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="text-18 lh-13 fw-500">
                            <CurrencyFormat
                              value={totalPrice}
                              thousandSeparator={true}
                              suffix={"VND"}
                              displayType={"text"}
                              decimalScale={2}
                              className="text-black customInput"
                              style={{
                                border: "none",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-30 py-30 border-light rounded-4 mt-30">
                    <div className="text-20 fw-500  text-dark">Tổng tiền</div>
                    <div className="row y-gap-5 justify-between">
                      <div className="col-auto">
                        <div className="text-15"></div>
                      </div>
                      <div className="col-auto">
                        <div className="text-15 text-danger font-weight-bold fs-4">
                          <CurrencyFormat
                            value={totalPrice}
                            thousandSeparator={true}
                            suffix={"VND"}
                            decimalScale={2}
                            displayType={"text"}
                            className="text-black customInput"
                            style={{
                              border: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="px-30 py-30 border-light rounded-4 mt-30">
                    <div className="text-20 fw-500 mb-15">
                      Bạn có mã khuyến mãi không?
                    </div>
                    <div className="form-input ">
                      <input required type="text" />
                      <label className="lh-1 text-16 text-light-1">
                        Nhập mã khuyến mãi
                      </label>
                    </div>
                    <button className="button -outline-blue-1 text-blue-1 px-30 py-15 mt-20">
                      Áp dụng
                    </button>
                  </div> */}
                  <div className="px-30 py-30 border-light rounded-4 mt-30">
                    {paymentMethod === "PayPal" && sdkReady ? (
                      <Paypal
                        onCreateOrder={createOrder}
                        onApproveOrder={onApprove}
                        onError={onError}
                      />
                    ) : (
                      <button className="button -outline-blue-1 text-blue-1 px-30 py-15 mt-20">
                        Thanh toán
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === 3 && (
            <div className="container">
              <div className="col-xl-8 col-lg-8 mx-auto">
                <div className="order-completed-wrapper">
                  <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
                    <div className="size-80 flex-center rounded-full bg-dark-3 mt-4">
                      <i className="fa fa-check-circle fa-8x text-success "></i>
                    </div>
                    <div className="text-30 lh-1 fw-600 font-weight-bold text-dark  mx-auto mt-2">
                      Hệ thống, đơn đặt phòng của bạn đã được gửi thành công!
                    </div>
                    <div className="text-15 text-light-1  mx-auto mt-2">
                      Chi tiết đơn đặt phòng đã được gửi đến mail:
                      {loggedInUser.email}
                    </div>
                  </div>
                  <div className="border-type-1 rounded-8 px-50 py-35 mt-2">
                    <div className="row">
                      <div className="row  y-gap-5 justify-between">
                        <div className=" col-auto text-15 lh-12 font-weight-bold text-dark ">
                          Số đơn đặt hàng
                        </div>
                        <div className=" col-auto text-15 lh-12 fw-500 blue-1 ">
                          # {book.id}
                        </div>
                      </div>
                      <div className="row  y-gap-5 justify-between">
                        <div className="col-auto text-15 lh-12 font-weight-bold text-dark">
                          Ngày
                        </div>
                        <div className="col-auto text-15 lh-12 fw-500 blue-1 ">
                          {book.createdAt}
                        </div>
                      </div>
                      <div className="row  y-gap-5 justify-between">
                        <div className="col-auto text-15 lh-12 font-weight-bold text-dark">
                          Tất cả
                        </div>
                        <div className="col-auto text-15 lh-12 fw-500 blue-1">
                          <CurrencyFormat
                            value={totalPrice}
                            thousandSeparator={true}
                            suffix={"VND"}
                            decimalScale={2}
                            displayType={"text"}
                            className="text-black customInput"
                            style={{
                              border: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row  y-gap-5 justify-between">
                        <div className="col-auto text-15 lh-12 font-weight-bold text-dark">
                          Phương thức thanh toán
                        </div>
                        <div className="col-auto text-15 lh-12 fw-500 blue-1">
                          Paypal
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-type-1 rounded-8 px-50 py-35 mt-2">
                    <h4 className="text-20 fw-500 mb-30 font-weight-bold text-dark">
                      Thông tin của bạn
                    </h4>
                    <div className="row y-gap-10">
                      <div className="col-12">
                        <div className="d-flex justify-between ">
                          <div className="text-15 lh-16 font-weight-bold text-dark">
                            Tên
                          </div>
                          <div className="text-15 lh-16 fw-500 blue-1">
                            {loggedInUser.username}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex justify-between ">
                          <div className="text-15 lh-16 font-weight-bold text-dark">
                            Email
                          </div>
                          <div className="text-15 lh-16 fw-500 blue-1">
                            {loggedInUser.email}
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-between ">
                          <div className="text-15 lh-16 font-weight-bold text-dark">
                            Số điện thoại
                          </div>
                          <div className="text-15 lh-16 fw-500 blue-1">
                            {loggedInUser.phone}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex justify-between ">
                          <div className="text-15 lh-16 font-weight-bold text-dark">
                            Quốc gia
                          </div>
                          <div className="text-15 lh-16 fw-500 blue-1">
                            Việt Nam
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-between ">
                          <div className="text-15 lh-16 font-weight-bold text-dark">
                            Yêu cầu đặc biệt
                          </div>
                          <div className="text-15 lh-16 fw-500 blue-1">
                            {book.note}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row justify-content-center mx-auto mt-4 mb-4">
            <div className="col-auto">
              {currentTab === 3 ? (
                <button
                  className="button h-60 px-24 blue-1 bg-light-1 text-white d-none"
                  onClick={goToPreviousTab}
                >
                  Quay lại
                </button>
              ) : (
                <button
                  className="button h-60 px-24 blue-1 bg-light-1 text-white"
                  onClick={goToPreviousTab}
                >
                  Quay lại
                </button>
              )}
            </div>
            <div className="col-auto">
              {currentTab === 3 ? (
                <button
                  className="button h-60 px-24 blue-1 bg-light-1 text-white d-none"
                  onClick={handleButtonClick}
                >
                  Tiếp theo
                </button>
              ) : currentTab === 1 ? (
                <button
                  className="button h-60 px-24 blue-1 bg-light-1 text-white"
                  onClick={handleButtonClick}
                >
                  Tiếp theo
                </button>
              ) : (
                <button
                  className="button h-60 px-24 blue-1 bg-light-1 text-white"
                  onClick={handleButtonClick}
                >
                  Tiếp theo
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
