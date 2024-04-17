import React from "react";
import imgs from "../assets/image/index.js";
import Room from "../components/Room/index.js";
import Button from "../components/Button/Button.js";
export default function LikeRoom() {
  const rooms = [
    {
      name: "Double Deluxe Room",
      price: "250",
      img: imgs.room1,
    },
    {
      name: "Single Deluxe Room",
      price: "200",
      img: imgs.room2,
    },
    { name: "Honeymoon Suit", price: "50", img: imgs.room3 },
    { name: "Economy Double", price: "200", img: imgs.room4 },
  ];
  return (
    <>
      <div className="card border bg-transparent">
        <div className="card-header bg-transparent border-bottom">
          <h4 className="card-header-title">DANH SÁCH PHÒNG YÊU THÍCH</h4>
        </div>

        <div className="card-body vstack gap-4 ">
          <div className="d-flex justify-content-end">
            <div className="col-3 text-white">
              <Button
                title="Xóa tất cả"
                className=" mb-0 text-danger btn-delete"
              />
            </div>
          </div>
          {rooms.map((room, index) => (
            <div className="card shadow p-2" key={index}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={room.img}
                    className="card-img rounded-2"
                    alt="Card image"
                    style={{ height: "160px" }}
                  />
                </div>

                <div className="col-md-9">
                  <div className="card-body py-md-2 d-flex flex-column h-100">
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

                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <a
                            href="f#"
                            className="btn btn-sm btn-round btn-danger mb-0"
                          >
                            <i className="fa-solid fa-fw fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h5 className="card-title mb-1">
                      <a href="hotel-detail.html">{room.name}</a>
                    </h5>
                    <small>
                      <i className="bi bi-geo-alt me-2"></i>31J W Spark Street,
                      California - 24578
                    </small>

                    <div className="d-sm-flex justify-content-sm-between align-items-center">
                      <div className="d-flex align-items-center">
                        <h5 className="fw-bold mb-0 me-1">{room.price}$</h5>
                        <span className="mb-0 me-2">/day</span>
                      </div>
                      <div className=" mt-sm-0">
                        <a
                          href="hotel-detail.html"
                          className="btn btn-sm btn-dark w-100 mb-0"
                        >
                          View hotel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
