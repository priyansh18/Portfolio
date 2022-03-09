import React, { Component } from "react";
import {ReactComponent as Github} from '../../assets/socialMedia/github.svg'
import {ReactComponent as Facebook} from '../../assets/socialMedia/facebook.svg'
import {ReactComponent as Twitter} from '../../assets/socialMedia/twitter.svg'
import {ReactComponent as Linkedin} from '../../assets/socialMedia/linkedin.svg'
import {ReactComponent as Medium} from '../../assets/socialMedia/medium.svg'
import "./PersonalInfo.scss";


class PersonalInfo extends Component {
  state = {
    githubLink: "https://github.com/priyansh18",
    facebookLink: "https://www.facebook.com/priyansh18singhal",
    twitterLink: "https://twitter.com/18_priyansh",
    linkedinLink: "https://www.linkedin.com/in/priyanshsinghal",
    instagramLink:"https://www.instagram.com/18_priyansh/",
    mediumLink: "https://medium.com/@singhalpriyansh58",

    about: [
      {
        name: "Priyansh Singhal",
        value: "Software Developer",
      },
      {
        name: "Email:",
        value: "singhalpriyansh58@gmail.com",
      },
      {
        name: "Address:",
        value: "Mansarovar Park,New-Delhi-110032​",
      },
    ],
  };
  render() {
    return (
      <div className="personal-info" id="about">
        <div className="photo-and-info">
          <div className="container">
            <div className="photo"></div>
            <div className="info">
              <div className="info-details">
                {this.state.about.map((details, i) => (
                  <div className="details" key={i}>
                    <div className="name">{details.name}</div>
                    {details.name === "Email:" ? (
                      <a href={`mailto:${details.value}`} className="email value effect">
                        {details.value}
                      </a>
                    ) : (
                      <div className="value">{details.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div className="container">
            <div className="links">
              <a href={this.state.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="github" />
              </a>
              <a
                href={this.state.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
    <Facebook />
              </a>
              <a href={this.state.twitterLink} target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
              <a href={this.state.linkedinLink} target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href={this.state.mediumLink} target="_blank" rel="noopener noreferrer">
                <Medium/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
