import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Styles/Carasoul.css";
import React from "react";
import Slider from "react-slick";
import { Products } from "./Data/Data";

const Carasoul = () => {
  const settings = {
    // fade: true,
    swipe: true,
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="carasoul__gallary">
      <Slider {...settings}>
        {Products.map((item) => {
          return <img src={item.image} className="carasoul__img" />;
        })}
      </Slider>
    </div>
  );
};

export default Carasoul;
