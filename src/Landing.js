import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width : 992px) {
    width: 60%;
  }
`;

const Greeting = styled.p`
  user-select: none;
  font-size: 50px;
  margin-bottom: 0;
  color: #AAF0D1;
  @media (min-width : 992px) {
    font-size: 30px;
  }
`;

const Name = styled.p`
  margin: 0;
  font-size: 110px;
  font-weight: bold;
  color: #f3f4f5;
  @media (min-width : 992px) {
    font-size: 80px;
  }
`;

const Intro = styled.p`
  user-select: none;
  font-size: 45px;
  color: #747f97;
  @media (min-width : 992px) {
    font-size: 25px;
  }
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
