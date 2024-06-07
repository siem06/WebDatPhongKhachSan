import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";
import "../assets/css/responsive.css";
import "../assets/css/style.css.map";
import "../assets/css/style.css";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup";

import {
  addRoomLike,
  getAllImage,
  getAllRooms,
  getAllRoomsSortedByPrice,
  getLikeRoom,
  getReviewByRoomId,
  getRoomsByType,
  removeRoomLike,
} from "../service/api";

export default function Room() {
  const navigation = useNavigate();

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
  const [rooms, setRooms] = useState([]);
  const [roomImages, setRoomImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6; // Số lượng phòng trên mỗi trang
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [heartStates, setHeartStates] = useState({});
  const handleAddFavorite = async (idAccount, idRoom) => {
    try {
      await addRoomLike(idAccount, idRoom);
      setHeartStates((prevState) => ({ ...prevState, [idRoom]: true }));
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };
  const handleRemoveFavorite = async (idAccount, idRoom) => {
    try {
      await removeRoomLike(idAccount, idRoom);
      setHeartStates((prevState) => ({ ...prevState, [idRoom]: false }));
      console.log("ll,", heartStates);
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };
  const handleHeartClick = async (idRoom) => {
    const isFavorite = heartStates[idRoom];
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Bạn cần đăng nhập để thích phòng.");
      return;
    }

    try {
      if (isFavorite) {
        console.log("Favorite1", isFavorite);
        const s = await handleRemoveFavorite(user.user.id, idRoom); // Bỏ thích nếu đã thích trước đó
        console.log(s);
        console.log(user.user.id, idRoom);

        console.log("Favorite11", isFavorite);

        setHeartStates((prevState) => ({
          ...prevState,
          [idRoom]: false,
        }));
      } else {
        await handleAddFavorite(user.user.id, idRoom); // Thêm vào danh sách yêu thích nếu chưa thích trước đó
        console.log("Favorite111", isFavorite);

        setHeartStates((prevState) => ({
          ...prevState,
          [idRoom]: true,
        }));
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách phòng cho trang hiện tại
        const response = await getAllRooms();
        setRooms(response);

        // Lấy ảnh đầu tiên của mỗi phòng
        const imagePromises = response.map((room) => getAllImage(room.id));
        const images = await Promise.all(imagePromises);

        // Tạo object chứa ảnh của mỗi phòng
        const imagesObj = {};
        images.forEach((image, index) => {
          imagesObj[response[index].id] = image[0];
        });
        setRoomImages(imagesObj);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchFavoriteRooms = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const favoriteRooms = await getLikeRoom(user.user.id);
          const favoriteRoomIds = favoriteRooms.map((room) => room.id);
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

  // Xử lý sự kiện khi chuyển trang
  const handlePagination = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next") {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Tính chỉ số phòng bắt đầu và kết thúc của trang hiện tại
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  // Trong hàm handleSortByPrice, đảm bảo rằng giá trị được truyền đúng cú pháp ('asc' hoặc 'desc')
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
  // type room
  const handleTypeChange = async (e) => {
    const selectedType = e.target.value;
    console.log("Selected Type:", selectedType); // Log selected type to check its value
    let updatedSelectedTypes;

    // If the selected type is already in the selected types, deselect it
    if (selectedTypes.includes(selectedType)) {
      updatedSelectedTypes = [];
    } else {
      // Otherwise, select the clicked type and deselect the others
      updatedSelectedTypes = [selectedType];
    }

    console.log("Updated Selected Types:", updatedSelectedTypes); // Log updated selected types
    setSelectedTypes(updatedSelectedTypes);

    try {
      const response = await getRoomsByType(updatedSelectedTypes);
      console.log("Response:", response); // Log response to see what data is returned
      setRooms(response);
    } catch (error) {
      console.error("Error filtering rooms:", error);
    }
  };
  // Xử lý sự kiện khi chọn hoặc hủy chọn một mức đánh giá
  const handleRatingChange = async (rating) => {
    try {
      console.log(rating);
      if (selectedRating === rating) {
        setSelectedRating(null);
      } else {
        const response = await getReviewByRoomId(rating);
        setRooms(response);
        setSelectedRating(rating); // Cập nhật mức đánh giá đã chọn
      }
    } catch (error) {
      console.error("Error filtering reviews:", error);
    }
  };

  // Xử lý sự kiện khi nhấn nút "Đặt ngay"
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const handleBooking = (roomId) => {
    if (!loggedInUser) {
      alert("Vui lòng đăng nhập để đặt phòng");
      return;
    }
    //  const
    navigation(`/payment?roomId=${roomId}&accountId=${loggedInUser.user.id}`);
  };
  const link_detail = (roomId) => {
    navigation(`/room_detail?roomId=${roomId}`);
  };
  // Render UI
  return (
    <>
      <Breadcrumb currently="Phòng" classNameImg="service_banner_two" />

      <section className="hotel_booking_area">
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
                  <div className="row">
                    <div className="col-md-4">
                      <div className="book_tabel_item">
                        <div className="form-group">
                          <Input
                            placeholder="Arrive"
                            icon="fa fa-calendar"
                            type="date"
                            title={"Ngày nhận phòng"}
                          />
                        </div>
                        <div className="form-group">
                          <Input
                            placeholder="Departure Date"
                            icon="fa fa-calendar"
                            type="date"
                            title={"Ngày trả phòng"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="book_tabel_item">
                        <div className="form-group">
                          <InputGroup
                            title="Loại phòng"
                            label="Người lớn"
                            options={[
                              { value: 1, label: "Người lớn" },
                              { value: 2, label: "Trẻ em" },
                              { value: 3, label: "Trẻ sơ sinh" },
                            ]}
                          />
                        </div>
                        <div className="form-group form-option">
                          <InputGroup
                            title="Loại phòng"
                            label="Trẻ em"
                            options={[
                              { value: 1, label: "Trẻ em" },
                              { value: 2, label: "Em bé" },
                              { value: 3, label: "Trẻ sơ sinh" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="book_tabel_item">
                        <InputGroup
                          label="Số phòng"
                          options={[
                            { value: 1, label: "Phòng 01" },
                            { value: 2, label: "Phòng 02" },
                            { value: 3, label: "Phòng 03" },
                          ]}
                        />
                        <Button title="Đặt ngay" />
                      </div>
                    </div>
                  </div>
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
                      Tiêu chuẩn
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
                      Cao cấp
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
                      Đặc biệt
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
                {/* Hiển thị danh sách phòng */}
                {/* {rooms.map(room => ( */}
                {currentRooms.map((room) => (
                  <div key={room.id} className="col-lg-4 col-md-6 wow fadeInUp">
                    {/* Hiển thị thông tin của mỗi phòng */}
                    {/* Ví dụ: */}
                    <div className="room-item shadow rounded overflow-hidden">
                      {/* <img className="img-fluid" src={room.img} alt={`Room ${room.id}`} style={{ width: "500px", height: "300px" }} /> */}
                      <div
                        style={{ position: "relative", width: "fit-content" }}
                      >
                        <img
                          className="img-fluid"
                          src={
                            roomImages[room.id] ? roomImages[room.id].img : ""
                          }
                          alt={`Room ${room.id}`}
                          style={{ height: "240px" }}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default link action
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
                            className={`fa${
                              heartStates[room.id] ? "s" : "r"
                            } fa-heart text-danger`}
                            style={{ fontSize: "24px" }}
                          ></i>
                        </div>
                      </div>
                      <div
                        className="position-relative"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent the default link action
                          link_detail(room.id);
                        }}
                      >
                        <small className="position-absolute start-0 top-100 translate-middle-y btn-primary text-white rounded py-1 px-3 ms-4 d-flex justify-content-start">
                          <CurrencyFormat
                            value={room.price}
                            thousandSeparator={true}
                            suffix={"VND/ Ngày"}
                            decimalScale={2}
                            className="text-white "
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          />
                        </small>
                      </div>
                      <div className="p-4 mt-2">
                        <h5
                          className="mb-0 text-uppercase text-dark"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default link action
                            link_detail(room.id);
                          }}
                        >
                          {getTypeRoomLabel(room.typeRoom)}
                        </h5>
                        <div className="d-flex mb-3">
                          {/* <small className="border-end me-3 pe-3"><i className="fa fa-bed text-dark me-2"></i>{room.amenities} </small> */}
                          {/* <small className="border-end me-3 pe-3"><i className="fa fa-bath text-dark me-2"></i>{room.amenities}</small>
                                                        <small><i className="fa fa-wifi text-dark me-2"></i>{room.amenities}</small> */}
                        </div>
                        {/* <p className="text-body mb-3">{room.description}</p> */}
                        <div className="d-flex justify-content-between">
                          <Link
                            className="btn btn-sm btn-dark text-white button_hover rounded py-2 px-4 "
                            to="#"
                          >
                            Thêm phòng
                          </Link>

                          <Link
                            className="btn btn-sm btn-primary text-white button_hover rounded py-2 px-4 "
                            to="#"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent the default link action
                              handleBooking(room.id);
                            }}
                          >
                            Đặt ngay
                          </Link>
                          {/* <button className="btn btn-sm btn-primary text-white button_hover rounded py-2 px-4 " onClick={() => handleBooking(room.id)}
                                                            >Đặt ngay</button> */}
                          {/* <Link
                                                            className="btn btn-sm btn-primary text-white button_hover rounded py-2 px-4"
                                                            to="#"
                                                            onClick={(e) => {
                                                                e.preventDefault(); // Prevent the default link action
                                                                handleBooking(room.id);
                                                            }}
                                                        ></Link> */}
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
