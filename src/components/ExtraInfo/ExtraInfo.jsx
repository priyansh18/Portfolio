import React from "react";
import "./ExtraInfo.scss";

const ExtraInfo = () => {
  return (
    <div className="extra-info">
      <div className="container">
        <h3>
          Hello<span>!</span> I<span>'</span>m Priyansh Singhal<span>.</span>
        </h3>
        <p className="break-words">I'm a Full Stack Developer, I'm a quick learner and can transform ideas into webpages.</p>
        <p className="break-words">
         Currently a student from <b> Dr. Akhilesh Das Gupta Institute of Technology & Management</b> persuing B.tech. I'm a creative problem solving enthusiast and love heart building Websites.
         </p>
         <p className="break-words last">
         Logical and results-driven Web Developer dedicated to build and optimize user-focused websites for customers with various business objectives.Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with a calm and focused demeanor. 
         </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
