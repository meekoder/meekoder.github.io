import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  max-width: 900px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
 .inner {
    @media (min-width : 768px) {
      display: grid;
      grid-template-columns: 1fr;
      width: 80%;
    }
    @media (min-width : 992px) {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: 50px;
    }
  }
`;

const Title = styled.p`
  color: #ace6d3;
  font-size: 30px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #747f97;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  &::before {
    content: '▶';
    margin: 0 10px;
  }
`;

const Selfie = styled.div`
  max-width: 300px;
  align-self: center;
  justify-self: center;
  .img {
    width: 100%;
  }
`;

const StyledP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #ace6d3;
`;

const About = () => {
  return (
    <Main id="about">
      <div className="inner">
        <div>
          <Title>About Me</Title>     
          <StyledP>
          <p>Hello! I'm Meeko.</p>
          <p>I'm a 22 year old software engineer based in the San Francisco Bay Area who has a strong passion for writing clean, efficient and performant code. I enjoy building reactive websites and applications that provide aesthetic and user-friendly experiences.</p>
          <p>While I was a <StyledA target="_blank" href="https://www.alamy.com/airman-meekoly-munoz-363rd-training-squadron-maintenance-management-analysis-student-is-a-native-of-bloomfield-new-jersey-and-represents-international-students-in-the-maintenance-management-analysis-course-at-sheppard-air-force-base-texas-sept-22-2017-these-students-learn-how-to-determine-the-cost-efficiency-of-air-force-maintenance-activities-they-collect-and-analyze-data-to-improve-operations-image222016272.html">data analyst</StyledA> for the US Air Force, I discovered that I loved using software to create robust solutions to practical problems. The opportunity to learn and grow that engineering gives is the reason why I love to code.</p>
            </StyledP>
          <Subtitle>Other things I'm Into</Subtitle>
          <StyledList>
            <ListItem>I've been snowboarding since the age of 10.</ListItem>
            <ListItem>Cars. I hope to one day own a GTR R32.</ListItem>
            <ListItem>I play League of Legends and Mobile Legends.</ListItem>
            <ListItem>I like to learn/try new things. Recently, I picked up skateboarding.</ListItem>
          </StyledList>
        </div>
        <Selfie> 
          <img alt="Meeko Rusdi" src="/selfie.jpg" className="img" />
        </Selfie>
      </div>
    </Main>
  );
};

export default About;
