import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled.li`

`;

const Links = styled.ul`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  color: #f3f4f5;
  padding-right: 2rem;

  ${StyledLink}:hover {
    cursor: pointer;
    color: #ace6d3;
    transition: color .2s cubic-bezier(.3,0,.45,1);
  }
`;

const Resume = styled.button`
  cursor: pointer;
  border: 1px solid #ace6d3;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  color: #f3f4f5;
  font-size: 16px;
  background-color: transparent;
  &:hover,
  &:focus,
  &:active {
    background-color: #596277;
    color: #ace6d3;
    outline: none;
    transition: color.2s cubic-bezier(.3,0,.45,1), background-color .2s cubic-bezier(.3,0,.45,1);
  }
  &:after {
    display: none !important;
  }
`;

const Header = styled.header`
`;

function Nav() {

  return (
    <Header>
      <StyledNav>
        <Links>
          <StyledLink><Link activeClass="active" to="about" spy={ true } smooth={ true }>About</Link></StyledLink>
          <StyledLink>Experience</StyledLink>
          <StyledLink>Projects</StyledLink>
          <StyledLink>Contact</StyledLink>
          <Resume>Resume</Resume>
        </Links>
      </StyledNav>
    </Header>
  );
}

export default Nav;
