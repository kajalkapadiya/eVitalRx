import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column footer-column-1">
          <img
            src="https://www.evitalrx.in/webroot/images/evital-images/logo2.png"
            alt="eVitalRx Logo"
            className="footer-logo"
          />
          <div className="footer-sales">
            <ul>
              <li className="sales-item">
                Sales
                <a className="contact-link">8401826262</a>
              </li>
              <li className="email-item">sales@evital.in</li>
              <li>
                <span className="email-add">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h3>Customers</h3>
          <ul className="footer-list">
            <li>
              <a href="#">Refer a chemist friend</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Step by step videos</a>
            </li>
            <li>
              <a href="#">Book Training</a>
            </li>
            <li>
              <a href="#">VitalCoins</a>
            </li>
            <li>
              <a href="#">What's New</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <ul className="footer-list">
            <li>
              <a href="#">Run your Pharmacy Efficiently</a>
            </li>
            <li>
              <a href="#">API Products</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">MedGuide</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul className="footer-list">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
          <ul className="social links">
            <li class="social-item">
              <a href="https://www.facebook.com/eVitalRx" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="social-item">
              <a href="https://twitter.com/eVitalRx" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="social-item">
              <a
                href="https://www.linkedin.com/company/evitalrx/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li class="social-item">
              <a href="https://www.youtube.com/@eVitalRx" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="social-item">
              <a href="https://www.instagram.com/evitalrx/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
        <span>&copy; 2020-2024 Equality Healthcare Pvt Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
