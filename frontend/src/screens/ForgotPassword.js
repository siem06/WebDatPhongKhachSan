import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { forgot, resetPassword, verifPassword } from "../service/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
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
      if (step === 1) {
        await forgot(email.trim());
        setStep(2);
      } else if (step === 2) {
        await verifPassword(email.trim(), otp);
        setStep(3);
      } else if (step === 3) {
        await resetPassword(password, repassword);
        navigation("/login");
      }
    } catch (error) {
      console.log("Error", error.response.message);
      setError(error.response.message);
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
              {step === 2 && ( // Display OTP field only in step 2
                <Form.Group controlId="formBasicOTP">
                  <Form.Label>OTP:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập OTP"
                    value={otp}
                    onChange={handleOTP}
                    required
                  />
                </Form.Group>
              )}

              {step === 3 && ( // Display password fields only in step 3
                <>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Đặt mật khẩu mới:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      value={password}
                      onChange={handlePassword}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicRePassword">
                    <Form.Label>Nhập lại mật khẩu:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập lại mật khẩu"
                      value={repassword}
                      onChange={handleRePassword}
                      required
                    />
                  </Form.Group>
                </>
              )}

              <Button
                variant="primary"
                type="submit"
                className="w-100 btnLogin"
                onClick={handleSubmit}
              >
                {step === 3 ? "Xác nhận" : "Tiếp theo"}
              </Button>
            </Form>
            {error && <p className="text-danger mt-3">{error}</p>}
            <div className="mt-3 text-center">
              Tôi muốn <Link to="/login">Đăng nhập?</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
