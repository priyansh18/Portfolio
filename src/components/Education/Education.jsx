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
              <span>2021-Present</span>
            </div>
            <div className="occupation">
              <span> M.Tech(CSE)</span>
            </div>
          </div>
          <div className="right">
            <div className="place">Netaji Subhas University of Technology(NSIT)</div>
            {/* <div className="task-list">
              <div className="heading list">Percentage - 84%</div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="left">
            <div className="date">
              <span>2017-2021</span>
            </div>
            <div className="occupation">
              <span> B.Tech (CSE) </span>
            </div>
          </div>
          <div className="right">
            <div className="place">
              Dr Akhilesh Das Gupta Institute of Technology and Management,
              Delhi
            </div>
            <div className="task-list">
              <div className="heading list">CGPA - 8.78</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
