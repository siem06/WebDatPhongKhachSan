import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ModalDetail from "../Layout/ModalDetail";
import { login } from "../service/api";
const Login = ({ setLoggedIn }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigation = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(email.trim(), password);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("role", user.user.role);
      setLoggedIn(true);
      if (user.user.role === 1) {
        navigation("/dashboard");
      } else {
        navigation("/");
      }
    } catch (error) {
      console.log("Error");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login-page d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="formLogin">
            <h2 className="text-center mb-4">ĐĂNG NHẬP</h2>
            <Form onSubmit={handleSubmit} action="login">
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

              {error && <p className="text-danger">{error}</p>}
              <Button
                variant="primary"
                type="submit"
                className="w-100 btnLogin"
              >
                Đăng nhập
              </Button>
            </Form>
            <div className="mt-3 text-center">
              <Link to="/forgot"> Quên mật khẩu?</Link>
            </div>
            <ModalDetail
              show={modalShow}
              resetPass={true}
              btnNext
              header="Đặt lại mật khẩu"
              title="Đặt lại mật khẩu"
              onHide={() => setModalShow(false)}
            />
            <div className="mt-3 text-center">
              Bạn chưa có tài khoản?<Link to="/register">Đăng ký</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
