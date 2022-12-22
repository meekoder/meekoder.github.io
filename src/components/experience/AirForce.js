import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const Date = styled.p`
  font-size: 25px;
  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const AirForce = () => {
  return (
    <div>
    <ScrollAnimation animateIn="fadeInUp">
      <p className="text">Maintenance Data Analyst</p>
      <Date>May 2017 — December 2019</Date>
      <ul className="list text">
        <li className="arrow">Managed Maintenance Information Systems that were critical to over 1K+ employees and $8.4B worth of aircraft</li>
        <li className="arrow">Spearheaded the data integrity program and was responsible for leading a team of over 170+ personnel</li>
        <li className="arrow">Performed Maintenance Information System database management to ensure aircraft data accuracy</li>
        <li className="arrow">Provided daily/weekly/monthly maintenance metric data validation, reporting, and trend analysis to leadership</li>
      </ul>
    </ScrollAnimation>
    </div>
  );
};

export default AirForce;
