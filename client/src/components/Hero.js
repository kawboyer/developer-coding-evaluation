import React from 'react';
import hero from '../assets/images/pic-hero.png';
import logo from '../assets/logos/logo-cardinal.png';
import '../css/Hero.css';

const Hero = () => (
  <div> 
    <img src={hero} width="100%" />
    <img id="logo" src={logo} />
    <h1 className="caption">
      Enjoy the proven success of our experience.
    </h1>

  </div>
);

export default Hero;