import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *. {
    line-height: 2em;
  }

  .text {
    font-size: 30px;
    margin: 0;
    @media (min-width : 992px) {
      font-size: 18px;
    }
  }

  .title {
    margin: 100px 0 0 0;
    color: #AAF0D1;
    font-weight: bold;
    font-size: 80px;
    @media (min-width : 992px) {
      font-size: 32px;
    }
  }

  .subtitle {
    margin-bottom: 10px;
    font-weight: bold;
    color: #ACE6D3;
    font-size: 50px;
    @media (min-width : 992px) {
      font-size: 20px;
    }
  }

  .list {
    list-style-type: none;
  }

  .arrow {
    margin-bottom: 10px;
    &::before {
      content: '▶';
      color: #ace6d3;
      margin: 30px;
      @media (min-width : 992px) {
        margin: 0 10px;
      }
    }
  }

  .listItem {
    margin-bottom: 10px;
    &::before {
      content: '♦';
      color: #ace6d3;
      margin: 50px;
      @media (min-width : 992px) {
        margin: 0 10px;
      }
    }
  }
`;

export default GlobalStyle;
