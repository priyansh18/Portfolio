import React from 'react';
import './App.scss';
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import ExtraInfo from './components/ExtraInfo/ExtraInfo'
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <PersonalInfo/>
      <ExtraInfo/>
      <Education/>
    </div>
  );
}

export default App;
