import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import FacilitieItem from "../components/FacilitiesItem";
import imgs from "../assets/image";
export default function Service() {
  const facilities = [
    {
      icon: "lnr lnr-dinner",
      name: "Nhà hàng",
      description:
        "Không gian lịch lãm và ấm cúng, nơi bạn sẽ được trải nghiệm những hương vị tinh tế và dịch vụ hoàn hảo.",
    },
    {
      icon: "lnr lnr-bicycle",
      name: "Câu lạc bộ thể thao",
      description:
        "Với các tiện ích hiện đại và đa dạng như phòng tập gym, hồ bơi, sân tennis và sân cầu lông,...",
    },
    {
      icon: "lnr lnr-shirt",
      name: "Hồ bơi",
      description:
        "Nơi lý tưởng để bạn tận hưởng những khoảnh khắc bình yên và thư giãn hòa mình vào thiên nhiên. ",
    },
    {
      icon: "lnr lnr-apartment",
      name: "Double Deluxe Room",
      description:
        "Với thiết kế rộng rãi và tiện nghi hiện đại, mang đến cho bạn một trải nghiệm tuyệt vời với mọi tiện ích bạn cần.",
    },
    {
      icon: "lnr lnr-construction",
      name: "Bar",
      description:
        "Một điểm đến lý tưởng để thư giãn và tận hưởng đồ uống ngon. Hòa mình vào các bữa tiệc hội nhập bạn bè.",
    },
    {
      icon: "lnr lnr-heart-pulse",
      name: "Gymnesium",
      description:
        "Một không gian hoàn hảo để bạn rèn luyện cơ thể và nâng cao sức khỏe, với cơ sở vật chất hiện đại và chất lượng.",
    },
  ];
  const img = [
    {
      img: imgs.gallery1,
      style: { position: "absolute", left: "0px", top: "0px" },
    },
    {
      img: imgs.gallery2,
      style: { position: "absolute", left: "390px", top: "0px" },
    },
    {
      img: imgs.gallery3,
      style: { position: "absolute", left: "780px", top: "0px" },
    },
    {
      img: imgs.gallery4,
      style: { position: "absolute", left: "0px", top: "280px" },
    },
    {
      img: imgs.gallery6,
      style: { position: "absolute", left: "780px", top: "280px" },
    },
    {
      img: imgs.gallery5,
      style: { position: "absolute", left: "390px", top: "410px" },
    },
    {
      img: imgs.gallery1_1,
      style: { position: "absolute", left: "0px", top: "690px" },
    },
    {
      img: imgs.gallery2_1,
      style: { position: "absolute", left: "390px", top: "690px" },
    },
    {
      img: imgs.gallery3_1,
      style: { position: "absolute", left: "780px", top: "690px" },
    },
  ];

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
            <h2 className="page-cover-tittle">Dịch vụ</h2>
            <ol className="breadcrumb">
              <li>
                <a href="/home">Trang chủ</a>
              </li>
              <li className="active">Dịch vụ</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="facilities_area section_gap">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_w">Cở sở vật chất</h2>
            <p>Tiện ích và thân thiện</p>
          </div>
          <FacilitieItem data={facilities} />
        </div>
      </section>

      <section className="gallery_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Hình ảnh khách sạn luxurious</h2>
            <p>Không khí khách sạn dễ chịu và thư giãn</p>
          </div>
          <div
            class="row imageGallery1"
            id="gallery"
            style={{ position: "relative", height: "1100px" }}
          >
            {img.map((pic, index) => (
              <div
                className="col-md-4 d-flex align-items-stretch "
                style={pic.style}
                key={index}
              >
                <div className="gallery_item">
                  <div className="gallery_img">
                    <img src={pic.img} alt="" className="img-fluid" />
                    <div className="hover">
                      <a className="light" href={pic}>
                        <i className="fa fa-expand"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
