import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaAccusoft,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import "../Styles/Header.css";
const Header = ({ Mode, setMode }) => {
  const [Icon, setIcon] = useState(false);

  // const HandleMode = () => {
  //   const Mode = localStorage.getItem("mode");
  //   if (Mode) {
  //     return JSON.parse(localStorage.getItem("mode"));
  //   } else {
  //     return null;
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("mode", JSON.stringify(mode));
  // }, [mode]);

  return (
    <>
      <div
        className="navbar"
        style={
          Mode
            ? { background: "#f5f5f5", color: "black" }
            : { background: "black", color: "#f5f5f5" }
        }
      >
        <div className="navbar__logo">
          <span>
            <FaAccusoft className="logo" />
            {/* <FaReacteurope /> */}
          </span>
        </div>
        <div
          onClick={() => setIcon(!Icon)}
          className={Icon ? "navbar__menu active" : "navbar__menu"}
          style={
            Mode
              ? { background: "#f5f5f5", color: "black" }
              : { background: "black", color: "#f5f5f5" }
          }
        >
          <a className="menu__items" href="#home">
            Home
          </a>
          <a className="menu__items" href="#about">
            About
          </a>
          <a className="menu__items" href="#menu">
            Menu
          </a>
          <a className="menu__items" href="#product">
            Products
          </a>
          <a className="menu__items" href="#review">
            Review
          </a>
          {/* <a className="menu__items" href="#contact">
            Contact
          </a> */}
        </div>
        {/* menu items ends */}
        <div className="navbar__icons">
          <button onClick={() => setMode(!Mode)}>
            {Mode ? (
              <FaMoon className="text-gray-700 text-2xl bg-gray-300 rounded-full  " />
            ) : (
              <FaSun className="text-yellow-400 text-2xl bg-yellow-100 rounded-full " />
            )}
          </button>
          <span className="search">
            <FaSearch className="search__icon" />
            <input
              className="search__input"
              autoFocus={true}
              placeholder="what do you want to search"
            />
          </span>
          <span className="icon__toggle" onClick={() => setIcon(!Icon)}>
            {Icon ? <FaTimes /> : <FaBars />}
          </span>
        </div>
        {/* icons ended */}
      </div>
    </>
  );
};

export default Header;
