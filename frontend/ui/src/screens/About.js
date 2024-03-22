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
export default function About() {
  return (
    <>
      <Breadcrumb currently="About" classNameImg ="bg-parallax" />
      <section className="about_history_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d_flex align-items-center">
              <div className="about_content ">
                <h2 className="title title_color">
                  About Us <br />
                  Lịch sử <br /> Sứ mệnh & Tầm nhìn
                </h2>
                <p>
                  Chào mừng đến với kỳ nghỉ hoàn hảo tại khách sạn 5 sao của
                  chúng tôi! Với hơn một thập kỷ kinh nghiệm trong việc mang lại
                  dịch vụ tiêu chuẩn quốc tế, chúng tôi tự hào là điểm đến lý
                  tưởng cho mỗi du khách đang tìm kiếm sự xa hoa và thoải mái
                  tuyệt đỉnh.
                </p>
                <Button title="Đặt ngay" style={{ width: "220px" }} />
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={imgs.about_bg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
