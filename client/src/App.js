import React, { Component } from 'react';
import Header from './components/Header.js';
import Services from './components/Services.js';
import Clients from './components/Clients.js';
// import Gojo from './components/Gojo.js';
// import FifthThird from './components/FifthThird.js';
// import Chhn from './components/Chhn.js';
// import Connect from './components/Connect.js';
import Footer from './components/Footer.js';
import './App.css';


class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Services />
        {/* <Clients /> */}
        {/* <Gojo /> */}
        {/* <FifthThird /> */}
        {/* <Chhn /> */}
        {/* <Connect /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
