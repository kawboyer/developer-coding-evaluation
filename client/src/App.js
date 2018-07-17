import React, { Component } from 'react';
import Hero from './components/Hero.js';
import Gojo from './components/Gojo.js';
import FifthThird from './components/FifthThird.js';
import Chhn from './components/Chhn.js';
import './App.css';


class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <Hero />
        <Gojo />
        <FifthThird />
        <Chhn />
      </div>
    );
  }
}

export default App;
