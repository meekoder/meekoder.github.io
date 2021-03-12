import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Greeting = styled.p`
 font-size: 20px; 
 margin-bottom: 0;
`;

const Name = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
`;

const Intro = styled.p`
  font-size: 20px;
`;

function Landing() {
  return (
    <StyledDiv>
      <Greeting>Hi, my name is</Greeting>     
      <Name>Meeko Rusdi.</Name>
      <Intro>I'm a software engineer.</Intro>
    </StyledDiv>
  );
}

export default Landing;
