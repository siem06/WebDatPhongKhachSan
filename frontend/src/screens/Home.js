import React, { useEffect, useState } from "react";
// import 'linearicons/style.css';
import "linearicons/dist/web-font/style.css";
import imgs from "../assets/image/index.js";
import Button from "../components/Button/Button";
import CategoriesBlog from "../components/CategoriesBlog";
import CommentItem from "../components/CommentItem";
import FacilitieItem from "../components/FacilitiesItem";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup";
import Room from "../components/Room";
import { getBlogCategory, getService } from "../service/api.js";
export default function Home() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        if (!blogs) {
          const categoryData = await getBlogCategory();
          setBlogs(categoryData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [blogs]);
  const comments = [
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial1,
    },
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial2,
    },
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial1,
    },
    {
      name: "Fanny Spencer",
      comment:
        "Đó thực sự là 1 trải nhiệm thú vị của tôi, dịch vụ nơi đây rất tốt, cơ sở vật chất rất hiện đại, không gian mát mẻ sạch sẽ.",
      img: imgs.testtimonial1,
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
  const rooms = [
    {
      name: "Double Deluxe Room",
      price: "$250/night",
      img: imgs.room1,
    },
    {
      name: "Single Deluxe Room",
      price: "$200/night",
      img: imgs.room2,
    },
    { name: "Honeymoon Suit", price: "$750/night", img: imgs.room3 },
    { name: "Economy Double", price: "$200/night", img: imgs.room4 },
  ];
  return (
    <div>
      <section className="banner_area">
        <div className="booking_table d_flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
          <div className="container">
            <div className="banner_content text-center">
              <h6>RA KHỎI CUỘC SỐNG ĐƠN ĐIỆU</h6>
              <h2>Thư Giãn Tâm Trí Của Bạn</h2>
              <p>Hãy trải nghiệm kỳ nghỉ cùng chúng tôi</p>
              {/* <a href="#" className="btn theme_btn button_hover">Get Started</a> */}
            </div>
          </div>
        </div>
        <div className="hotel_booking_area position">
          <div className="container">
            <div className="hotel_booking_table">
              <div className="col-md-3">
                <h2>
                  Tìm
                  <br /> Phòng
                </h2>
              </div>
              <div className="col-md-9">
                <div className="boking_table">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="book_tabel_item">
                        <div className="form-group">
                          <Input
                            placeholder="Arrive"
                            icon="fa fa-calendar"
                            type="date"
                            title={"Ngày nhận phòng"}
                          />
                        </div>
                        <div className="form-group">
                          <Input
                            placeholder="Departure Date"
                            icon="fa fa-calendar"
                            type="date"
                            title={"Ngày trả phòng"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="book_tabel_item">
                        <div className="form-group">
                          <InputGroup
                            title="Loại phòng"
                            label="Tiêu chuẩn"
                            options={[
                              { value: 1, label: "Tiêu chuẩn" },
                              { value: 2, label: "Cao cấp" },
                              { value: 3, label: "Đặc biêt" },
                              { value: 4, label: "Tổng thống" },
                            ]}
                          />
                        </div>
                        <div className="form-group form-option">
                          <InputGroup
                            title="Kiểu phòng"
                            label="Phòng đơn"
                            options={[
                              { value: 1, label: "Phòng đơn " },
                              { value: 2, label: "Phòng đôi" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="book_tabel_item mt-7 pt-4">
                        <Button title="Tìm ngay" className="button_hover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="accomodation_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Hotel Accomodation</h2>
            <p>
              Trải nghiệm chỗ ở tại khách sạn là hành trình khám phá cuộc sống
              với nhịp sống nhanh chóng của thế giới hiện đại.
            </p>
          </div>
          <Room data={rooms} classNamediv="col-lg-3 col-sm-6" />
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
            <h2 className="title_w">Royal Facilities</h2>
            <p>Tiện ích và thân thiện</p>
          </div>
          <FacilitieItem data={facilities} />
        </div>
      </section>
      <section className="testimonial_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Trải Nghiệm Thực Tế Khách Hàng</h2>
            <p>Trải nghiệm chân thực từ những khách hàng</p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <CommentItem data={comments} />
            </div>
          </div>
        </div>
      </section>
      <section className="latest_blog_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Bài Viết Mới Nhất</h2>
            <p>Hãy theo dõi chúng tôi để cập nhật các thông tin mới nhất</p>
          </div>
          <div className="row mb_30">
            <CategoriesBlog dataCategory={blogs} hover tags />
          </div>
        </div>
      </section>
    </div>
  );
}
