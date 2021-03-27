import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 .inner {
    width: 90%;
    @media (min-width : 992px) {
      width: 80%;
    }
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
  margin: 50px 0;
  max-width: 800px;
  align-self: center;
  justify-self: center;
  .img {
    width: 100%;
  }
  @media (min-width : 992px) {
    max-width: 300px;
    margin: 0;
  }
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width : 992px) {
      grid-template-columns: 3fr 5fr;
      grid-template-rows: 2fr 2fr 2fr;
      gap: 0px 40px;
    }
`;

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
`;

const Highlight = styled.div`
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

const Projects = () => {
  return (
    <Main id="projects">
      <div className="inner">
        <p className="title">Some of My Projects</p>
        <StyledDiv>
          <Picture alt="spotted landing page" src="/images/spotted.png" className="img" />
          <StyledParagraph>
            <p className="subtitle">Spotted</p>
            <Highlight />
            <p className="text">An application geared towards car enthusiasts. View and post photos of vehicles, locations of car meets, or buy/sell a vehicle on the marketplace. Follow people you know and more.</p>
          </StyledParagraph>
          <Picture alt="e-commerce reviews" src="/images/ecom.png" className="img" />
          <StyledParagraph>
            <p className="subtitle">E-Commerce Store</p>
            <Highlight />
            <p className="text">A web application built by a team of engineers that delivers a modular UI/UX for an E-commerce store. View photos of products, related items, and user reviews. Filter or sort reviews and add items to your cart.</p>
          </StyledParagraph>
          <Picture alt="vacation rental marketplace" src="/images/vacation.png" className="img" />
          <StyledParagraph>
            <p className="subtitle">Vacation Rental Marketplace</p>
            <Highlight />
            <p className="text">Primarily a backend focused application whose goal was to optimize and scale a system architecture for an online vacation rental marketplace. Microservices were scaled using NGINX, stress tested with Loader.io, and New Relic was utilized to determine bottlenecks.</p>
          </StyledParagraph>
        </StyledDiv>
      </div>
    </Main>
  );
}

export default Projects;
