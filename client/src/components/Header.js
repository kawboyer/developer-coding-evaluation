import React from 'react';
import hero from '../assets/images/pic-hero.png';
import logo from '../assets/logos/logo-cardinal.png';
// import styled from 'styled-components';
import '../css/Header.css';

// // Define Row
// const Row = styled.div`
//   &::after {
//     content: "";
//     clear: both;
//     display: table;
//   }
// `;

// function getWidthString(span) {
//   if (!span) return;

//   let width = span / 12 * 100;
//   return `width: ${width}%`;
// }

// // Define Column
// const Column = styled.div`
//   float: left;

//   ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

//   @media only screen and (min-width: 768px) {
//     ${({ md }) => md && getWidthString(md)}; 
//   }
// `;

const Header = () => (
  <header>   
    <div>
      <img id="background-header" src={hero} alt="" /> 
      <div>
        <img id="logo-cardinal" src={logo} alt="Company Logo" />
      </div>
    </div>
    <div>
      <h1 className="title"><span>Enjoy the proven success of our experience.</span></h1>
    </div>
  </header>
);

export default Header;