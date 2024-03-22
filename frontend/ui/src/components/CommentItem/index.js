import React from 'react'
import imgCom from "../../assets/image/testtimonial-1.jpg";
import { Carousel } from "react-bootstrap";

export default function CommentItem({data}) {
 
  return (
    <Carousel interval={3000} indicators={false}>
    {[0, 2].map((startIndex, index) => (
      <Carousel.Item key={index}>
        <div className="row">
          {data
            .slice(startIndex, startIndex + 2)
            .map((comment, commentIndex) => (
              <div key={commentIndex} className="col-md-6">
                <div className="media testimonial_item">
                  <img
                    className="rounded-circle"
                    src={comment.img}
                    alt="Commenter"
                  />
                  <div className="media-body">
                    <p>{comment.comment}</p>
                    <a href="#">
                      <h4 className="sec_h4">{comment.name}</h4>
                    </a>
                    <div className="star">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star-half-o"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  )
}
