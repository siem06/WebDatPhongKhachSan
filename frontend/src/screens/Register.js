import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { register, verify } from "../service/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [useName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const navigation = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(step);
    try {
      if (step === 1) {
        const response = await register(email, useName, password, repassword);
        if (response.error) {
          setError(response.error);
        } else {
          setStep(2);
          setError(null);
        }
      } else if (step === 2) {
        const response = await verify(otp, email);
        if (response.error) {
          setError(response.error);
        } else {
          navigation("/login");
          console.log(email, otp);
        }
      }
    } catch (e) {
      console.log("lỗi", e);
      setError(e.response?.data?.message);
    }
  };

  return (
    <div className="register-page d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="registerForm">
            <h2 className="text-center mb-4">ĐĂNG KÝ</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Tên tài khoản:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên"
                  value={useName}
                  onChange={handleName}
                  required
                />
              </Form.Group>
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mật khẩu:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicRePassword">
                <Form.Label>Nhập lại mật khẩu:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  value={repassword}
                  onChange={handleRePasswordChange}
                  required
                />
              </Form.Group>
              {step === 2 && (
                <Form.Group controlId="formBasicOTP">
                  <Form.Label>OTP:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập OTP"
                    value={otp}
                    onChange={handleOTPChange}
                    required
                  />
                </Form.Group>
              )}
              <Button
                // variant="primary"
                type="submit"
                className="w-100 btnRegister"
              >
                {step === 1 ? "Tiếp theo" : "Đăng ký"}
              </Button>
              {error && <p className="text-danger mt-3">{error}</p>}
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
