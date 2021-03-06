import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .text {
    font-size: 30px;
    line-height: 1.5em;
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
    text-decoration: none;
    font-weight: bold;
    color: #ACE6D3;
    font-size: 50px;
    @media (min-width : 992px) {
      font-size: 20px;
    }
  }

  .list {
    list-style-position: outside;
    list-style-type: none;
    margin-bottom: 50px;
    text-indent: -2.5em;
    @media (min-width : 992px) {
      margin: 0 10px;
      text-indent: -1.6em;
    }
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

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
