import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img
            src="https://www.evitalrx.in/webroot/images/evital-images/logo.png"
            alt="Logo"
          />
        </div>
        <div className="header__menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`header__links ${isMenuOpen ? "open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">Products</li>
            <li className="header__nav-item">Solutions</li>
            <li className="header__nav-item">Pharmacy Types</li>
          </ul>
          <ul className="header__nav-list">
            <li className="header__nav-item1">Pricing</li>
            <li className="header__nav-item1">Learn</li>
            <li className="header__nav-item1">About Us</li>
            <li className="header__nav-item1">Contact Sales</li>
            <li className="login_btn">Login</li>
          </ul>
        </div>
        <div className="header__buttons">
          <a className="header__button header__button--signup">Signup</a>
          <a className="header__button header__button--demo">Get a Demo</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
