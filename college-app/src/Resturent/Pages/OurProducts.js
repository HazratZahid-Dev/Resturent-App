import React, { useEffect } from "react";

import Aos from "aos";
import { Products } from "../Components/Data/Data";
import "../Styles/Products.css";
import { FaHeart, FaEye, FaStarHalf, FaStar, FaShopify } from "react-icons/fa";

const OurProducts = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div id="product" data-aos="fade-up" className="products__header">
        <h4>
          Our <span className="text-yellow-600"> Products</span>
        </h4>
      </div>
      <div className="products">
        <section className="products__gallary">
          {Products.map((product) => {
            const { image, price, name } = product;
            return (
              <div key={name} className="products__card">
                <div className="product__icons">
                  <FaHeart className="card__heart" />
                  <FaShopify className="card__bag" />
                  <FaEye className="card__eye" />
                </div>
                <div className="test"></div>
                <img src={image} data-aos="fade-up" />
                <h4>{name}</h4>
                {/* <p>
                  {price}
                  <span className="line-through text-gray-400"> $99</span>
                </p> */}
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
      </div>
    </>
  );
};

export default OurProducts;
