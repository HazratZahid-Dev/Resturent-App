import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import img from "../Images/IMG-20181008-WA0002.jpg";
import fahad from "../Images/fahad.jpeg";

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__header">
        <p>
          User <span className="text-yellow-500">Info</span>
        </p>
      </div>
      <div className="footer__main">
        <div className="footer__social">
          {/* Show Card On hover */}
          <div className="footer__show">
            <FaInstagram className="footer__icons" />
            <div className="user__card">
              <img src={img} className="h-20 w-20 rounded-full" />
              <p>Fahad Khan</p>
            </div>
          </div>
          <div className="footer__show">
            <FaFacebook className="footer__icons" />
            <div className="user__card">
              <img src={fahad} className="h-20 w-20 rounded-full" />
              <p>Fahad Khan</p>
            </div>
          </div>
          <div className="footer__show">
            <FaWhatsapp className="footer__icons" />
            <div className="user__card">
              <img src={fahad} className="h-20 w-20 rounded-full" />
              <p>Fahad Khan</p>
            </div>
          </div>
          <div className="footer__show">
            <FaLinkedin className="footer__icons" />
            <div className="user__card">
              <img src={img} className="h-20 w-20 rounded-full" />
              <p>Umair Khan</p>
            </div>
          </div>
          {/* Show Card On hover ends */}
        </div>
        <div className="footer__build">
          <p className="">
            Created By <span className="text-yellow-500">Umair & Fahad </span>|
            All Rights Reserved{" "}
            <span className="text-yellow-500 underline cursor-pointer">
              fooddoapps@gmail.com
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
