import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 50%;
`;

const Title = styled.p`
  text-align: left;
  font-size: 30px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.p`

`;

const ListItem = styled.li`
  margin-bottom: 10px;
  &::before {
    content: '▶';
    margin: 0 10px;
  }
`;

const Selfie = styled.img`
  height: 40%;
  width: 40%;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled.div`
  width: 55%;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

function About() {
  return (
    <Main>
      <Title>About Me</Title>     
      <StyledDiv>
        <StyledParagraph>
          <Text>Hello! I'm Meeko.</Text>
          <Text>I'm a 22 year old software engineer based in the San Francisco Bay Area who has a strong passion for writing clean, efficient and performant code. I enjoy building reactive websites and applications that provide aesthetic and user-friendly experiences.</Text>
          <Text>While I was a data analyst for the US Air Force, I discovered that I loved using software to create robust solutions to practical problems. The opportunity to learn and grow that engineering gives is the reason why I love to code.</Text>
          <Subtitle>Other things I'm Into</Subtitle>
          <StyledList>
            <ListItem>I've been snowboarding since the age of 10.</ListItem>
            <ListItem>I play League of Legends and Mobile Legends.</ListItem>
            <ListItem>I like to learn/try new things. Recently, I picked up skateboarding.</ListItem>
          </StyledList>
        </StyledParagraph>
        <Selfie src="/selfie.jpg"></Selfie>
      </StyledDiv>
    </Main>
  );
}

export default About;
