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
export default function Contact() {
  return (
    <>
      <section className="breadcrumb_area">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="page-cover text-center">
            <h2 className="page-cover-tittle">Liên hệ </h2>
            <ol className="breadcrumb">
              <li>
                <a href="/Home">Trang chủ</a>
              </li>
              <li className="active">Liên hệ</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="contact_area section_gap">
        <div className="container">
          <div id="mapBox" className="mapBox">
            <iframe
              style={{ width: "100%", height: "500px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.214525515966!2d106.78918677512955!3d10.871281657436786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1711970644758!5m2!1svi!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="row mt-8">
            <div className="col-md-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>Khu phố 6, phường Linh Trung, TP. Thủ Đức Ho Chi Minh</h6>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href="#">00 (440) 9865 562</a>
                  </h6>
                  <p>Thời gian mở cửa từ Thứ 2 đến Thứ 6 </p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href="#">luxurious@gmail.com</a>
                  </h6>
                  <p>Gửi câu hỏi của bạn vào bất kỳ lúc nào bạn cần hỗ trợ!</p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <form
                className="row contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Tên của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Tiêu đề câu hỏi"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Nội dung câu hỏi"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button
                    type="submit"
                    value="submit"
                    className="btn theme_btn button_hover"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
