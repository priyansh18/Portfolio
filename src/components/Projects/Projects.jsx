import React, { Component } from "react";

import "./Projects.scss";
import movieTvImage from "../../assets/projects/movieTv.jpeg"
import covid19ProjectImage from "../../assets/projects/covid.png";
import pryfry from "../../assets/projects/pryfry.jpeg"
import hallOfFame from "../../assets/projects/hall.jpeg"
import breakingBad from "../../assets/projects/breakingbad.jpeg"
import photoFrame from "../../assets/projects/photoframe.jpeg"
import burgerBuilder from "../../assets/projects/burger.png"
import Shophut from "../../assets/projects/shophut.png"

class Projects extends Component {
  state = {
    projects: [
      {
        photo: movieTvImage,
        name: "MovieTv Info",
        code: "https://github.com/priyansh18/MovieTv-Info",
        website: "https://movietv-info.web.app/",
        techused: [
          "React.js",
          "Firebase",
          "Redux",
        ],
        started: "June 12, 2020",
      },
      {
        photo: Shophut,
        name: "Shophut",
        code: "https://github.com/priyansh18/Shophut",
        website: "https://shophut.herokuapp.com/",
        techused: [
          "Django",
          "Python",
          "Heroku",
          "HTML",
          "CSS"
        ],
        started: "May 15, 2020",
      },
      {
        photo: covid19ProjectImage,
        name: "Microsoft Covid19 Visualizer",
        code: "https://github.com/priyansh18/Covid-19-Dashboard",
        website: "https://covid-infection-dashboard.herokuapp.com/",
        techused: [
          "Django",
          "Machine learning",
          "Python",
          "Heroku",
          "Chart.js",
        ],
        started: "August 31, 2020",
      },
      {
        photo: pryfry,
        name: "PryFry",
        code: "https://github.com/priyansh18/Resturant_site",
        website: "https://pryfry.herokuapp.com/",
        techused: [
          "Django",
          "Python",
          "Heroku"
        ],
        started: "June 23, 2020",
      },
      {
        photo: hallOfFame,
        name: "Hall of Fame Videos",
        code: "https://github.com/priyansh18/Hall-of-Fame-Vidz",
        website: "https://hall-of-fame-videos.herokuapp.com/",
        techused: [
          "Django",
          "Python",
          "Heroku",
        ],
        started: "July 2, 2020",
      },
      {
        photo: breakingBad,
        name: "Breaking Bad Cast",
        code: "https://github.com/priyansh18/breaking_bad_react",
        website: "https://breakingbad-cast.web.app/",
        techused: [
          "React.js",
          "Firebase",
        ],
        started: "July 10, 2020",
      },
      {
        photo: burgerBuilder,
        name: "Burger Builder",
        code: "https://github.com/priyansh18/burger_builder",
        website: "https://burger-builder-5a5c5.web.app/",
        techused: [
          "React.js",
          "Redux",
          "Firebase",
        ],
        started: "July 19, 2020",
      },
      {
        photo: photoFrame,
        name: "PhotoFrame",
        code: "https://github.com/priyansh18/PhotoFrame-React-Redux",
        website: "https://photoframe-priyansh.web.app/",
        techused: ["Javascript", "React", "Firebase"],
        started: "Jun 8, 2020",
      },
    ],
  };

  render() {
    return (
      <div className="projects-section" id="projects">
        <section>
          <h4>Projects</h4>
        </section>
        <div className="container">
          {this.state.projects.map((project, i) => (
            <div className="project-card" key={100 + i}>
              <div className="pic">
                <img src={project.photo} alt="projectpic" />
                <div className="name">{project.name}</div>
              </div>
              <div className="code">
                <span>code: </span>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.code}
                </a>
              </div>
              <div className="website">
                <span>Website: </span>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.website}
                </a>
              </div>
              <div className="techused">
                <span>Tech used:</span>
                {project.techused.map((tech, j) => (
                  <div className="tech" key={200 + j}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className="start-and-visit">
                <div className="started">
                  <span>Started:</span>
                  {project.started}
                </div>
                <div className="visit">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;