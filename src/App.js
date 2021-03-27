import React from 'react';
import styled from 'styled-components';
import Landing from './components/Landing';
import Nav from './components/nav/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/contact/Contact';
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
