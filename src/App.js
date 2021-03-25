import React from 'react';
import styled from 'styled-components';
import Landing from './Landing';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import GlobalStyle from './GlobalStyle';

const Main = styled.div`
  background-color: #2f343f;
  min-height: 100vh;
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <Nav />
      <Content>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Content>
    </Main>
  );
};

export default App;
