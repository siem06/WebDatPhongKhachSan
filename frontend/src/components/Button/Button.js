import React from "react";
import "../../assets/css/style.css";
import "./button.css";

export default function Button({
  title,
  className,
  style,
  icon,
  send,
  onClick,
}) {
  return (
    <button
      //btn_now
      className={`book_now_btn button_hover ${className} ${
        send && "classbutton"
      } `}
      style={style}
      onClick={onClick}
    >
      {title}
      <span className={`${icon && "lnr lnr-location"}`}></span>
    </button>
  );
}
