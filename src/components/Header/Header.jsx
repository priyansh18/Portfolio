import React from "react";
import CollapsedNavbar from "./CollapseNavbar/CollapseNavbar";
import "./Header.scss";

class Header extends React.Component {
  state = {
    isCollapsedNavOpen: false,
    height: 0,
    activeLink: "about",
  };

  showNavbar = (val) => {
    const obj = {
      isCollapsedNavOpen: val,
      height: val ? 100 : 0,
    };
    this.setState(obj);
  };

  handleActiveLink = (item) => {
    this.setState({ activeLink: item });
  };

  render() {
    const { activeLink,height } = this.state;
    return (
      <header>
        <div className="parent-name">
          <div className="name">Priyansh Singhal</div>
        </div>
        <div className="navbar">
          <a
            href="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => this.handleActiveLink("about")}
          >
            About Me
          </a>
          <a
            href="#workstats"
            className={activeLink === "workstats" ? "active" : ""}
            onClick={() => this.handleActiveLink("workstats")}
          >
            Work Stats
          </a>
          <a
            href="#education"
            className={activeLink === "education" ? "active" : ""}
            onClick={() => this.handleActiveLink("education")}
          >
            Education
          </a>
          <a
            href="#skills"
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => this.handleActiveLink("skills")}
          >
            Skills
          </a> 
          <a
            href="#projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => this.handleActiveLink("projects")}
          >
            Projects
          </a>
          <a
            href="#blogs"
            className={activeLink === "blogs" ? "active" : ""}
            onClick={() => this.handleActiveLink("blogs")}
          >
            Blogs
          </a>
          <a
            href="#experience"
            className={activeLink === "experience" ? "active" : ""}
            onClick={() => this.handleActiveLink("experience")}
          >
            Experience
          </a>
        </div>
        <div className="navbar-collapse" onClick={() => this.showNavbar(true)}>
          &#9776;
        </div>
        <CollapsedNavbar showNavbar={this.showNavbar} height={`${height}%`} />
      </header>
    );
  }
}

export default Header;
