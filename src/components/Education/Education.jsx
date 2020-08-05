import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education-section" id="education">
      <section>
        <h4>Education</h4>
      </section>
      <div className="border">
        <div className="container">
          <div className="left">
            <div className="date">
              <span>2017-2021(Expected)</span>
            </div>
            <div className="occupation">
              <span> Bachelors in Technology(Computer Science ) </span>
            </div>
          </div>
          <div className="right">
            <div className="place">Dr Akhilesh Das Gupta Institute of Technology and Management, Delhi</div>
            <div className="task-list">
              <div className="heading list">CGPA - 8.7(Till 6th sem)</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="left">
            <div className="date">
              <span>2015-2016</span>
            </div>
            <div className="occupation">
              <span> 12th(PCM) </span>
            </div>
          </div>
          <div className="right">
            <div className="place">D.A.V Public School,Pilkhuwa</div>
            <div className="task-list">
              <div className="heading list">Percentage - 84%</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="left">
            <div className="date">
              <span>2013-2014</span>
            </div>
            <div className="occupation">
              <span> 10th </span>
            </div>
          </div>
          <div className="right">
            <div className="place">D.A.V Public School,Pilkhuwa</div>
            <div className="task-list">
              <div className="heading list">CGPA - 8.8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
