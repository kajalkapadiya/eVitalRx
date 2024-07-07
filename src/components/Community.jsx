import React from "react";
import "./Community.css";
import test from "../../public/test.png";
import certi from "../../public/certi.png";

const Community = () => {
  return (
    <div className="community_container">
      <div className="circle-container">
        <svg className="circle-svg" overflow="visible" viewBox="0 0 407 407">
          {/*  Hide overflow of outer circle only. */}
          <defs>
            <clipPath id="outerCircleClip">
              <rect x="0" y="0" width="407" height="407" />
            </clipPath>
          </defs>
          <g clipPath="url(#outerCircleClip)">
            <circle cx="203.5" cy="203.5" r="220" className="outer-circle" />
          </g>
          <circle cx="203.5" cy="203.5" r="170" className="middle-circle" />
          <circle cx="203.5" cy="203.5" r="120" className="inner-circle" />
          <text
            x="50%"
            y="25%"
            textAnchor="middle"
            dy=".3em"
            className="circle-text"
            fill="#fff"
          >
            <tspan x="50%" dy="1.2em" className="circle-number">
              250+
            </tspan>
            <tspan x="50%" dy="1.2em" className="circle-label">
              Learners
            </tspan>
          </text>
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dy=".3em"
            className="circle-text"
            fill="#fff"
          >
            <tspan x="50%" dy="1.2em" className="circle-number">
              100+
            </tspan>
            <tspan x="50%" dy="1.2em" className="circle-label-alt">
              Certified
            </tspan>
            <tspan x="50%" dy="1.2em" className="circle-label-alt">
              Pharmacists
            </tspan>
          </text>
          <image
            className="img_adjust"
            href={test}
            x="-70"
            y="2"
            height="287.83"
            width="231.91"
          />
          <image
            className="img_adjust"
            href={certi}
            x="300"
            y="170"
            height="180"
            width="182"
          />
          <image
            className="img_adjust"
            href="x1.png"
            x="12"
            y="1"
            height="60"
            width="60"
          />
          <image
            className="img_adjust"
            href="x2.png"
            x="-100"
            y="100"
            height="59"
            width="59"
          />
          <image
            className="img_adjust"
            href="x3.png"
            x="-150"
            y="200"
            height="103"
            width="103"
          />
          <image
            className="img_adjust"
            href="x4.png"
            x="70"
            y="250"
            height="89"
            width="89"
          />
          <image
            className="img_adjust"
            href="x5.png"
            x="-40"
            y="330"
            height="54"
            width="54"
          />
          <image
            className="img_adjust"
            href="x6.png"
            x="170"
            y="20"
            height="61.84"
            width="61.84"
          />
          <image
            className="img_adjust"
            href="x7.png"
            x="270"
            y="100"
            height="49.63"
            width="49.63"
          />
          <image
            className="img_adjust"
            href="x8.png"
            x="320"
            y="30"
            height="67.19"
            width="67.19"
          />
          <image
            className="img_adjust"
            href="x9.png"
            x="250"
            y="350"
            height="44"
            width="44"
          />
          <image
            className="img_adjust"
            href="x10.png"
            x="470"
            y="60"
            height="80"
            width="80"
          />
          <image
            className="img_adjust"
            href="x11.png"
            x="450"
            y="310"
            height="103"
            width="103"
          />
          <image
            className="img_adjust"
            href="x12.png"
            x="520"
            y="200"
            height="61"
            width="61"
          />
          <image
            className="img_adjust"
            href="profileImage.png"
            x="60"
            y="360"
            height="30"
            width="30"
          />
        </svg>
      </div>
    </div>
  );
};

export default Community;
