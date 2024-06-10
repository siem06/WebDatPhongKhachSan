import React, { useState } from "react";
import Button from "../components/Button/Button";
import CurrencyFormat from "react-currency-format";
import imgs from "../assets/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function SelectedRoom() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Hotel Room", price: 100, image: imgs.about_bg.png },
    { id: 2, name: "Hotel Room", price: 100, image: imgs.about_bg.png },
  ]);

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mt-7">
      <div className="row justify-content-center">
        <h2 className="mb-4">Phòng đã chọn</h2>
        <div className="col-10 col-md-8 col-lg-8">
          {cartItems !== null ? (
            cartItems.map((room, index) => (
              <div className="card shadow p-2 m-2" key={index}>
                <div className="d-flex">
                  <div className="justify-content-center">
                    <img
                      src={imgs.room1}
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
                        <a href="hotel-detail.html">{room.name}</a>
                      </h5>
                      <small>
                        <i className="bi bi-geo-alt me-2"></i>31J W Spark
                        Street, California - 24578
                      </small>
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        <div className="d-flex align-items-center">
                          <h5 className="fw-bold mb-0 me-1">{room.price}$</h5>
                          <span className="mb-0 me-2">/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-sm-0">
                    <DeleteOutlineIcon className="text-danger" />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            ))
          ) : (
            <p>dd</p>
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
                    value="432442"
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
              <Button title="Đặt ngay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
