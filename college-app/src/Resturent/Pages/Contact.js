import React from "react";
import phone from "../Images/telephone.jpg";

import Button from "../Components/Button";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact__header">
        <p>
          <span className="text-yellow-500"> Contact </span>
          Us
        </p>
      </div>
      <div className="contact">
        <div className="contact__image">
          <div className="contact__test"></div>
          <img src={phone} />
        </div>
        <>
          <form className="contact__form">
            <div className="flex justify-center font-bold text-3xl">
              <p>
                Get In <span className="text-yellow-500"> Touch </span>
              </p>
            </div>
            <input placeholder="Enter Name" />
            <input placeholder="Enter Email" />
            <input placeholder="Enter Number" />
            <Button text="submit" />
          </form>
        </>
      </div>
    </>
  );
};

export default Contact;
