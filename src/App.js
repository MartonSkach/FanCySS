import React, { Component } from 'react';
import SectionOne from './components/sections/Section-1';
import SectionTwo from './components/sections/Section-2';
import SectionThree from './components/sections/Section-3';
import SectionFour from './components/sections/Section-4';
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SectionOne />
        <div className="separator"></div>
        <SectionTwo />
        <div className="separator"></div>
        <SectionThree />
        <div className="separator"></div>
        <SectionFour />
      </div>
    );
  }
}

export default App;
