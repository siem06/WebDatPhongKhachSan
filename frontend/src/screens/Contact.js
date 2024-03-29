import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import imgs from "../assets/image";
export default function Contact() {
    const latitude = 10.8496; // Vĩ độ của Trường Đại học Nông Lâm Thành phố Hồ Chí Minh
    const longitude = 106.7713;
    return (
        <>
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Liên hệ </h2>
                        <ol className="breadcrumb">
                            <li><a href="/Home">Trang chủ</a></li>
                            <li className="active">Liên hệ</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="contact_area section_gap">
                <div className="container">
                    {/* <div id="mapBox" class="mapBox" >
                   <iframe
                   title="Nong Lam University Map"
                   width="600"
                   height="450"
                   frameBorder="0"
                   style={{ border: 0 }}
                   src={`https://www.google.com/maps/embed/v1/place?q=Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20N%C3%B4ng%20L%C3%A2m%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&key=YOUR_API_KEY&center=${latitude},${longitude}&zoom=17`}
                   allowFullScreen
                 ></iframe>
                  
                </div> */}

                <div className="row">
                    <div className="col-md-3">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>Khu phố 6, phường Linh Trung, TP. Thủ Đức Ho Chi Minh</h6>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6><a href="#">00 (440) 9865 562</a></h6>
                                <p>Thời gian mở cửa từ Thứ 2 đến Thứ 6 </p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6><a href="#">luxurious@gmail.com</a></h6>
                                <p>Gửi câu hỏi của bạn vào bất kỳ lúc nào bạn cần hỗ trợ!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Tên của bạn" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email của bạn" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Tiêu đề câu hỏi" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Nội dung câu hỏi"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-right">
                                <button type="submit" value="submit" className="btn theme_btn button_hover">Gửi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >

        </>
    )
}
