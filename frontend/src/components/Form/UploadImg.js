import { Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
export default function UploadImg({ title, onChange }) {
  const [file, setFile] = useState();

  function handleChange(e) {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile); // Update the selected file in the state
    onChange(uploadedFile); // Call the onChange function passed from props
  }

  return (
    <Row className="justify-content-left">
      <Col>
        <p className="fw-light fs-6" style={{ color: "#7b809a" }}>
          {title}
        </p>
        <img
          src={file ? URL.createObjectURL(file) : ""}
          className="img-fluid w-10 h-10"
          alt="Selected"
        />
        <input type="file" onChange={handleChange} />
        {/* Move onChange handler here */}
      </Col>
    </Row>
  );
}
