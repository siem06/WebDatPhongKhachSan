import React from "react";
import blogImg from "../../assets/image/banner/banner-2.jpg";

export default function ArticleBlog({ articleDate }) {
  if (!articleDate) {
    return null; // hoặc có thể trả về một phần tử JSX rỗng tùy thuộc vào yêu cầu của bạn
  }

  return articleDate.map((article, index) => (
    <article className="row blog_item" key={index}>
      <div className="col-md-3">
        <div className="blog_info text-end">
          {/* <div className="post_tag">
            {article.tags.map((tag, index) => (
              <a href="#11" key={index}>
                {tag}
              </a>
            ))}
          </div>
          <ul className="blog_meta list_style">
            <li>
              <a href="#11">
                {article.topic}
                <i className="lnr lnr-calendar-full"></i>
              </a>
            </li>
            <li>
              <a href="#11">
                {article.topic}
                <i className="lnr lnr-eye"></i>
              </a>
            </li>
            <li>
              <a href="#11">
                {article.comment}
                <i className="lnr lnr-bubble"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="col-md-9">
        <div className="blog_post">
          <img
            src={article.img}
            alt=""
            style={{ width: "560px", height: "330px" }}
          />

          <div className="blog_details">
            <a href="#11">
              <h2>{article.topic}</h2>
            </a>
            <p>{article.content}</p>
            <a href="#11" className="view_btn button_hover border border-dark">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </article>
  ));
}
