import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link  , useNavigate } from 'react-router-dom';
const Login = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === "hongsiem2002@gmail.com" && password === "123456") {
            setLoggedIn(true);
           return navigation('/');
        }
    };
  
    return (
        <div className="login-page d-flex align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className='formLogin'>
                        <h2 className="text-center mb-4">ĐĂNG NHẬP</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email" value={email} onChange={handleEmailChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mật khẩu:</Form.Label>
                                <Form.Control type="password" placeholder="Nhập mật khẩu" value={password} onChange={handlePasswordChange} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 btnLogin">
                                Đăng nhập
                            </Button>
                        </Form>
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
