import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Carasoul from "./Components/Carasoul";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import OurMenu from "./Pages/OurMenu";
import OurProducts from "./Pages/OurProducts";
import Reviews from "./Pages/Reviews";

const MainIndex = () => {
  // trying the local storage dark Mode
  const darkMode = () => {
    let NewMode = localStorage.getItem("mode");
    if (NewMode) {
      return JSON.parse(localStorage.getItem("mode"));
    } else {
      return null;
    }
  };
  const [Mode, setMode] = useState(darkMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(Mode));
  }, [Mode]);

  return (
    <div
      style={
        Mode
          ? {
              background: "#f5f5f5",
              color: "black",
              height: "auto",
              width: "100%",
            }
          : {
              background: "black",
              color: "#f5f5f5",
              height: "auto",
              width: "100%",
            }
      }
    >
      <BrowserRouter>
        <Header Mode={Mode} setMode={setMode} />
        <Home />
        <Carasoul />
        <About />
        <OurMenu />
        <OurProducts />
        <Reviews />
        {/* <Contact /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default MainIndex;
