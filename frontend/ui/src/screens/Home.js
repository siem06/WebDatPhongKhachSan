import React from "react";
import Header from "../Layout/Header";
// import 'linearicons/style.css';
import "linearicons/dist/web-font/style.css";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup";
import Room from "../components/Room";
import FacilitieItem from "../components/FacilitiesItem";
import CommentItem from "../components/CommentItem";
import CategoriesBlog from "../components/CategoriesBlog";
import imgs from "../assets/image/index.js";
export default function Home() {
  const blogs = [
    {
      img: imgs.blog1,
      topic: "Kỳ nghỉ mùa hè 2024",
      description:
        "Kế hoạch dự kiến các chương trình ưu đãi khuyến mãi mùa hè 2024",
      date: "31st March,2024",
    },
    {
      img: imgs.blog2,
      topic: "Kỳ nghỉ mùa hè 2024",
      description:
        "Kế hoạch dự kiến các chương trình ưu đãi khuyến mãi mùa hè 2024",
      date: "31st March,2024",
    },
    {
      img: imgs.blog3,
      topic: "Kỳ nghỉ mùa hè 2024",
      description:
        "Kế hoạch dự kiến các chương trình ưu đãi khuyến mãi mùa hè 2024",
      date: "31st March,2024",
    },
  ];
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
                  Book
                  <br /> Your Room
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
                            label="Người lớn"
                            options={[
                              { value: 1, label: "Người lớn" },
                              { value: 2, label: "Trẻ em" },
                              { value: 3, label: "Trẻ sơ sinh" },
                            ]}
                          />
                        </div>
                        <div className="form-group form-option">
                          <InputGroup
                            title="Loại phòng"
                            label="Trẻ em"
                            options={[
                              { value: 1, label: "Trẻ em" },
                              { value: 2, label: "Em bé" },
                              { value: 3, label: "Trẻ sơ sinh" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="book_tabel_item">
                        <InputGroup
                          label="Số phòng"
                          options={[
                            { value: 1, label: "Phòng 01" },
                            { value: 2, label: "Phòng 02" },
                            { value: 3, label: "Phòng 03" },
                          ]}
                        />
                        <Button title="Đặt ngay" />
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
