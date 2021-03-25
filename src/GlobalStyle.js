import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *. {
    line-height: 2em;
  }

  .text {
    font-size: 50px;
    margin-top: 0;
    @media (min-width : 992px) {
      font-size: 18px;
    }
  }

  .title {
    color: #ace6d3;
    font-weight: bold;
    font-size: 80px;
    @media (min-width : 992px) {
      font-size: 32px;
    }
  }

  .subtitle {
    text-align: left;
    font-weight: bold;
    color: #747f97;
    font-size: 60px;
    @media (min-width : 992px) {
      font-size: 20px;
    }
  }
`;

export default GlobalStyle;
