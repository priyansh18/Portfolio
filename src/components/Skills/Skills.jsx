import React, { Component } from "react";
import "./Skills.scss";

class Skills extends Component {
  state = {
    skills: [
      {
        name: "Python",
        level: "Intermediate",
      },
      {
        name: "C++",
        level: "Intermediate",
      },
      {
        name: "Django",
        level: "Intermediate",
      },
      {
        name: "Javascript",
        level: "Intermediate",
      },
      {
        name: "React.js",
        level: "Intermediate",
      },
      {
        name: "SQL",
        level: "Intermediate",
      },
      {
        name: "Redux",
        level: "Intermediate",
      },
      {
        name: "React-Native",
        level: "Beginner",
      },

      {
        name: "Figma",
        level: "Beginner",
      },
    ],
  };

  render() {
    return (
      <div className="skills-section" id="skills">
        <section>
          <h4>Skills</h4>
        </section>
        <div className="container">
          {this.state.skills.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="name">{skill.name}</div>
              <div className="level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
