import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useEffect, useState } from "react";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import imgs from "../assets/image";
import Breadcrumb from "../components/Breadcrumb";
import FacilitieItem from "../components/FacilitiesItem";
import { getService } from "../service/api";
export default function Service() {
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
  const [facilities, setFacilities] = useState(null);
  useEffect(() => {
    async function getServices() {
      try {
        const data = await getService();
        setFacilities(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    }

    getServices();
  }, []);

  return (
    <>
      <Breadcrumb currently="Dịch vụ" classNameImg="bg-parallax" />
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
            className="row imageGallery1"
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
