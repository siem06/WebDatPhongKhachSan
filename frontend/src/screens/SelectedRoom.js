import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { getByIdUserAll, getRoomsById, removeCart } from "../service/api";

export default function SelectedRoom() {
  const [cartItems, setCartItems] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [notification, setNotification] = useState(null);

  const navigation = useNavigate();
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };
  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await getByIdUserAll(loggedInUser.id);
        const roomDetails = await Promise.all(
          response.roomCarts.map(async (room) => {
            const roomDetail = await getRoomsById(room.id);
            return { ...room, ...roomDetail };
          })
        );
        setCartItems(roomDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getRoom();
  }, []);
  const handleBooking = () => {
    if (!loggedInUser) {
      navigation("/login");
      return;
    }
    if (cartItems.length === 0) {
      showNotification("warning", "Bạn chưa chọn phòng");
      return;
    }
    const roomId = cartItems.map((item) => item.id);
    navigation("/payment", {
      state: {
        roomIds: roomId,
        accountId: loggedInUser.id,
      },
    });
    console.log("id", roomId);
  };
  const removeFromCart = async (id) => {
    try {
      await removeCart(id);
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  const totalPrice = cartItems.reduce((total, room) => total + room.price, 0);

  return (
    <div className="container mt-7">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <div className="row justify-content-center">
        <h2 className="mb-4">Phòng đã chọn</h2>
        <div className="col-10 col-md-8 col-lg-8">
          {cartItems !== null && cartItems.length !== 0 ? (
            cartItems.map((room, index) => (
              <div className="card shadow p-2 m-2" key={index}>
                <div className="d-flex">
                  <div className="justify-content-center">
                    <img
                      src={room.images[0].img}
                      className="card-img rounded-2"
                      alt="Cardimage"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </div>

                  {/* <div className="col-md-9"> */}
                  <div className="card-body py-md-2 d-flex flex-column h-100">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <ul className="list-inline small mb-0">
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="fa-solid fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fa-solid fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                      </div>
                      <h5 className="card-title mb-1">
                        <Link to={`/room_detail?roomId=${room.id}`}>
                          {room.type}
                        </Link>
                      </h5>

                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        <div className="d-flex align-items-center">
                          <h5 className="fw-bold mb-0 me-1">
                            <CurrencyFormat
                              value={room.price}
                              thousandSeparator={true}
                              suffix={"VND/ Ngày"}
                              decimalScale={2}
                              className="text-black customInput"
                              displayType={"text"}
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            />
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-sm-0">
                    <DeleteOutlineIcon
                      className="text-danger"
                      onClick={() => removeFromCart(room.carts.id)}
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            ))
          ) : (
            <h5>Bạn chưa chọn phòng nào!</h5>
          )}
        </div>
        <div className="col-10 col-md-8 col-lg-4">
          <div className="border p-1">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-7">
                <h6>Total</h6>
                <p>Một phòng, bao gồm thuế</p>
              </div>
              <div className="col-10 col-md-8 col-lg-5">
                <h5>
                  <CurrencyFormat
                    value={totalPrice}
                    thousandSeparator={true}
                    suffix={"VND"}
                    decimalScale={2}
                    className="text-danger"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  />
                </h5>
              </div>
            </div>
            <div>
              <Link
                className="btn btn-sm btn-primary text-white button_hover rounded py-2 px-4 "
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleBooking();
                }}
              >
                Đặt ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
