import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { register, verify } from "../service/api";
import ModalDetail from "../Layout/ModalDetail";
const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [otp, setOTP] = useState("");
  const [error, setError] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const navigation = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRePassword = (event) => {
    setRePassword(event.target.value);
  };
  const handleOTP = (event) => {
    setOTP(event.target.value);
  };
  const handleSubmit1 = async (event) => {
    event.preventDefault();
    try {
      const user = await register(email, phone, password, rePassword);
      setModalShow(true);
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      console.log("rrr", email, otp);
      const user = await verify(otp, email);
      navigation("/login");
    } catch (e) {
      console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  };

  return (
    <div className="register-page d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="registerForm">
            <h2 className="text-center mb-4">ĐĂNG KÝ</h2>
            <Form onSubmit={handleSubmit2}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Điện thoại:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập số điện thoại"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mật khẩu:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={handlePassword}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Nhập lại mật khẩu:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={rePassword}
                  onChange={handleRePassword}
                  required
                />
              </Form.Group>
              {modalShow && (
                <>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>OTP:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập OTP"
                      value={otp}
                      onChange={handleOTP}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 btnRegister"
                  >
                    Đăng ký
                  </Button>
                </>
              )}
              {error && <p className="text-danger">{error}</p>}
              {!modalShow && (
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 btnRegister"
                  onClick={handleSubmit1}
                >
                  Tiếp theo
                </Button>
              )}
            </Form>
            <div className="mt-3 text-center">
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
