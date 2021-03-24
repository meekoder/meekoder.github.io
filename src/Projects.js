import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const Title = styled.p`
  color: #ace6d3;
  font-size: 30px;
  font-weight: bold;
  align-self: start;
`;

const Picture = styled.img`
  max-width: 350px;
  align-self: center;
  justify-self: center;
  .img {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
    @media (min-width : 768px) {
      display: grid;
      grid-template-columns: 1fr;
      width: 80%;
    }
    @media (min-width : 992px) {
      display: grid;
      grid-template-columns: 2fr 2fr;
      grid-template-rows: 3fr 3fr 3fr;
      gap: 40px 70px;
    }
`;

const Subtitle = styled.p`
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
        <Picture alt="spotted landing page" src="/spotted.png" className="img" />
        <StyledParagraph>
          <Subtitle>Spotted</Subtitle>
          <p>An application geared towards car enthusiasts. View and post photos of vehicles, locations of car meets, or buy/sell a vehicle on the marketplace. Follow people you know and more.</p>
        </StyledParagraph>
        <Picture alt="e-commerce reviews" src="/ecom.png" className="img" />
        <StyledParagraph>
          <Subtitle>E-Commerce Store</Subtitle>
          <p>A web application built by a team of engineers that delivers a modular UI/UX for an E-commerce store. View photos of products, related items, and user reviews. Filter or sort reviews and add items to your cart.</p>
        </StyledParagraph>
        <Picture alt="vacation rental marketplace" src="/vacation.png" className="img" />
        <StyledParagraph>
          <Subtitle>Vacation Rental Marketplace</Subtitle>
          <p>Primarily a backend focused application whose goal was to optimize and scale a system architecture for an online vacation rental marketplace. Microservices were scaled using NGINX, stress tested with Loader.io, and New Relic was utilized to determine bottlenecks.</p>
        </StyledParagraph>
      </StyledDiv>
    </Main>
  );
}

export default Projects;
