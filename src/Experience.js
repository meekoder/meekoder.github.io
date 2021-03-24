import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  @media only screen and (min-width : 768px) {
    width: 90%;
  }
  @media only screen and (min-width : 992px) {
    width: 50%;
  }
  height: 100vh;
`;

const Title = styled.p`
  color: #ace6d3;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
`;

const Experience = () => {
  return (
    <Main id="experience">
      <Title>
        Where I've Worked
      </Title>
    </Main>
  );
}

export default Experience;
