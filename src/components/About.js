import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const Main = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
 .inner {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    width: 90%;
    @media (min-width : 992px) {
      height: 100vh;
      width: 80%;
      grid-template-columns: 4fr 2fr;
      gap: 70px;
    }
  }

  p {
    margin: 25px 0px 0px 0px;
    @media (min-width : 992px) {
      margin-bottom: 5px;
    }
  }
`;

const Selfie = styled.div`
  align-self: center;
  .img {
    width: 100%;
  }
  @media (min-width : 992px) {
    max-width: 400px;
  }
`;

const StyledP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #ace6d3;
`;

const About = () => {
  const getAnimation = () => {
    const width = Math.max(window.screen.width, window.innerWidth);
    return width < 992 ? 'fadeInUp' : 'fadeInRight';
  };

  return (
    <Main id="about">
      <div className="inner">
        <div>
          <ScrollAnimation animateIn="fadeInDown">
            <p className="title">About Me</p>     
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <StyledP className="text">
            <p>Hello! I'm Meeko.</p>
            <p>I'm a 22 year old software engineer based in the San Francisco Bay Area who has a strong passion for writing clean, efficient and performant code. I enjoy building reactive websites and applications that provide aesthetic and user-friendly experiences.</p>
            <p>While I was a <StyledA target="_blank" href="https://www.alamy.com/airman-meekoly-munoz-363rd-training-squadron-maintenance-management-analysis-student-is-a-native-of-bloomfield-new-jersey-and-represents-international-students-in-the-maintenance-management-analysis-course-at-sheppard-air-force-base-texas-sept-22-2017-these-students-learn-how-to-determine-the-cost-efficiency-of-air-force-maintenance-activities-they-collect-and-analyze-data-to-improve-operations-image222016272.html">data analyst</StyledA> for the US Air Force, I discovered that I enjoy using software to create robust solutions to practical problems. I love that engineering provides the continuous opportunity to learn and grow.</p>
          </StyledP>
          <p className="subtitle">Other things I'm Into</p>
          <ul className="list text">
            <li className="listItem">I've been snowboarding since the age of 10</li>
            <li className="listItem">Cars! I hope to one day own a GTR R32</li>
            <li className="listItem">I play League of Legends and Mobile Legends</li>
          </ul>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn={getAnimation()}>
          <Selfie> 
            <img alt="Meeko Rusdi" src="/images/selfie.jpg" className="img" />
          </Selfie>
        </ScrollAnimation>
      </div>
    </Main>
  );
};

export default About;
