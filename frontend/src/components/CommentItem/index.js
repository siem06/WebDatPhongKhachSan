import React, { useState, useEffect } from 'react';
import imgCom from "../../assets/image/testtimonial-1.jpg";
import { Carousel } from "react-bootstrap";
import { getAllReviews } from '../../service/api';
import imgs from '../../assets/image';

export default function CommentItem() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getAllReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);
  return (
    <Carousel interval={3000} indicators={false}>
      {[0, 2].map((startIndex, index) => (
        <Carousel.Item key={index}>
          <div className="row">
            {reviews
              .slice(startIndex, startIndex + 2)
              .map((comment, commentIndex) => (
                <div key={commentIndex} className="col-md-6">
                  <div className="media testimonial_item">
                  <div className="avatar avatar-lg me-3 flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              src={comment.user?.avatar || imgs.author}

                              alt="avatar"
                            />
                          </div>
                    <div className="media-body">
                      <p>{comment.comment}</p>
                      <a href="#">
                        <h4 className="sec_h4">{comment.user?.username || 'name'}</h4>
                      </a>
                      <div className="star">
                        {[...Array(5)].map((_, index) => (
                          <a key={index} href="#">
                            {index + 1 <= comment.rating ? (
                              <i className="fa fa-star text-warning"></i>
                            ) : (
                              <i className="fa fa-star-o text-warning"></i>
                            )}
                          </a>
                        ))}
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
