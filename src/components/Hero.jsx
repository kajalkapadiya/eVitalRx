import React from "react";
import eCademy from "../assets/eCademy.svg";
import eCadIcon from "../assets/eCadIcon.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <img src={eCadIcon} className="hero__ecad-icon" alt="eCad Icon" />
        <img src={eCademy} className="hero__ecademy" alt="eCademy" />
        <h3 className="hero__text1">
          Learn <span className="highlight">India’s Best</span> Pharmacy
          Software
        </h3>
        <h4 className="hero__text2">
          Manage your pharmacy with ease & become India’s best pharmacy with us.
        </h4>
        <a href="#" className="hero__button">
          Explore Now
        </a>
      </div>
      <div className="hero__image">
        <img src="man.png" alt="Man" />
      </div>
    </div>
  );
};

export default Hero;
