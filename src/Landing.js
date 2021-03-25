import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width : 992px) {
    width: 50%;
  }
`;

const Greeting = styled.p`
  user-select: none;
  font-size: 30px; 
  font-size: clamp(20px, 8vw, 40px);
  margin-bottom: 0;
  color: #ace6d3;
`;

const Name = styled.p`
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: bold;
  color: #f3f4f5;
`;

const Intro = styled.p`
  user-select: none;
  font-size: clamp(25px, 5vw, 32px);
  color: #747f97;
`;

const Landing = () => {
  return (
    <StyledDiv>
      <Greeting>Hi, my name is</Greeting>     
      <Name>Meeko Rusdi.</Name>
      <Intro>I'm a software engineer.</Intro>
    </StyledDiv>
  );
};

export default Landing;
