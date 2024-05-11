import React from "react";
import "./styles.css";
export default function CategoriesBlog({
  dataCategory,
  tags,
  hover,
  positionBlog,
}) {
  if (!dataCategory) {
    return null; // hoặc có thể trả về một phần tử JSX rỗng tùy thuộc vào yêu cầu của bạn
  }
  return dataCategory.map((category, index) => (
    <div className="col-lg-4 position-relative" key={index}>
      <div className="blog general">
        <div className="imgLayout">
          <img
            src={category.img}
            alt="post"
            className={`${hover && "imgHover"} w-100`}
          />
        </div>
        <div
          className={`d-flex text-content ${positionBlog && "positionBlog"}`}
        >
          <div className="text detail">
            <div className={`${tags && "tags"}`}>
              <a href="#11" className="button_hover tag_btn">
                Travel
              </a>
              <a href="11#" className="button_hover tag_btn">
                Life Style
              </a>
            </div>
            <a href="blog-details.html" className="content_hover">
              <h5 className="text">{category.topic}</h5>
            </a>
            <div className="border_line"></div>
            <p className="text">{category.content}</p>
            {/* <p className="text">{category.date}</p> */}
          </div>
        </div>
      </div>
    </div>
  ));
}
