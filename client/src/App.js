import React, { Component } from 'react';
import Hero from './components/Hero.js';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default App;
