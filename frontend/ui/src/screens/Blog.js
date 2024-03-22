import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CategoriesBlog from "../components/CategoriesBlog";
import ArticleBlog from "../components/ArticleBlog";
import imgs from "../assets/image/index.js"
export default function Blog() {
  const categories_blog = [
    {
      topic: "Social Life",
      description: "Enjoy your social life together",
      img: imgs.blog1,
    },
    {
      topic: "Social Life",
      description: "Enjoy your social life together",
      img: imgs.blog2,
    },
    {
      topic: "Social Life",
      description: "Enjoy your social life together",
      img: imgs.blog3,
    },
  ];
  const articles = [
    {
      tags: ["Food, ", "Technology, ", "Politics, ", "Lifestyle "],
      datePosted: "1/1/2020",
      view: "103",
      comment: " 06 ",
      topic: "Astronomy Binoculars A Great Alternative",
      title:
        "  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money onboot camp when you can get the MCSE study materials yourself at afraction.",
    },
    {
      tags: ["Food, ", "Technology, ", "Politics, ", "Lifestyle "],
      datePosted: "1/1/2020",
      view: "103",
      comment: " 06 ",
      topic: "Astronomy Binoculars A Great Alternative",
      title:
        "  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money onboot camp when you can get the MCSE study materials yourself at afraction.",
    },
    {
      tags: ["Food, ", "Technology, ", "Politics, ", "Lifestyle "],
      datePosted: "1/1/2020",
      view: "103",
      comment: " 06 ",
      topic: "Astronomy Binoculars A Great Alternative",
      title:
        "  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money onboot camp when you can get the MCSE study materials yourself at afraction.",
    },
  ];
  return (
    <>
      <Breadcrumb currently="Blog" classNameImg="blog_banner_two" />
      <section className="blog_categorie_area">
        <div className="container">
          <div className="row">
            <CategoriesBlog  dataCategory={categories_blog} positionBlog tags/>
          </div>
        </div>
      </section>
      <section className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_left_sidebar">
                <ArticleBlog articleDate={articles} />
                {/* <nav className="blog-pagination justify-content-center d-flex">
		                        <ul className="pagination">
		                            <li className="page-item">
		                                <a href="#" className="page-link" aria-label="Previous">
		                                    <span aria-hidden="true">
		                                        <span className="lnr lnr-chevron-left"></span>
		                                    </span>
		                                </a>
		                            </li>
		                            <li className="page-item"><a href="#" className="page-link">01</a></li>
		                            <li className="page-item active"><a href="#" className="page-link">02</a></li>
		                            <li className="page-item"><a href="#" className="page-link">03</a></li>
		                            <li className="page-item"><a href="#" className="page-link">04</a></li>
		                            <li className="page-item"><a href="#" className="page-link">09</a></li>
		                            <li className="page-item">
		                                <a href="#" className="page-link" aria-label="Next">
		                                    <span aria-hidden="true">
		                                        <span className="lnr lnr-chevron-right"></span>
		                                    </span>
		                                </a>
		                            </li>
		                        </ul>
		                    </nav> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Posts"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="lnr lnr-magnifier"></i>
                      </button>
                    </span>
                  </div>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget author_widget">
                  <img
                    className="author_img rounded-circle"
                    src="image/blog/author.png"
                    alt=""
                  />
                  <h4>Charlie Barber</h4>
                  <p>Senior blog writer</p>
                  <div className="social_icon">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </div>
                  <p>
                    Boot camps have its supporters andit sdetractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get. Boot camps have itssuppor
                    ters andits detractors.
                  </p>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Popular Posts</h3>
                  <div className="media post_item">
                    <img src={imgs.post1} alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src={imgs.post2} alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src={imgs.post3} alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src={imgs.post1} alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                  <div className="br"></div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
