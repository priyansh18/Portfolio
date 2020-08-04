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
          I enjoy developing Web Applications, which would assist the people around me to see new insight into the
          world; Whether it is figuring out the data or to drive a new concept out of it or to build an already existing
          app that is changing the world. I enjoy all kinds of creating plus solving the problems that come with the
          app.
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
