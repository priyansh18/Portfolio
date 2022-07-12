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
        name: "C/C++",
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
        name: "ReactJs",
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
        name: "Wordpress",
        level: "Intermediate",
      },
      {
        name: "P5.js",
        level: "Beginner",
      },
      {
        name: "PHP",
        level: "Beginner",
      },
      {
        name: "Git & Github",
        level: "Intermediate",
      },
      {
        name: "Flask",
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
              {/* <div className="level">{skill.level}</div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
