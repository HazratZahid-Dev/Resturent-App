import Aos from "aos";
import React, { useEffect } from "react";
import Button from "../Components/Button";
import "../Styles/Home.css";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="home" className="home__page">
      <div className="flex flex-col justify-center">
        <h4>
          Fresh <span className="text-yellow-500">Food In The</span> FOODDO
        </h4>
        <p>
          Fooddo is an oragnaization which provides Foods To poors and needies.
        </p>
        <Button data-aos="fade-up" text="Play Store" />
      </div>
    </div>
  );
};

export default Home;
