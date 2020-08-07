import React from "react";
import "./App.scss";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <ExtraInfo />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
