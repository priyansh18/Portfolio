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
         Currently <b>I'm a student from Dr. Akhilesh Das Gupta Institute of Technology & Management</b> persuing B.tech. I'm a creative problem solving enthusiast and love heart building Websites , Beside's engineering , I enjoy reading Books , watching Movies & playing Cricket.
         <p>
         Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps, and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with a calm and focused demeanor. 
         </p>
        </p>
      </div>
    </div>
  );
};

export default ExtraInfo;
