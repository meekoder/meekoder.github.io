import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 50%;
  height: 100vh;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  color: #ace6d3;
  font-size: 50px;
  font-weight: bold;
`;

const Contact = () => {
  return (
    <Main id="contact">
      <StyledDiv>   
        <Title>Get In Touch</Title>
      </StyledDiv>
    </Main>
  );
};

export default Contact;
