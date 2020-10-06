import React from "react";
import "./App.scss";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import WorkStats from "./components/WorkStats/WorkStats";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />

      <PersonalInfo />
      <ExtraInfo />
      <WorkStats />
      <Education />
      <Skills />
      <Projects/>
      <Experience />
      <label className="resume-info">To Know More --- <a href="Resume.pdf" target="_blank"><button className=" resume btn btn-secondary">Download Resume</button></a></label>
      <Footer />
      <a href="#about" className="bottom-right-float">&uarr;</a>
    </div>
  );
}

export default App;
