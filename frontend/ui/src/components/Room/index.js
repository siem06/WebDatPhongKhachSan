import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"
import Button from "../Button/Button";
export default function Room({ data, classNamediv,like }) {
  return (
    <div className="row mb_30">
      {data.map((room, index) => (
        <div className={` ${classNamediv}`} key={index}>
          <div className="accomodation_item text-center">
            <div className="hotel_img">
              <img src={room.img} alt="" />
              {like && <FontAwesomeIcon icon={faHeart} className={`${like && "like"} block`} />}
              <Button title="Đặt ngay" className="btn theme_btn button_hover" />
            </div>
            <a href="#">
              <h4 className="sec_h4">{room.name}</h4>
            </a>
            <h5>
              {room.price}
              <small></small>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}
