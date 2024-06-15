import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import "../assets/css/room.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Sidebar from "../components/RightSide";
import CardGrid from "../components/CardGrid_ImgDetail";
import Breadcrumb from "../components/Breadcrumb";
import { addCart, addRoomLike, createReview, getAllImage, getBookingIdUser, getByIdUserAll, getLikeRoom, getRatingStats, getReviews, getRoomsById, removeRoomLike } from "../service/api";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Carousel from 'react-bootstrap/Carousel';
import * as CurrencyFormat from "react-currency-format";
import imgs from "../assets/image";
import Notification from "../components/Notification";
import moment from "moment";
export default function RoomDetail() {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get("roomId");
  const accountId = searchParams.get("accountId");
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomImages, setRoomImages] = useState([]);
  const [heartStates, setHeartStates] = useState({});
  const [notification, setNotification] = useState(null);
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  const handleAddRoom = async (roomId) => {
    if (!loggedInUser) {
      showNotification("warning", "Hãy đăng nhập để thực hiện chức năng này!");

      return;
    }
    try {
      const response = await addCart(roomId, loggedInUser.id);
      if (!response.success) {
        showNotification("error", response.message);
      } else {
        showNotification("success", response.message);
      }
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  const handleAddFavorite = async (userId, roomId) => {
    try {
      await addRoomLike(userId, roomId);
      setHeartStates((prevState) => ({ ...prevState, [roomId]: true }));
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };
  const handleRemoveFavorite = async (userId, roomId) => {
    try {
      await removeRoomLike(userId, roomId);
      setHeartStates((prevState) => ({ ...prevState, [roomId]: false }));
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };
  const handleHeartClick = async (roomId) => {
    const isFavorite = heartStates[roomId];
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Bạn cần đăng nhập để thích phòng.");
      return;
    }
    try {
      if (isFavorite) {
        console.log("Favorite1", isFavorite);
        await handleRemoveFavorite(user.id, roomId);
        setHeartStates((prevState) => ({
          ...prevState,
          [roomId]: false,
        }));
      } else {
        await handleAddFavorite(user.id, roomId);
        setHeartStates((prevState) => ({
          ...prevState,
          [roomId]: true,
        }));
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };



  // Xử lý sự kiện khi nhấn nút "Đặt ngay"
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const handleBooking = (roomId) => {
    if (!loggedInUser) {
      showNotification("warning", "Hãy đăng nhập để thực hiện chức năng này!");
      return;
    }

    const roomIds = [roomId]; // Initialize roomIds as an array with the current roomId
    navigation("/payment", {
      state: {
        roomIds: roomIds, // Pass the array of roomIds to the payment page
        accountId: loggedInUser.id,
      },
    });
  };
  useEffect(() => {

    const fetchRoomData = async () => {
      try {
        const roomData = await getRoomsById(roomId);
        const imagesData = await getAllImage(roomId);

        setRoomDetails(roomData);
        setRoomImages(imagesData);
      } catch (error) {
        console.error("Failed to fetch room data", error);
      }
    };
    const fetchFavoriteRooms = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const favoriteRooms = await getLikeRoom(user.id);
          const favoriteRoomIds = favoriteRooms.map((room) => room.roomId);
          setHeartStates((prevState) => {
            const newState = { ...prevState };
            favoriteRoomIds.forEach((roomId) => {
              newState[roomId] = true;
            });
            return newState;
          });
        }
      } catch (error) {
        console.error("Error fetching favorite rooms:", error);
      }
    };
    fetchRoomData();
    fetchFavoriteRooms();
  }, [roomId]);

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
  // thoi gian
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs());
  const [daysDiff, setDaysDiff] = useState(0);
  const handleDateChange = (newValue) => {
    const startDate = dayjs(checkInDate).startOf("day");
    const endDate = dayjs(newValue).startOf("day");
    const diff = endDate.diff(startDate, "day");
    setDaysDiff(diff);
    setCheckOutDate(newValue);
  };
  // review
  const [data, setData] = useState([]);
  const [rating, setRating] = useState('5'); // State for rating
  const [comment, setComment] = useState(''); // State for comment
  const [note, setNote] = useState(imgs.author);

  const [reviews, setReviews] = useState([]);

  const [ratingStats, setRatingStats] = useState({
    averageRating: 0,
    ratingsCount: 0,
    percentages: []
  });
  const currentDate = moment();
  // Hàm fetchReviews sẽ được gọi ngay khi component được render lần đầu
  const fetchReviews = async () => {
    try {
      const fetchedReviews = await getReviews(roomId);
      setReviews(fetchedReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Hàm fetchRatingStats sẽ được gọi ngay khi component được render lần đầu
  const fetchRatingStats = async () => {
    try {
      const response = await getRatingStats(); // API call to fetch rating stats
      setRatingStats(response);
    } catch (error) {
      console.error('Error fetching rating stats:', error);
    }
  };

  // Gọi fetchReviews và fetchRatingStats khi component được render lần đầu
  useEffect(() => {
    const completeReview = async () => {

      try {
        const bookingData = await getBookingIdUser(loggedInUser.id);
        setData(bookingData);
      } catch (error) {
        console.error('Error fetching rating stats:', error);
      }
    }
    completeReview();
    fetchReviews();
    fetchRatingStats();
  }, [roomId]); // Gọi lại khi roomId thay đổi

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!loggedInUser) {
    alert("Vui lòng đăng nhập để đánh giá");
    return;
  }

  try {
    // Filter bookings to get those that have a checkoutDate before the current date
    const completedBookings = data.filter((booking) =>
      moment(booking.checkoutDate).isBefore(currentDate)
    );
    console.log("mmmmmmmm",completedBookings)

    // Get all rooms from completed bookings that match the roomId
    const matchingRooms = completedBookings
      .flatMap((booking) => booking.rooms)
      .filter((room) => room.id === roomId);

    if (!matchingRooms.length > 0) {
      // Print out the matching rooms
      console.log("Matching Rooms:", matchingRooms);
      
      // Room exists in the completed bookings
      const newReview = await createReview(roomId, loggedInUser.id, rating, comment, note);
      setReviews([newReview, ...reviews]); // Add new review to the beginning of the list
      setNotification("success", "Bình luận thành công");
      alert("Bình luận thành công");
    } else {
      // Room does not exist in the completed bookings
      setNotification("warning", "Tài khoản chưa đặt phòng này");
      alert("Tài khoản chưa đặt phòng này");
    }

    // Reset form states
    setRating('5');
    setComment('');

    console.log('Review created successfully');
  } catch (error) {
    console.error('Error creating review:', error);
  }
};




  return (
    <main>
      <Breadcrumb currently="Chi tiết phòng" classNameImg="service_banner_two" />

      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      <section className="pt-0 mt-5">
        <div className="container" data-sticky-container="">
          <div className="row g-4 g-xl-5">
            {/* <!-- Content START --> */}
            <div className="col-xl-8 order-1">
              <div className="vstack gap-5">
                {/* <!-- About hotel START --> */}
                <div className="card bg-transparent">
                  <div className="card-body  ">
                    {roomImages.length > 0 ? (
                      <Carousel fade>
                        {roomImages.slice(0, 3).map((image, index) => (
                          <Carousel.Item key={index} >
                            <img
                              className="d-block w-100 carousel-img "
                              src={
                                image.img
                              }
                              alt={`Room ${roomId} Image ${index + 1}`}

                            />
                            <Carousel.Caption>
                              {/* <h3>{`Image ${index + 1}`}</h3>
                            <p>Image description here</p> */}
                            </Carousel.Caption>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    ) : (
                      <p>No images available</p>
                    )}
                  </div>
                  {/* <!-- Card header --> */}
                  <div className="d-lg-flex justify-content-lg-between  card-header border-bottom bg-transparent ">
                    <h2 className="mb-0">{getTypeRoomLabel(
                      roomDetails && roomDetails.type
                    ) || "Loading..."}</h2>
                    <div className="d-flex justify-content-lg-between" >
                      <button
                        className="btn btn-sm btn-dark text-white button_hover rounded py-2 px-4 "
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddRoom(roomId);
                        }}

                      >Thêm phòng</button>
                      <i
                        onClick={() => handleHeartClick(roomId)}
                        className={`fa${heartStates[roomId] ? "s" : "r"
                          } fa-heart text-danger ms-6`}
                        style={{ fontSize: "24px" }}
                        title="Lưu yêu thích"
                      ></i>

                    </div>
                  </div>
                  {/* <!-- Card body START --> */}
                  <div className="card-body  ">
                    {/* <!-- Highlights Icons --> */}
                    <div className="hstack gap-3 mb-3">
                      <div
                        className="icon-lg bg-light h5 rounded-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Free wifi"
                        data-bs-original-title="Free wifi"
                      >
                        <i className="fa-solid fa-wifi"></i>
                      </div>
                      <div
                        className="icon-lg bg-light h5 rounded-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Swimming Pool"
                        data-bs-original-title="Swimming Pool"
                      >
                        <i className="fa-solid fa-swimming-pool"></i>
                      </div>
                      <div
                        className="icon-lg bg-light h5 rounded-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Central AC"
                        data-bs-original-title="Central AC"
                      >
                        <i className="fa-solid fa-snowflake"></i>
                      </div>
                      <div
                        className="icon-lg bg-light h5 rounded-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Free Service"
                        data-bs-original-title="Free Service"
                      >
                        <i className="fa-solid fa-concierge-bell"></i>
                      </div>
                    </div>

                    <p className="mb-3">
                      {roomDetails?.description}
                    </p>
                    <p className="mb-0">
                      {roomDetails?.note}
                    </p>

                    <div className="collapse" id="collapseContent">
                      <p className="my-3">

                      </p>
                      <p className="mb-0">

                      </p>
                    </div>
                    <a
                      className="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                      data-bs-toggle="collapse"
                      href="#collapseContent"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseContent"
                    >
                      See <span className="see-more ms-1">more</span>
                      <span className="see-less ms-1">less</span>
                      <i className="fa-solid fa-angle-down ms-2"></i>
                    </a>

                    {/* <!-- List --> */}
                    <h5 className="fw-light mb-2">Lợi ích</h5>
                    <ul className="list-group list-group-borderless mb-0">
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-patch-check-fill text-success me-2"></i>
                        Mọi nhân viên đều đeo khẩu trang và găng tay vào mọi thời điểm phục vụ.

                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-patch-check-fill text-success me-2"></i>

                        Nhân viên khách sạn đảm bảo duy trì cách ly giao tiếp xã hội mọi lúc.

                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-patch-check-fill text-success me-2"></i>
                        Khách sạn có các lựa chọn ăn uống trong phòng
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-patch-check-fill text-success me-2"></i>
                        {" "}
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- About hotel START --> */}

                {/* <!-- Amenities START --> */}
                <div className="card bg-transparent">
                  {/* <!-- Card header --> */}
                  <div className="card-header border-bottom bg-transparent ">
                    <h3 className="card-title mb-0">Tiện nghi</h3>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div className="card-body pt-4 ">
                    <div className="row g-4">
                      {/* <!-- Activities --> */}
                      <div className="col-sm-6">
                        <h6>
                          <i className="fa-solid fa-biking me-2"></i>Hoạt động
                        </h6>
                        {/* <!-- List --> */}
                        <ul className="list-group list-group-borderless mt-2 mb-0">
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Bể bơi
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Spa
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Khu vui chơi trẻ em
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Gym
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Payment Method --> */}
                      <div className="col-sm-6">
                        <h6>
                          <i className="fa-solid fa-credit-card me-2"></i>Phương
                          thức thanh toán
                        </h6>
                        {/* <!-- List --> */}
                        <ul className="list-group list-group-borderless mt-2 mb-0">
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Thẻ tín dụng
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Tiền mặt
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Services --> */}
                      <div className="col-sm-6">
                        <h6>
                          <i className="fa-solid fa-concierge-bell me-2"></i>Dịch
                          vụ
                        </h6>
                        {/* <!-- List --> */}
                        <ul className="list-group list-group-borderless mt-2 mb-0">
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Giặt khô
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Dịch vụ phòng
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Dịch vụ đặc biệt
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Khu vực chờ
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>{" "}
                            Khu vực hút thuốc
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Trợ giúp đặc biệt
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Thiết bị giặt là
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Dịch vụ ủi
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Thang máy
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Safety & Security --> */}
                      <div className="col-sm-6">
                        <h6>
                          <i className="bi bi-shield-fill-check me-2"></i>An toàn
                          &amp; Bảo mật
                        </h6>
                        {/* <!-- List --> */}
                        <ul className="list-group list-group-borderless mt-2 mb-4 mb-sm-5">
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Bác sĩ trực
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Bảo vệ trực
                          </li>
                        </ul>

                        <h6>
                          <i className="fa-solid fa-volume-up me-2"></i>Ngôn ngữ
                          nhân viên
                        </h6>
                        {/* <!-- List --> */}
                        <ul className="list-group list-group-borderless mt-2 mb-0">
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Tiếng Anh
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Tiếng Tây Ban Nha
                          </li>
                          <li className="list-group-item pb-0">
                            <i className="fa-solid fa-check-circle text-success me-2"></i>
                            Tiếng Hin-đi
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- Amenities END --> */}

                {/* <!-- Customer Review START --> */}
                <div className="card bg-transparent">
                  {/* <!-- Card header --> */}
                  <div className="card-header border-bottom bg-transparent ">
                    <h3 className="card-title mb-0">Đánh giá của khách hàng</h3>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div className="card-body pt-4 ">
                    {/* <!-- Progress bar and rating START --> */}
                    <div className="card bg-light p-4 mb-4">
                      <div className="row g-4 align-items-center">
                        {/* <!-- Rating info --> */}
                        <div className="col-md-4">
                          <div className="text-center">
                            {/* <!-- Info --> */}
                            <h2 className="mb-0">{ratingStats.averageRating}</h2>
                            <p className="mb-2">Dựa trên {ratingStats.ratingsCount} đánh giá</p>
                            {/* <!-- Star --> */}
                            <ul className="list-inline mb-0">
                              {Array.from({ length: Math.floor(ratingStats.averageRating) }, (_, i) => (
                                <li key={i} className="list-inline-item me-0">
                                  <i className="fa-solid fa-star text-warning"></i>
                                </li>
                              ))}
                              {ratingStats.averageRating % 1 !== 0 && (
                                <li className="list-inline-item me-0">
                                  <i className="fa-solid fa-star-half-alt text-warning"></i>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* <!-- Progress-bar START --> */}
                        <div className="col-md-8">
                          <div className="card-body ">
                            <div className="row gx-3 g-2 align-items-center">
                              {/* <!-- Progress bar and Rating --> */}
                              {ratingStats.percentages.map((item, index) => (
                                <React.Fragment key={index}>
                                  <div className="col-9 col-sm-10">
                                    {/* <!-- Progress item --> */}
                                    <div className="progress progress-sm bg-warning bg-opacity-15">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "95%" }}
                                        aria-valuenow={item.percent}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                  {/* <!-- Percentage --> */}
                                  < div className="col-3 col-sm-2 text-end" >
                                    <span className="h6 fw-light mb-0">{item.percent}%</span>
                                  </div>

                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* <!-- Progress-bar END --> */}
                      </div>
                    </div>
                    {/* <!-- Progress bar and rating END -->

							<!-- Leave review START --> */}
                    <form className="mb-5" onSubmit={handleSubmit} >
                      {/* <!-- Rating --> */}
                      <div className="form-control-bg-light mb-3">
                        <div
                          className="choices"
                          data-type="select-one"
                          tabindex="0"
                          role="listbox"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="choices__inner">
                            <select
                              className="form-select js-choice choices__input"
                              hidden=""
                              tabindex="-1"
                              data-choice="active"
                              value={rating}
                              onChange={(e) => setRating(Number(e.target.value))}
                            >
                              <option value="0">Chọn sao đánh giá</option>
                              <option
                                value="5"
                                data-custom-properties="[object Object]"
                              >
                                ★★★★★ (5/5)
                              </option>
                              <option
                                value="4"
                                data-custom-properties="[object Object]"
                              >
                                ★★★★★ (4/5)
                              </option>
                              <option
                                value="3"
                                data-custom-properties="[object Object]"
                              >
                                ★★★★★ (3/5)
                              </option>
                              <option
                                value="2"
                                data-custom-properties="[object Object]"
                              >
                                ★★★★★ (2/5)
                              </option>
                              <option
                                value="1"
                                data-custom-properties="[object Object]"
                              >
                                ★★★★★ (1/5)
                              </option>
                            </select>

                            {/* <div className="choices__list choices__list--single">
                                                        <div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="★★★★★ (5/5)" data-custom-properties="[object Object]" aria-selected="true">★★★★★ (5/5)</div>
                                                    </div> */}
                          </div>
                          {/* <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                                        <div className="choices__list" role="listbox">
                                                            <div id="choices--4slr-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="★★★★★ (5/5)" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">★★★★★ (5/5)</div>
                                                            <div id="choices--4slr-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="★★★★☆ (4/5)" data-select-text="Press to select" data-choice-selectable="">★★★★☆ (4/5)</div>
                                                            <div id="choices--4slr-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="★★★☆☆ (3/5)" data-select-text="Press to select" data-choice-selectable="">★★★☆☆ (3/5)</div>
                                                            <div id="choices--4slr-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="★★☆☆☆ (2/5)" data-select-text="Press to select" data-choice-selectable="">★★☆☆☆ (2/5)</div>
                                                            <div id="choices--4slr-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="★☆☆☆☆ (1/5)" data-select-text="Press to select" data-choice-selectable="">★☆☆☆☆ (1/5)</div>
                                                        </div>
                                                    </div> */}
                        </div>
                      </div>
                      {/* <!-- Message --> */}
                      <div className="form-control-bg-light mb-3">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Your review"
                          rows="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div>
                      {/* <!-- Button --> */}
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary mb-0"
                      >
                        Bài đánh giá
                        <i className="fa fa-fw fa-arrow-right ms-2"></i>
                      </button>
                    </form>
                    {/* <!-- Leave review END --> */}

                    {/* <!-- Review item START --> */}
                    {reviews.map((review, index) => (
                      <div key={review.id} className="review-item">
                        <div className="d-md-flex my-4">
                          {/* <!-- Avatar --> */}
                          <div className="avatar avatar-lg me-3 flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              src={review.user?.avatar || imgs.author}

                              alt="avatar"
                            />
                          </div>
                          {/* <!-- Text --> */}
                          <div>
                            <div className="d-flex justify-content-between align-items-start mt-1 mt-md-0">
                              <div className="d-flex align-items-start">
                                <div className="me-3">
                                  <h6 className=" mb-0">{review.user?.username || 'name'}</h6>
                                  {/* <h6 className=" mb-0">Bình</h6> */}
                                  {/* <!-- Info --> */}
                                  <ul className="nav nav-divider small mb-2">
                                    <li className="nav-item">Đăng {review.createdAt}</li>
                                    <li className="nav-item">Nhận xét bằng văn bản</li>
                                  </ul>
                                </div>
                              </div>
                              {/* <!-- Review star --> */}
                              {/* <div className="d-flex align-items-center"> */}
                              <div className="icon-md rounded text-bg-warning fs-6">
                                {review.rating} ★
                              </div>
                              {/* </div> */}
                            </div>

                            <p className="mb-2">
                              {review.comment}{" "}
                            </p>

                            {/* <!-- Images --> */}
                            <div className="row g-4">
                              <div className="col-4 col-sm-3 col-lg-2">
                                {/* <img
                                src="https://booking.webestica.com/assets/images/category/hotel/4by3/07.jpg"
                                className="rounded"
                                alt=""
                              /> */}
                              </div>

                            </div>
                          </div>
                        </div>
                        {index !== reviews.length - 1 && <hr className="my-4" />} {/* Thêm <hr /> trừ khi là review cuối cùng */}
                      </div>
                    ))}
                    {/* <!-- Child review START --> */}
                    {/* <div className="my-4 ps-2 ps-md-3">
                      <div className="d-md-flex p-3 bg-light rounded-3">
                        <img
                          className="avatar avatar-sm rounded-circle me-3"
                          src="https://booking.webestica.com/assets/images/avatar/02.jpg"
                          alt="avatar"
                        />
                        <div className="mt-2 mt-md-0">
                          <h6 className="mb-1">Giám đốc</h6>
                          <p className="mb-0">
                            Nhưng sự thận trọng thường xuyên thưa ngài, cô không
                            bị ảnh hưởng bởi sự ngưỡng mộ mọi thứ.{" "}
                          </p>
                        </div>
                      </div>
                    </div> */}
                    {/* <!-- Child review END --> */}


                    <hr />
                    {/* <!-- Review item END --> */}

                    {/* <!-- Button --> */}
                    <div className="text-center">
                      <a href="#" className="btn btn-primary-soft mb-0">
                        Tải thêm
                      </a>
                    </div>
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- Customer Review END --> */}

                {/* <!-- Hotel Policies START --> */}
                <div className="card bg-transparent">
                  {/* <!-- Card header --> */}
                  <div className="card-header border-bottom bg-transparent ">
                    <h3 className="mb-0">Chính sách khách sạn</h3>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div className="card-body pt-4 ">
                    {/* <!-- List --> */}
                    <ul className="list-group list-group-borderless mb-2">
                      <li className="list-group-item d-flex">
                        <i className="bi bi-check-circle-fill me-2"></i>Đây là một
                        trang trại gia đình, do đó chúng tôi yêu cầu bạn không
                        thưởng thức.
                      </li>
                      <li className="list-group-item d-flex">
                        <i className="bi bi-check-circle-fill me-2"></i>Uống rượu
                        và hút thuốc trong giới hạn có kiểm soát được cho phép tại
                        trang trại nhưng vui lòng không tạo ra một mớ hỗn độn hoặc
                        ồn ào tại nhà.
                      </li>
                      <li className="list-group-item d-flex">
                        <i className="bi bi-check-circle-fill me-2"></i>Ma túy và
                        các sản phẩm bất hợp pháp gây say đều bị cấm và không được
                        mang đến nhà hoặc tiêu thụ.
                      </li>
                      <li className="list-group-item d-flex">
                        <i className="bi bi-x-circle-fill me-2"></i>Đối với bất kỳ
                        cập nhật nào, khách hàng sẽ thanh toán phí hủy/sửa đổi
                        hiện hành.
                      </li>
                    </ul>

                    {/* <!-- List --> */}
                    <ul className="list-group list-group-borderless mb-2">
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-arrow-right me-2"></i>Nhận phòng: 1:00
                        pm - 9:00 pm
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-arrow-right me-2"></i>Trả phòng: 11:00
                        sáng
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-arrow-right me-2"></i>Tự check-in với
                        nhân viên tòa nhà
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-arrow-right me-2"></i>Không có vật
                        nuôi
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-arrow-right me-2"></i>Không có tiệc
                        tùng hoặc sự kiện
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0">
                        <i className="bi bi-arrow-right me-2"></i>Hút thuốc được
                        phép
                      </li>
                    </ul>

                    {/* <!-- Important note --> */}
                    {/* <div className="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
                                        <p className="mb-0 text-danger">During the COVID-19 pandemic, all hosts and guests must review and follow Booking social distancing and other COVID-19-related guidelines.</p>
                                    </div> */}
                    <div className="bg-danger bg-opacity-10 rounded-2 p-3">
                      <p className="mb-0 text-danger">
                        Báo động khói không được báo cáo - Chủ nhà đã không báo
                        cáo báo động khói trên tài sản. Chúng tôi khuyên bạn nên
                        mang theo máy dò di động cho chuyến đi của mình.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- Hotel Policies START --> */}
                {/* <!-- Room option START --> */}

                {/* <!-- Room option END --> */}
              </div>
            </div>
            <aside className="col-xl-4 order-xl-2">
              <div className="sticky-element" data-sticky="" data-margin-top="100" data-sticky-for="1199" >
                {/* <!-- Book now START --> */}
                <div className="card card-body border">

                  {/* <!-- Title --> */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                    <div>
                      <span>Giá phòng </span>

                    </div>
                    <div>
                      {/* <h6 className="fw-normal mb-0">1 room per night</h6>
                      <small>+ $285 taxes &amp; fees</small> */}
                      <h4 className="card-title mb-0">
                        {/* {roomDetails?.price}/ngày */}
                        <CurrencyFormat
                          value={roomDetails?.price}
                          thousandSeparator={true}
                          suffix={"VND/ Ngày"}
                          decimalScale={2}
                          className="text-dark "
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        />
                      </h4>
                    </div>
                  </div>


                  {/* <!-- Rating --> */}
                  {/* <ul className="list-inline mb-2">
                    <li className="list-inline-item me-1 h6 fw-light mb-0"><i className="bi bi-arrow-right me-2"></i>4.5</li>
                    <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0 small"><i className="fa-solid fa-star text-warning"></i></li>
                    <li className="list-inline-item me-0 small"><i className="fa-solid fa-star-half-alt text-warning"></i></li>
                  </ul>

                  <p className="h6 fw-light mb-4"><i className="bi bi-arrow-right me-2"></i>Free breakfast available</p> */}
                  <div className="border-top-light  mb-20"></div>

                  <div className="col-auto">
                    <div className="text-15 text-dark">Nhận phòng</div>
                    {/* <div className="fw-500 font-weight-bold text-dark">Chủ nhật, 26/5/2022</div> */}
                    {/* <div className="text-15 text-light-1 text-dark">15:00 – 23:00</div> */}
                    <Box style={{ padding: "5px" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          // label="Chọn ngày nhận phòng"
                          value={checkInDate}
                          onChange={(newValue) => setCheckInDate(newValue)}
                          minDate={dayjs().startOf("day")} // Chỉ cho phép chọn từ ngày hiện tại
                          renderInput={(params) => (
                            <TextField {...params} />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </div>
                  <div className="col-auto d-none d-md-block">
                    <div className="h-full w-1 bg-border"></div>
                  </div>
                  <div className="col-auto text-right text-md-left mt-3 mt-md-0">
                    <div className="text-15 text-dark">Trả phòng</div>
                    {/* <div className="fw-500 font-weight-bold text-dark">Thứ 2, 27/5/2024</div> */}
                    {/* <div className="text-15 text-light-1 text-dark">01:00 – 11:00</div> */}
                    <Box style={{ padding: "5px" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          // label="Chọn ngày trả phòng"
                          value={checkOutDate}
                          // onChange={(newValue) => setCheckInDate(newValue)}
                          // renderInput={(params) => <TextField {...params} />}
                          onChange={(newValue) => {
                            setCheckOutDate(newValue);
                            handleDateChange(newValue);
                          }}
                          minDate={dayjs(checkInDate).add(1, "day")} // Chỉ cho phép chọn từ ngày sau ngày nhận phòng
                          renderInput={(params) => (
                            <TextField {...params} />
                          )}
                        />
                      </LocalizationProvider>
                    </Box>
                  </div>


                  {/* <!-- Button --> */}
                  <div className="d-grid">
                    <button className="btn btn-lg btn-primary text-white button_hover rounded mb-0" onClick={(e) => {
                      e.preventDefault(); // Prevent the default link action
                      handleBooking(roomDetails.id);
                    }}>Đặt ngay</button>
                  </div>
                </div>
                {/* <!-- Book now END --> */}

                {/* <!-- Best deal START --> */}
                <div className="mt-4 d-none d-xl-block">
                  <h4>Today's Best Deal</h4>

                  <div className="card shadow rounded-3 overflow-hidden">
                    <div className="row g-0 align-items-center">
                      {/* <!-- Image --> */}
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <img src={roomImages.img} className="card-img rounded-0" alt="" />
                      </div>

                      {/* <!-- Title and content --> */}
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="card-body p-3">
                          <h6 className="card-title"><a href="offer-detail.html" className="stretched-link">Travel Plan</a></h6>
                          <p className="mb-0">Get up to $10,000 for lifetime limits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Best deal END --> */}
              </div>
            </aside>
          </div>
          {/* <!-- Content END --> */}

        </div>
        {/* </div> */}
      </section>

      {/* <!-- Room Details Section End --> */}
    </main>
  );
}
