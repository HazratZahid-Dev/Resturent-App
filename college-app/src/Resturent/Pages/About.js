import React, { useEffect } from "react";

import Button from "../Components/Button";
import "../Styles/About.css";
import omlet from "../Images/omlet.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div id="about" className=" flex items-center justify-center pt-20">
        <p className="font-bold uppercase text-3xl">
          <span className="text-yellow-600">About</span> Us
        </p>
      </div>
      <div className="about">
        <div className="about__img">
          <img data-aos="fade-up" src={omlet} />
        </div>
        <div data-aos="fade-up" className="about__info">
          <h4 className="font-bold capitalize text-3xl text-yellow-500">
            What about our Foods
          </h4>
          <p>
            Food wastage refers to the food that is fit for eating but ends up
            in trash and is wasted, the wastage of excessive food occur after
            ceremonies, event or family gatherings, while food wastage has
            direct impact on the environment that ends up in the land filling
            methane and carbon dioxide that are main causes of greenhouse effect
            which is impacting
          </p>
          <Button text="Learn More" />
        </div>
      </div>
    </>
  );
};

export default About;
