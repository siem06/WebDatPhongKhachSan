import React, { useState } from "react";
import Logo from "../assets/image/Logo.png";
import { NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import imgs from "../assets/image/index.js";

const Ins = [{ img: imgs.instagram1 }, { img: imgs.instagram2 }, { img: imgs.instagram3 }, { img: imgs.instagram4 },
{ img: imgs.instagram5 }, { img: imgs.instagram6 }, { img: imgs.instagram7 }, { img: imgs.instagram8 }];

export default function Footer() {


    return (
        <div className="footer">
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="footer_title">LUXURIOUS  HOTEL</h6>
                                <p>
                                    Có hồ bơi ngoài trời, trung tâm thể dục, khu vườn và sân hiên ở TP. Hồ Chí Minh. Chỗ nghỉ này có các tiện nghi như nhà hàng và quầy bar. Chỗ nghỉ cung cấp lễ tân 24/24, dịch vụ đưa đón sân bay, dịch vụ phòng và Wi-Fi miễn phí ở toàn bộ chỗ nghỉ.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="footer_title">Thành viên nhóm</h6>
                                <div className="row">
                                    <div className="footer_col">
                                        <ul className="list_style">
                                            <li><a href="#">Phan Thị Hồng Siêm  </a></li>
                                            <li><a href="#">Châu Quế Bình</a></li>

                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul className="list_style">
                                            <li><a href="#">20130386</a></li>
                                            <li><a href="#">20130204</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="footer_title">Bản tin</h6>
                                <p>Hãy gửi mail dưới đây để nhận thông tin mới </p>
                                <div id="mc_embed_signup">
                                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative">
                                        <div className="input-group  d-flex">

                                            <Input placeholder="Địa chỉ email" />
                                            <Button icon send />
                                        </div>
                                        <div className="mt-10 info"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget instafeed">
                                <h6 className="footer_title">Dòng thông tin</h6>
                                <ul className="list_style instafeed d-flex flex-wrap">
                                    {Ins.map((instegram, index) =>
                                        <li key={index}><img src={instegram.img} alt="" /></li>
                                    )}


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border_line"></div>
                    <div className="row footer-bottom d-flex justify-content-between align-items-center">
                        <p className="col-lg-8 col-sm-12 footer-text m-0">
                            Được phát triển bởi &copy;<script>document.write(new Date().getFullYear());</script> NHÓM <i className="fa fa-heart-o" aria-hidden="true"></i> 
                        </p>
                    </div>
                    </div>
            </footer>
        </div>

    );
}