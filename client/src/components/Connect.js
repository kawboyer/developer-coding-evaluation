import React from 'react';
import styled from 'styled-components';
import '../css/Connect.css';

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

const Connect = () => (
  <article className="background-connect">     
    <Row>
      <Column xs="12" md="7">
        <h4>Connect With Us</h4>
      </Column>
    </Row>
    <Row>
      <Column xs="12" md="5">
        <h6>For inqueries, please contact:</h6>
      </Column>
    </Row> 
  </article>
);

export default Connect;
