import React from 'react';
import hero from '../assets/images/pic-hero.png';
import logo from '../assets/logos/logo-cardinal.png';
import styled from 'styled-components';
import '../css/Hero.css';

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%`;
}

const Column = styled.div`
  float: left;

  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}; 
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }
`;

const Hero = () => (
  <header>     
    <Row>
      <img id="background-hero" src={hero} alt="" />
      <Column xs="12" sm="4" md="2">
        <logo id="logo" src={logo} alt="Company Logo" />
      </Column>
    </Row>
    <Row>
      <Column xs="12" sm="8" md="10">
        <h1 className="caption"><span>Enjoy the proven success of our experience.</span></h1>
      </Column>
    </Row> 
  </header>
);

export default Hero;