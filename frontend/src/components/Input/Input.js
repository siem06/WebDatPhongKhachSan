import React from "react";
import "./style.css";
export default function Input({ placeholder, icon, type,  title }) {
  return (
    <>
      <label htmlFor="inputField " className="labelText">{title}</label>
      <div className="input-group date d-flex" id="datetimepicker11">
        <input
          type={type}
         className="form-control"
          placeholder={placeholder}
         
        />
        <span className="input-group-addon">
          <i className={icon} aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
}
