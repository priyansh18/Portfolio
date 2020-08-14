import React from "react";
import "./App.scss";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Footer from './components/Footer/Footer';
import WorkStats from './components/WorkStats/WorkStats';
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <ExtraInfo />
      <WorkStats/>
      <Education />
      <Skills />
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
