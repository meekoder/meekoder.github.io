import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import styled from 'styled-components';
import Landing from './components/Landing';
import Nav from './components/nav/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/contact/Contact';
import GlobalStyle from './GlobalStyle';
import Burger from './components/nav/burger/Burger';
import Menu from './components/nav/menu/Menu';

const Main = styled.div`
  background-color: #2f343f;
  min-height: 100vh;
  color: white;
  .burger {
    @media (min-width : 992px) {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  
  return (
    <Main>
      <GlobalStyle />
      <div className="burger" ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
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
