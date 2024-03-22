import React from 'react';
import './style.css';

function InputGroup({ label, options,title }) {
  return (
    <div className="form-group inputGroup labelText">
      <label htmlFor="inputField">{title}</label>
      <div className="input-group">
        <select className="wide form-control">
          <option data-display={label}>{label}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputGroup;
