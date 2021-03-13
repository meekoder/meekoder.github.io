import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 90vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Greeting = styled.p`
  user-select: none;
  font-size: 30px; 
  margin-bottom: 0;
  color: #ace6d3;
`;

const Name = styled.p`
  margin: 0;
  font-size: 80px;
  font-weight: bold;
  color: #f3f4f5;
`;

const Intro = styled.p`
  user-select: none;
  font-size: 25px;
  color: #747f97;
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
