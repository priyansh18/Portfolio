
import React from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <section>
        <h4>Experience</h4>
      </section>
      <div className="container">
        <div class="experiences">
          <div className="left">
            <div className="date">
              <span>May-Jun 2020</span>
            </div>
            <div className="occupation">
              <span> Web Developer </span>
            </div>
          </div>
          <div className="right">
            <div className="place">
              <span>@</span>JDMR ISCHOOL
            </div>
            <div className="task-list">
              <div className="heading">
                Key responsibilities during the internship were -
              </div>
              <ul className="list">
                <li>Changes in WebPage</li>
                <li>Created Teaching board using P5.js </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="experiences">
          <div className="left">
            <div className="date">
              <span>April-May 2021</span>
            </div>
            <div className="occupation">
              <span> Web Developer </span>
            </div>
          </div>
          <div className="right">
            <div className="place">
              <span>@</span>Friends
            </div>
            <div className="task-list">
              <div className="heading">
                Key responsibilities during the internship were -
              </div>
              <ul className="list">
                <li>Designing of whole Webpage. </li>
                <li>Handle website for all screens.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;