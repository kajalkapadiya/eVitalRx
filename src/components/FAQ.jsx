import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const toggleHandler = (toggleFunc) => {
    toggleFunc((prev) => !prev);
  };

  return (
    <div className="faq-outer-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        <div className="faq-left">
          <img src="OBJECTS.png" alt="FAQ Image" className="faq-image" />
        </div>
        <div className="faq-right">
          <ol className="faq-list">
            <li className="faq-point">
              <div className="faq-header">
                <h3 className="faq-title">What is eCademy?</h3>
                <button
                  className="faq-toggle"
                  onClick={() => toggleHandler(setToggle1)}
                >
                  {toggle1 ? "-" : "+"}
                </button>
              </div>
              {toggle1 && (
                <p className="faq-text">
                  Lorem ipsum dolor sit amet consectetur. Non elit ut cras diam
                  at. Aliquam purus tortor facilisi libero maecenas rhoncus
                  massa tellus.
                </p>
              )}
            </li>
            <li className="faq-point">
              <div className="faq-header">
                <h3 className="faq-title">Why are these courses necessary?</h3>
                <button
                  className="faq-toggle"
                  onClick={() => toggleHandler(setToggle2)}
                >
                  {toggle2 ? "-" : "+"}
                </button>
              </div>
              {toggle2 && (
                <p className="faq-text">
                  Lorem ipsum dolor sit amet consectetur. Non elit ut cras diam
                  at. Aliquam purus tortor facilisi libero maecenas rhoncus
                  massa tellus.
                </p>
              )}
            </li>
            <li className="faq-point">
              <div className="faq-header">
                <h3 className="faq-title">What will I get through these?</h3>
                <button
                  className="faq-toggle"
                  onClick={() => toggleHandler(setToggle3)}
                >
                  {toggle3 ? "-" : "+"}
                </button>
              </div>
              {toggle3 && (
                <p className="faq-text">
                  Lorem ipsum dolor sit amet consectetur. Non elit ut cras diam
                  at. Aliquam purus tortor facilisi libero maecenas rhoncus
                  massa tellus.
                </p>
              )}
            </li>
            <li className="faq-point">
              <div className="faq-header">
                <h3 className="faq-title">How will I get my certificate?</h3>
                <button
                  className="faq-toggle"
                  onClick={() => toggleHandler(setToggle4)}
                >
                  {toggle4 ? "-" : "+"}
                </button>
              </div>
              {toggle4 && (
                <p className="faq-text">
                  Lorem ipsum dolor sit amet consectetur. Non elit ut cras diam
                  at. Aliquam purus tortor facilisi libero maecenas rhoncus
                  massa tellus.
                </p>
              )}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
