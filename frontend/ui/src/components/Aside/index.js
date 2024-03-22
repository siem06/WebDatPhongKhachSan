import React from "react";
import Input from "../Input/Input";

export default function Aside(customClass) {
  
  return (
    <aside className= {`single_sidebar_widget ${customClass}`}>
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
        Boot camps have its supporters andit sdetractors. Some people do not
        understand why you should have to spend money on boot camp when you can
        get. Boot camps have itssuppor ters andits detractors.
      </p>
      <div className="br"></div>
    </aside>
  );
}
