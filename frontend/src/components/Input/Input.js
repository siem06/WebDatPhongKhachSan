import React from "react";
import "./style.css";
export default function Input({
  placeholder,
  icon,
  type,
  title,
  customStyle,
  typeLabel,
  value,
  onChange,
  disabled,
  className,
  styleInput,
}) {
  return (
    <>
      <label htmlFor="inputField " className={typeLabel} style={customStyle}>
        {title}
      </label>
      <div className="input-group date d-flex" id="datetimepicker11">
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={`form-control ${className}`}
          placeholder={placeholder}
          disabled={disabled}
          style={styleInput}
        />
        <span className="input-group-addon">
          <i className={icon} aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
}
