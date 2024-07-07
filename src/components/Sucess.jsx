import React from "react";
import "./Sucess.css";

const Sucess = () => {
  return (
    <div className="process">
      <h2 className="process__heading">Process of Success</h2>
      <div className="process__boxes">
        <div className="process__box">
          <div className="process__box-number">1</div>
          <p className="process__box-text0">Enroll & Learn</p>
          <p className="process__box-text">
            Enroll to the course & start learning.
          </p>
        </div>
        <div className="process__box">
          <div className="process__box-number">2</div>
          <p className="process__box-text0">Connect & Discuss</p>
          <p className="process__box-text">
            Engage with the community & discuss the problems.
          </p>
        </div>
        <div className="process__box">
          <div className="process__box-number">3</div>
          <p className="process__box-text0">Live Test & Certification</p>
          <p className="process__box-text">
            Sucessfully pass assessments & earn certificate
          </p>
        </div>
        <div className="process__box">
          <div className="process__box-number">4</div>
          <p className="process__box-text0">Utilize & Excel</p>
          <p className="process__box-text">
            Utilize your skills & upscale your pharmacy efficiency
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
