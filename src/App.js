import React from 'react';
import './App.scss';
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import ExtraInfo from './components/ExtraInfo/ExtraInfo'

function App() {
  return (
    <div className="App">
      <PersonalInfo/>
      <ExtraInfo/>
    </div>
  );
}

export default App;
