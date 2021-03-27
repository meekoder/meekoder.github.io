import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import resume from './resume.pdf';

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

const Resume = styled.div`
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
`;

const Header = styled.header`
`;

const Nav = () => {

  const handleResume = () => {
    window.open(resume);
  };

  return (
    <Header>
      <StyledNav>
        <Links>
          <StyledLink><Link activeClass="active" to="about" spy={ true } smooth={ true }>About</Link></StyledLink>
          <StyledLink><Link activeClass="active" to="experience" spy={ true } smooth={ true }>Experience</Link></StyledLink>
          <StyledLink><Link activeClass="active" to="projects" spy={ true } smooth={ true }>Projects</Link></StyledLink>
          <StyledLink><Link activeClass="active" to="contact" spy={ true } smooth={ true }>Contact</Link></StyledLink>
          <Resume onClick={handleResume}>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer">
            </a>
            Resume
          </Resume>
        </Links>
      </StyledNav>
    </Header>
  );
};

export default Nav;
