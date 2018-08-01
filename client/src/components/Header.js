import React from 'react';
import hero from '../assets/images/pic-hero.png';
import logo from '../assets/logos/logo-cardinal.png';
import '../css/Header.css';

const Header = () => (
  <header>
    <div className="grid-container-header">
      
      <img id="image-header" src={hero} alt="" /> 
      <img id="logo-header" src={logo} alt="Company Logo" />
      <h1 className="title-header"><span>Enjoy the proven success of our experience.</span></h1>

    </div>   
  </header>
);

export default Header;