import React from 'react';
import styled from 'styled-components';

const Greeting = styled.p`
 font-size: 20px; 
 text-align: left;
`;

const Name = styled.p`
  font-size: 50px;
  text-align: left;
  font-weight: bold;
`
const Intro = styled.p`
  font-size: 20px;
  text-align: left;
`
function Landing() {
  return (
    <div>
      <Greeting>Hi, my name is</Greeting>     
      <Name>Meeko Rusdi.</Name>
      <Intro>I'm a software engineer based in the San Francisco Bay Area.</Intro>
    </div>
  );
}

export default Landing;
