import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function UploadImg({ title }) {
  const [file, setFile] = useState(
    "https://down-vn.img.susercontent.com/file/2ba88500b21bc2fbff076fa78f95ed5d"
  );
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <Row className="justify-content-left">
      <Col>
        <p className="fw-light fs-6" style={{ color: "#7b809a" }}>
          {title}
        </p>
        <img src={file} className="img-fluid w-10 h-10" />
        <input type="file" onChange={handleChange} />
      </Col>
    </Row>
  );
}
