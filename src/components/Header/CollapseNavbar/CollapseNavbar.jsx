import React from "react";
import "./CollapseNavbar.scss";

const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div id="myNav" className="overlay" style={{ height }}>
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content" onClick={() => showNavbar(false)}>
        <a href="#about">About Me</a>
        <a href="#workstats">Work Stats</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#experience">Experience</a>
      </div>
    </div>
  );
};

export default CollapsedNavbar;