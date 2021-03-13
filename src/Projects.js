import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 50%;
  height: 100vh;
`;

const Title = styled.p`
  color: #ace6d3;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
`;

const Picture = styled.img`
  height: 60%;
  width: 60%;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #747f97;
`;

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  return (
    <Main id="projects">
      <Title>Some of My Projects</Title>
      <StyledDiv>
        <Picture alt="spotted landing page" src="/spotted.png"></Picture>
        <StyledParagraph>
          <Subtitle>Spotted</Subtitle>
          <p>An application geared towards car enthusiasts. View and post photos of vehicles, locations of car meets, or buy/sell a vehicle on the marketplace. Follow people you know and more.</p>
        </StyledParagraph>
      </StyledDiv>
      <StyledDiv>
        <StyledParagraph>
          <Subtitle>E-Commerce Store</Subtitle>
          <p>A web application built by a team of engineers that delivers a modular UI/UX for an E-commerce store. View photos of products, related items, and user reviews. Filter or sort reviews and add items to your cart.</p>
        </StyledParagraph>
        <Picture alt="e-commerce reviews" src="/ecom.png"></Picture>
      </StyledDiv>
      <StyledDiv>
        <Picture alt="vacation rental marketplace" src="/vacation.png"></Picture>
        <StyledParagraph>
          <Subtitle>Vacation Rental Marketplace</Subtitle>
          <p>Primarily a backend focused application whose goal was to optimize and scale a system architecture for an online vacation rental marketplace. Microservices were scaled using NGINX, stress tested with Loader.io, and New Relic was utilized to determine bottlenecks.</p>
        </StyledParagraph>
      </StyledDiv>
    </Main>
  );
}

export default Projects;
