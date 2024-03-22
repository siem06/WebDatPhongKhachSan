import React from "react";
import imgs from "../assets/image/index.js";
import Room from "../components/Room/index.js";
export default function LikeRoom() {
  const rooms = [
    {
      name: "Double Deluxe Room",
      price: "$250/night",
      img: imgs.room1,
    },
    {
      name: "Single Deluxe Room",
      price: "$200/night",
      img: imgs.room2,
    },
    { name: "Honeymoon Suit", price: "$750/night", img: imgs.room3 },
    { name: "Economy Double", price: "$200/night", img: imgs.room4 },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <h2>Phòng yêu thích</h2>
          <p> Theo dõi và quản lý quá danh sách phòng yêu thích.</p>
        </div>
      </div>
      <section className="accomodation_area">
        <div className="container">
          <Room data={rooms} classNamediv="col-lg-4 col-sm-6" like/>
        </div>
      </section>
    </>
  );
}
