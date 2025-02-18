import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import 'linearicons/style.css';
import "linearicons/dist/web-font/style.css";
import imgs from "../assets/image/index.js";
import Button from "../components/Button/Button";
import CategoriesBlog from "../components/CategoriesBlog";
import CommentItem from "../components/CommentItem";
import FacilitieItem from "../components/FacilitiesItem";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup";
import * as CurrencyFormat from "react-currency-format";
import {
  addCart,
  addRoomLike,
  getAllImage,
  getAllRooms,
  getBlogCategory,
  getLikeRoom,
  getService,
  removeRoomLike,
} from "../service/api.js";
import Search from "../components/Search/index.js";
export default function Home() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        if (!blogs) {
          const categoryData = await getBlogCategory();
          setBlogs(categoryData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [blogs]);
  const comments = [
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial1,
    },
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial2,
    },
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial1,
    },
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial1,
    },
  ];
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
  const [facilities, setFacilities] = useState(null);

  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 15; // Số lượng phòng trên mỗi trang
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  // const [heartStates, setHeartStates] = useState({});
  // const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [notification, setNotification] = useState(null);
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
          const favoriteRooms = await getLikeRoom(user.user.id);
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
    async function getServices() {
      try {
        const data = await getService();
        setFacilities(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    }
   
    getServices();
    fetchFavoriteRooms();
    fetchData();
  }, []);
  // Lấy 3 phòng đầu tiên từ danh sách phòng
  const displayedRooms = rooms.slice(0, 4);
  const navigation = useNavigate();
  // Xử lý sự kiện khi nhấn nút "Đặt ngay"
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  //  xử lý xử lý sự kiện nút "Chi tiết phòng"
  // const link_detail = () => {
  //   navigation(`/room_detail`);
  // };
  const handleBooking = (roomId) => {
    if (!loggedInUser) {
      navigation("/login");
      return;
    }

    const roomIds = [roomId];
    navigation("/payment", {
      state: {
        roomIds: roomIds, // Pass the array of roomIds to the payment page
        accountId: loggedInUser.id,
      },
    });
  };
  const [heartStates, setHeartStates] = useState({});
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
  const handleSearchResults = (rooms) => {
    setRooms(rooms);
  };
  return (
    <div>
      <section className="banner_area">
        <div className="booking_table d_flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
          <div className="container">
            <div className="banner_content text-center">
              <h6>RA KHỎI CUỘC SỐNG ĐƠN ĐIỆU</h6>
              <h2>Thư Giãn Tâm Trí Của Bạn</h2>
              <p>Hãy trải nghiệm kỳ nghỉ cùng chúng tôi</p>
              {/* <a href="#" className="btn theme_btn button_hover">Get Started</a> */}
            </div>
          </div>
        </div>
        <div className="hotel_booking_area position">
          <div className="container">
            <div className="hotel_booking_table">
              <div className="col-md-3">
                <h2>
                  Tìm
                  <br /> Phòng
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
      <section className="accomodation_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Phòng khách sạn ở Luxurious</h2>
            <p>
              Trải nghiệm chỗ ở tại khách sạn là hành trình khám phá cuộc sống
              với nhịp sống nhanh chóng của thế giới hiện đại.
            </p>
          </div>
          {/* <Room data={rooms} classNamediv="col-lg-3 col-sm-6" /> */}
          <div className="row mb_30">
            {displayedRooms.map((room) => (
              <div key={room.id} className="col-lg-3 col-sm-6 wow fadeInUp">
                {/* Hiển thị thông tin của mỗi phòng */}
                {/* Ví dụ: */}
                <div className="room-item shadow rounded overflow-hidden">
                  {/* <img className="img-fluid" src={room.img} alt={`Room ${room.id}`} style={{ width: "500px", height: "300px" }} /> */}
                  <div style={{ position: "relative", width: "fit-content" }}>
                    <img
                      className="img-fluid"
                      src={room.images[0].img}
                      alt={`Room ${room.id}`}
                      style={{ height: "340px" }}
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
                  <div className="position-relative">
                    <small className="position-absolute start-0 top-100 translate-middle-y btn-primary text-white rounded py-1 px-3 ms-4">
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
                    <h5 className="mb-0 text-uppercase text-dark">
                    {getTypeRoomLabel(room.type)}
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
      </section>
      <section className="facilities_area section_gap">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_w">Royal Facilities</h2>
            <p>Tiện ích và thân thiện</p>
          </div>
          <FacilitieItem data={facilities} />
        </div>
      </section>
      <section className="testimonial_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Trải Nghiệm Thực Tế Khách Hàng</h2>
            <p>Trải nghiệm chân thực từ những khách hàng</p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <CommentItem data={comments} />
            </div>
          </div>
        </div>
      </section>
      <section className="latest_blog_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Bài Viết Mới Nhất</h2>
            <p>Hãy theo dõi chúng tôi để cập nhật các thông tin mới nhất</p>
          </div>
          <div className="row mb_30">
            <CategoriesBlog dataCategory={blogs} hover tags />
          </div>
        </div>
      </section>
    </div>
  );
}
