import React from 'react';
import styled from 'styled-components';

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

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export default Row;