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

// export default function MyApp(props) {
//   return (
//     <div>
//       <Row>
//         <Column xs="12" sm="6" md="8">
//         md: 8 - sm: 6 - xs: 12
//         </Column>
//         <Column xs="6" md="4">
//         md: 4 - xs: 6
//         </Column>
//       </Row>
//     </div>
//   );
// }

export default Grid;