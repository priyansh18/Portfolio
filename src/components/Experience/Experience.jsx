
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
              <span>May 2021-Sept 2021</span>
            </div>
            <div className="occupation">
              <span> Web Developer </span>
            </div>
          </div>
          <div className="right">
            <div className="place">
              <span>@</span>Startupstorymedia
            </div>
            <div className="task-list">
              <div className="heading">
                Key responsibilities -
              </div>
              <ul className="list">
                <li>Identify and fix bugs and errors in the website.</li>
                <li>Collaborating with the team to create a user-friendly website.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="experiences">
          <div className="left">
            <div className="date">
              <span>Feb-May 2021</span>
            </div>
            <div className="occupation">
              <span> Web Developer Intern </span>
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
                <li>Deploy and create a website from scratch using Django Framework.</li>
                <li>Developed a User-interactive interface for a better experience.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="experiences">
          <div className="left">
            <div className="date">
              <span>May-Jun 2020</span>
            </div>
            <div className="occupation">
              <span> Web Developer Intern </span>
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
                <li>Deploying and maintaining website using Django backend.</li>
                <li>Developed a Canvas-Whiteboard for online teaching and assessments.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;