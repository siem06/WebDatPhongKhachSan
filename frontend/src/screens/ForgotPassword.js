import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { forgot, verifPassword } from "../service/api";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [otp, setOTP] = useState("");
  const navigation = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await forgot(email.trim());
      setModalShow(true);
    } catch (error) {
      console.log("Error", error.response.data.message);
      setError(error.response.data.message);
    }
  };
  const handleSubmit1 = async (event) => {
    event.preventDefault();
    try {
      const user = await verifPassword(email.trim(), otp, password, repassword);
      navigation("login");
    } catch (error) {
      console.log("Error", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login-page d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="formLogin">
            <h2 className="text-center mb-4">ĐẶT LẠI MẬT KHẨU</h2>
            <Form action="login">
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
              {modalShow && (
                <>
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
                      value={repassword}
                      onChange={handleRePassword}
                      required
                    />
                  </Form.Group>
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
                    className="w-100 btnLogin"
                    onClick={handleSubmit1}
                  >
                    Xác nhận
                  </Button>
                </>
              )}
              {!modalShow && (
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 btnLogin"
                  onClick={handleSubmit}
                >
                  Xác nhận
                </Button>
              )}
            </Form>

            <div className="mt-3 text-center">
              Bạn chưa có tài khoản?<Link to="/register">Đăng ký</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
