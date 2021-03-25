import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width : 992px) {
    height: 100vh;
    width: 70%;
  }
  .title {
    @media (min-width : 992px) {
      align-self: start;
    }
  }
  .subtitle {
    margin-top: 20px;
  }
`;

const Picture = styled.img`
  max-width: 800px;
  align-self: center;
  justify-self: center;
  .img {
    width: 100%;
  }
  @media (min-width : 992px) {
    max-width: 300px;
  }
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 80%;
    @media (min-width : 992px) {
      grid-template-columns: 2fr 2fr;
      grid-template-rows: 3fr 3fr 3fr;
      gap: 40px 70px;
    }
`;

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  return (
    <Main id="projects">
      <p className="title">Some of My Projects</p>
      <StyledDiv>
        <Picture alt="spotted landing page" src="/spotted.png" className="img" />
        <StyledParagraph>
          <p className="subtitle">Spotted</p>
          <p className="text">An application geared towards car enthusiasts. View and post photos of vehicles, locations of car meets, or buy/sell a vehicle on the marketplace. Follow people you know and more.</p>
        </StyledParagraph>
        <Picture alt="e-commerce reviews" src="/ecom.png" className="img" />
        <StyledParagraph>
          <p className="subtitle">E-Commerce Store</p>
          <p className="text">A web application built by a team of engineers that delivers a modular UI/UX for an E-commerce store. View photos of products, related items, and user reviews. Filter or sort reviews and add items to your cart.</p>
        </StyledParagraph>
        <Picture alt="vacation rental marketplace" src="/vacation.png" className="img" />
        <StyledParagraph>
          <p className="subtitle">Vacation Rental Marketplace</p>
          <p className="text">Primarily a backend focused application whose goal was to optimize and scale a system architecture for an online vacation rental marketplace. Microservices were scaled using NGINX, stress tested with Loader.io, and New Relic was utilized to determine bottlenecks.</p>
        </StyledParagraph>
      </StyledDiv>
    </Main>
  );
}

export default Projects;
