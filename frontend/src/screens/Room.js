import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useEffect, useState } from "react";
import * as CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import Breadcrumb from "../components/Breadcrumb";
import Notification from "../components/Notification";
import Search from "../components/Search";
import {
  addCart,
  addRoomLike,
  getAllRooms,
  getAllRoomsSortedByPrice,
  getLikeRoom,
  getReviewByRoomId,
  getRoomRatingStats,
  getRoomUtilities,
  getRoomsByType,
  removeRoomLike,
} from "../service/api";

export default function Room() {
  const navigation = useNavigate();

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
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 15; // Số lượng phòng trên mỗi trang
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [heartStates, setHeartStates] = useState({});
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [notification, setNotification] = useState(null);
  const [ratings, setRatings] = useState({});
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  const handleAddRoom = async (roomId) => {
    if (!loggedInUser) {
      navigation("/login");
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
      navigation("/login");
      return;
    }
    try {
      if (isFavorite) {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllRooms();
        setRooms(response);
      } catch (error) {
        console.error("Error fetching data:", error);
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

    fetchData();
    fetchFavoriteRooms();
  }, [currentPage]);

  const handlePagination = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next") {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const handleSortByPrice = async (order) => {
    try {
      if (order === "asc" || order === "desc") {
        const sortedRooms = await getAllRoomsSortedByPrice(order);
        setRooms(sortedRooms);
      } else {
        console.error("Invalid order parameter:", order);
      }
    } catch (error) {
      console.error("Error sorting rooms by price:", error);
    }
  };
  const handleTypeChange = async (e) => {
    const selectedType = e.target.value;
    let updatedSelectedTypes;

    if (selectedTypes.includes(selectedType)) {
      updatedSelectedTypes = [];
    } else {
      updatedSelectedTypes = [selectedType];
    }

    setSelectedTypes(updatedSelectedTypes);

    try {
      const response = await getRoomsByType(updatedSelectedTypes);
      setRooms(response);
    } catch (error) {
      console.error("Error filtering rooms:", error);
    }
  };
  const handleRatingChange = async (rating) => {
    try {
      console.log(rating);
      if (selectedRating === rating) {
        setSelectedRating(null);
      } else {
        const response = await getReviewByRoomId(rating);
        setRooms(response);
        setSelectedRating(rating);
      }
    } catch (error) {
      console.error("Error filtering reviews:", error);
    }
  };

  // Xử lý sự kiện khi nhấn nút "Đặt ngay"

  const handleBooking = (roomId) => {
    if (!loggedInUser) {
      navigation("/login");
      return;
    }

    const roomIds = [roomId];
    navigation("/payment", {
      state: {
        roomIds: roomIds,
        accountId: loggedInUser.id,
      },
    });
  };

  const link_detail = (roomId) => {
    navigation(`/room_detail?roomId=${roomId}`);
  };
  const handleSearchResults = (rooms) => {
    setRooms(rooms);
  };
  //  review
  useEffect(() => {
    const fetchRatingStats = async () => {
      try {
        if (!rooms || rooms.length === 0) {
          console.log("Rooms is empty or undefined.");
          return;
        }

        const ratingStatsPromises = rooms.map((room) =>
          getRoomRatingStats(room.id)
        );

        const ratingStatsResponses = await Promise.all(ratingStatsPromises);
        console.log("Rating stats responses:", ratingStatsResponses);

        const ratingStatsMap = {};
        ratingStatsResponses.forEach((response, index) => {
          const { averageRating } = response; // Ensure response structure
          ratingStatsMap[rooms[index].id] = averageRating;
        });

        setRatings(ratingStatsMap);
      } catch (error) {
        console.error("Error fetching rating stats:", error);
      }
    };
    console.log("ra", ratings)
    fetchRatingStats();
  }, [rooms]);
  const [utilities, setUtilities] = useState([]);
  const utilityIconMap = {
    bed: 'bed',
    bath: 'bath',
    wifi: 'wifi',
    // Add more mappings if needed
  };
  useEffect(() => {
    const fetchUtilities = async () => {
      try {
        const data = await getRoomUtilities();
        const allUtilities = data.map(item => item.utilities).join(',').split(',').map(u => u.trim());
        setUtilities(allUtilities);
      } catch (error) {
        console.error("Error fetching room utilities:", error);
      }
    };

    fetchUtilities();
  }, []);
  return (
    <>
      {/* <Breadcrumb currently="Phòng" classNameImg="service_banner_two" /> */}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      <section className="hotel_booking_area mt-7">
        <div className="hotel_booking_area position">
          <div className="container">
            <div className="hotel_booking_table">
              <div className="col-md-3">
                <h2>
                  Đặt
                  <br /> Phòng ngay
                </h2>
              </div>
              <div className="col-md-9">
                <div className="boking_table">
                  <Search onSearchResults={handleSearchResults} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================Booking Tabel Area  =================-->
    <!--================ Accomodation Area  =================-->
    <!-- Room Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-2">
              <form id="roomFilterForm">
                <div className="mb-3">
                  <h6 className="text-uppercase text-dark">Sắp xếp theo giá</h6>
                  <div className="default-select" id="default-select">
                    <select onChange={(e) => handleSortByPrice(e.target.value)}>
                      <option value="asc">Thấp đến cao</option>
                      <option value="desc">Cao đến thấp</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="mb-3">
                  <label className="form-label">
                    <h6 className="text-uppercase text-dark">Loại phòng</h6>
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="default-checkbox"
                      value="1"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("1")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox1"
                    >
                      Đơn Tiêu chuẩn
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox5"
                      value="5"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("5")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox4"
                    >
                      Đôi Tiêu chuẩn
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox2"
                      value="2"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("2")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox2"
                    >
                      Đơn Cao cấp
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox4"
                      value="6"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("6")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox4"
                    >
                      Đôi Cao cấp
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox3"
                      value="3"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("3")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox3"
                    >
                      Đơn Đặc biệt
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox4"
                      value="7"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("7")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox4"
                    >
                      Đôi Đặc biệt
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox4"
                      value="4"
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes("4")}
                    />
                    <label
                      className="form-check-label text-dark"
                      htmlFor="inlineCheckbox4"
                    >
                      Tổng thống
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <h6 className="text-uppercase text-dark">Đánh giá</h6>
                  </label>
                  <div className="form-check form-check-inline">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`inlineRadio${rating}`}
                          value={rating}
                          onChange={() => handleRatingChange(rating)}
                          checked={selectedRating === rating}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`inlineRadio${rating}`}
                        >
                          {[...Array(rating)].map((_, index) => (
                            <small
                              key={index}
                              className="fa fa-star text-warning"
                            ></small>
                          ))}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-10">
              <div className="row g-4" id="roomList">
                {currentRooms.map((room) => (
                  <div key={room.id} className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="room-item shadow rounded overflow-hidden">
                      <div
                        style={{ position: "relative", width: "fit-content" }}
                      >
                        <img
                          className="img-fluid"
                          src={
                            room.images.length > 0 ? room.images[0].img : "hhh"
                          }
                          alt={`Room ${room.id}`}
                          style={{ height: "240px" }}
                          onClick={(e) => {
                            e.preventDefault();
                            link_detail(room.id);
                          }}
                        />
                        <div
                          className="position-absolute end-0 top-0 mt-2 me-2"
                          onClick={() => handleHeartClick(room.id)}
                          style={{ cursor: "pointer" }}
                          title="Lưu yêu thích"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                        >
                          <i
                            className={`fa${heartStates[room.id] ? "s" : "r"
                              } fa-heart text-danger`}
                            style={{ fontSize: "24px" }}
                          ></i>
                        </div>
                      </div>
                      <div
                        className="position-relative"
                        onClick={(e) => {
                          e.preventDefault();
                          link_detail(room.id);
                        }}
                      >
                        <small className="position-absolute start-0 top-100 translate-middle-y btn-primary text-white rounded py-1 px-3 ms-4 d-flex justify-content-start">
                          <CurrencyFormat
                            value={room.price}
                            thousandSeparator={true}
                            suffix={"VND/ Ngày"}
                            decimalScale={2}
                            displayType={"text"}
                            className="text-white customInput"
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          />
                        </small>
                      </div>
                      <div className="p-4 mt-2">
                        <div key={room.id} className="d-flex justify-content-end align-items-center position-relative">
                          <h5
                            className="mb-0 text-uppercase text-dark"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent the default link action
                              link_detail(room.id);
                            }}
                          >
                            {getTypeRoomLabel(room.type)}
                          </h5>


                          <div className="room-rating">
                            {/* <h2 className="mb-0 me-2">{ratings[room.id]}</h2> */}
                            <ul className="list-inline mb-0 d-flex align-items-center">
                              {[...Array(5)].map((_, i) => (
                                <li key={i} className="list-inline-item me-0">
                                  {i < Math.floor(ratings[room.id] || 0) ? (
                                    <i className="fas fa-star text-warning"></i>
                                  ) : (
                                    i < ratings[room.id] && ratings[room.id] % 1 !== 0 ? (
                                      <i className="fas fa-star-half-alt text-warning"></i>
                                    ) : (
                                      <i className="far fa-star text-warning"></i>
                                    )
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex mb-3">
                          {utilities.slice(-3).map((utility, index) => (
                            <small key={index} className="border-end me-3 pe-3 d-flex align-items-center">
                              <i className={`fa fa-${utility.toLowerCase()} text-dark me-2`}></i>
                              {utility}
                            </small>
                          ))}
                        </div>
                        <div className="d-flex justify-content-between">
                          <Link
                            className="btn btn-sm btn-dark text-white button_hover rounded py-2 px-4 "
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddRoom(room.id);
                            }}
                          >
                            Thêm phòng
                          </Link>

                          <Link
                            className="btn btn-sm btn-primary text-white button_hover rounded py-2 px-4 "
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleBooking(room.id);
                            }}
                          >
                            Đặt ngay
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination/> */}
      <nav className="blog-pagination justify-content-center d-flex">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => handlePagination("prev")}
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <span className="lnr lnr-chevron-left"></span>
              </span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link active">{currentPage}</a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => handlePagination("next")}
              aria-label="Next"
            >
              <span aria-hidden="true">
                <span className="lnr lnr-chevron-right"></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- Room End --> */}
      {/* <!--================ Accomodation Area  =================--> */}
    </>
  );
}
