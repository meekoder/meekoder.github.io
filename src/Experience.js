import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 90%;
  height: 100vh;
  @media (min-width : 992px) {
    width: 50%;
  }
  p.text {
    font-weight: bold;
    margin: 0;
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

const NavCompany = styled.p`
  margin: 0;
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

const Date = styled.p`
  font-size: 25px;
  @media (min-width: 992px) {
    font-size: 14px;
  }
`;
      
const Experience = () => {
  return (
    <Main id="experience">
      <p className="title">Where I've Worked</p>
      <Nav>
        <NavCompany>US Air Force</NavCompany>
        <NavBar />
      </Nav>
      <p className="text">Maintenance Data Analyst</p>
      <Date>May 2017 — December 2019</Date>
      <ul className="list text">
        <li className="arrow">Managed Maintenance Information Systems that were critical to over 1K+ employees and $8.4B worth of aircraft</li>
        <li className="arrow">Performed Maintenance Information System database management and ensured aircraft data accuracy</li>
        <li className="arrow">Provided daily/weekly/monthly maintenance metric data validation, reporting, and trend analysis to leadership</li>
        <li className="arrow">Spearheaded the data integrity program responsible for leading a team of over 170+ personnel</li>
      </ul>
    </Main>
  );
}

export default Experience;
