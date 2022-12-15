import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import { Data } from "../Components/Data/Data";
import "../Styles/OurMenu.css";

const OurMenu = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="menu">
      <div data-aos="fade-up" className="menu__header">
        <h4 className="text-3xl font-bold uppercase mb-6">
          Our<span className="text-yellow-500"> Menu</span>
        </h4>
      </div>
      {/* header ends */}
      <div className="menu__gallary">
        {Data.map((menu) => {
          const { image, id, price, name } = menu;
          return (
            <div data-aos="fade-up" key={id} className="menu__card">
              <div className="image__border">
                <img src={image} />
              </div>
              <div className="card__desc">
                <p>{name}</p>
                {/* <p>
                  ${price}
                  <span className="line-through text-gray-500">$50</span>
                </p> */}
                {/* <button>Order Now</button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurMenu;
