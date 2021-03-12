import React from 'react';
import styled from 'styled-components';
import Landing from './Landing';
import Nav from './Nav';
import About from './About';

const Main = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`

function App() {
  return (
    <Main>
      <Nav />
      <Landing />
      <About />
    </Main>
  );
}

export default App;
