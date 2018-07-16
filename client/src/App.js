import React, { Component } from 'react';
import Header from './components/Header.js';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
