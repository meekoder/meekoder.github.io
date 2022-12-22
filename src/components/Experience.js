import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import AirForce from './experience/AirForce';

const Main = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
 .inner {
    width: 90%;
    @media (min-width : 992px) {
      height: 100vh;
      width: 80%;
    }
  }
  p.text {
    font-weight: bold;
    margin: 0;
  }
  .subtitle {
    font-weight: normal;
  }
`;

const Nav = styled.div`
  font-size: 40px;
  color: #a5edd5;
  margin-top: 0;
  @media (min-width : 992px) {
    font-size: 20px;
  }
`;

const NavBar = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 5px;
  border-radius: 4px;
  background: #747f97;
  margin-bottom: 20px;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  @media (min-width: 992px) {
    top: auto;
    bottom: 0;
    height: 2px;
  }
`;

const Experience = () => {
  return (
    <Main id="experience">
      <div className="inner">
        <ScrollAnimation animateIn="fadeInDown">
          <p className="title">Where I've Worked</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Nav>
            <p className="subtitle">US Air Force</p>
            <NavBar />
          </Nav>
        </ScrollAnimation>
        <AirForce />
      </div>
    </Main>
  );
};

export default Experience;
