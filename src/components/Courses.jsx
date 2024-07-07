import React from "react";
import "./Courses.css";
import checkIcon from "../assets/checkIcon.svg"; // Path to your check icon
import rightArrow from "../assets/rightArrow.svg"; // Path to your right arrow icon

const Courses = () => {
  return (
    <div className="courses">
      <h2 className="courses__heading">Our Courses</h2>
      <p className="courses__description">
        Browse through our meticulously crafted courses designed to empower your
        pharmacy efficiency with practical knowledge and expertise.
      </p>
      <div className="courses__buttons">
        <button className="courses__button0">Retail Pharmacy Operations</button>
        <button className="courses__button">2 More Courses Upcoming</button>
      </div>
      <div className="courses__content">
        <div className="courses__left">
          <h3 className="courses__subheading">Retail Pharmacy Operations</h3>
          <ul className="courses__list">
            <li>
              <img src={checkIcon} alt="Check" className="courses__icon" />
              Learn Pharmacy Operations in eVitalRx
            </li>
            <li>
              <img src={checkIcon} alt="Check" className="courses__icon" />
              Master Inventory Management, CRM, Sales and Purchase Operations
            </li>
            <li>
              <img src={checkIcon} alt="Check" className="courses__icon" />
              Improve Customer, Distributor and Payments Management
            </li>
            <li>
              <img src={checkIcon} alt="Check" className="courses__icon" />
              Optimize Pharmacy Operations using eVitalRx Software
            </li>
          </ul>
          <a href="#" className="courses__enroll">
            Enroll Now
            <img
              style={{ width: "18.35px", height: "24px" }}
              src={rightArrow}
              alt="Right Arrow"
            />
          </a>
        </div>
        <div className="courses__right">
          <img src="courses.png" alt="Course" className="courses__image" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
