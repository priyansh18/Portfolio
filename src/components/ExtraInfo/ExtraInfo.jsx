import React from "react";
import "./ExtraInfo.scss";

const ExtraInfo = () => {
  return (
    <div className="extra-info">
      <div className="container">
        <h3>
          Hello<span>!</span> I<span>'</span>m Priyansh Singhal<span>.</span>
        </h3>
        <p className="break-words">I'm a Full Stack Developer,I'm a quick learner and can transform ideas into webpages. </p>
        <p className="break-words last">
          I enjoy building websites . 
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
