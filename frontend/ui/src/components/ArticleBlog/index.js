import React from "react";
import blogImg from "../../assets/image/banner/banner-2.jpg";

export default function ArticleBlog({ articleDate }) {
  return articleDate.map((article, index) => (
    <article className="row blog_item" key = {index}>
      <div className="col-md-3">
        <div className="blog_info text-end">
          <div className="post_tag">
            {article.tags.map((tag, index) => (
              <a href="#11" key={index}>
                {tag}
              </a>
            ))}
          </div>
          <ul className="blog_meta list_style">
            <li>
              <a href="#11">
                {article.datePosted}
                <i className="lnr lnr-calendar-full"></i>
              </a>
            </li>
            <li>
              <a href="#11">
                {article.view}
                <i className="lnr lnr-eye"></i>
              </a>
            </li>
            <li>
              <a href="#11">
                {article.comment}
                <i className="lnr lnr-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-9">
        <div className="blog_post">
          <img src={blogImg} alt="" />
          <div className="blog_details">
            <a href="#11">
              <h2>{article.topic}</h2>
            </a>
            <p>{article.title}</p>
            <a href="#11" className="view_btn button_hover">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </article>
  ));
}
