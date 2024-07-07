import React from "react";
import "./Testimonial.css";
import profileImage from "../../public/profileImage.png"; // Adjust the path according to your image location

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What Our Customers Say About Us</h2>
      <div className="testimonial-box">
        <img
          src={profileImage}
          alt="Profile"
          className="testimonial-profile-image"
        />
        <div className="testimonial-content">
          <p className="testimonial-title">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur.
          </p>
          <p className="testimonial-name">Joseph Jihan Jo</p>
          <p className="testimonial-company">Jilalal Pharma</p>
        </div>
        <div className="testimonial-arrows">
          <button className="testimonial-arrow-button left-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#084e9e"
              stroke="#084e9e"
              strokeWidth="10"
              transform="rotate(180)"
            >
              <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
            </svg>
          </button>
          <button className="testimonial-arrow-button right-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#084e9e"
              stroke="#084e9e"
              strokeWidth="10"
            >
              <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
