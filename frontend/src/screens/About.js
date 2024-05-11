import React, { useEffect, useState } from "react";
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
import { getAboutus } from "../service/api";
export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function getAbout() {
      try {
        const data = await getAboutus();
        console.log("Data from API:", data);
        setAboutData(data[0]);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    }

    getAbout();
  }, []);

  return (
    <>
      <Breadcrumb currently="About" classNameImg="bg-parallax" />
      <section className="about_history_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d_flex align-items-center">
              <div className="about_content ">
                <h2 className="title title_color">
                  {aboutData && aboutData.slogan1}
                  <br /> {aboutData && aboutData.slogan2}
                </h2>
                <p>{aboutData && aboutData.content}</p>
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
