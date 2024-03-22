import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/css/style.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

    const handleRePassword = (event) => {
      setRePassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Gửi dữ liệu đăng ký (name, email, và password) đến máy chủ hoặc xử lý người dùng ở đây
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Name:', rePassword);
        // Đặt logic xử lý đăng ký ở đây
    };

    return (
        <div className="register-page d-flex align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className='registerForm'>
                        <h2 className="text-center mb-4">ĐĂNG KÝ</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email" value={email} onChange={handleEmailChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mật khẩu:</Form.Label>
                                <Form.Control type="password" placeholder="Nhập mật khẩu" value={password} onChange={handlePasswordChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nhập lại mật khẩu:</Form.Label>
                                <Form.Control type="text" placeholder="Nhập lại mật khẩu" value={rePassword} onChange={handleRePassword} required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 btnRegister">
                                Đăng ký
                            </Button>
                        <div className="mt-3 text-center">
                            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                        </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
