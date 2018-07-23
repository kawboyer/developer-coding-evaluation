import React from 'react';
// import styled from 'styled-components';
import twitter from '../assets/icons/icon-twitter.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import google from '../assets/icons/icon-g+.svg';
import '../css/Footer.css';

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

// const Column = styled.div`
//   float: left;

//   ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

//   @media only screen and (min-width: 768px) {
//     ${({ md }) => md && getWidthString(md)}; 
//   }
// `;

const Footer = () => (
  <footer>
    <div class="content">
      <div>
        <div className="copyright">&copy; 2016 Cardinal Solutions. All rights reserved.</div>
      </div>
      <div id="logo">
        <img id="logo-twitter" src={twitter} alt="Twitter Logo" width="20px"/>
        <img id="logo-facebook" src={facebook} alt="Facebook Logo" width="10px"/>
        <img id="logo-google" src={google} alt="Google Plus Logo" width="20px"/>
      </div>
    </div>
  </footer>
);

export default Footer;