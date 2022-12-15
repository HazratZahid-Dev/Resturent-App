import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { ReviewsData } from "../Components/Data/Data";

import "../Styles/Reviews.css";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div id="review" className="reviews__header">
        <p>
          Customers <span className="text-yellow-500 ">Reviews</span>
        </p>
      </div>

      <section className="reviews__section">
        {ReviewsData.map((user) => {
          const { name, review, image } = user;
          return (
            <div data-aos="fade-up" key={name} className="reviews__card">
              <p>{review}</p>
              <img src={image} />
              <p2>{name}</p2>
              <div className="flex star">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStarHalf className="bg-white rounded-full text-yellow-500" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
