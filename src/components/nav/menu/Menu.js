import React from 'react';
import { Link } from 'react-scroll';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import styled from 'styled-components';
import resume from '../resume.pdf';

const Resume = styled.div`
  cursor: pointer;
  border: 1px solid #ace6d3;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: #2f343f;
  font-size: 1.5rem;
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

const Menu = ({ open, setOpen }) => {
  const handleResume = () => {
    window.open(resume);
  };

  const closeMenu = () => {
    setOpen(!open);
  };

  return (
    <StyledMenu open={open}>
      <li><Link onClick={closeMenu} activeClass="active" to="about" spy={ true } smooth={ true }>About</Link></li>
      <li><Link onClick={closeMenu} activeClass="active" to="experience" spy={ true } smooth={ true }>Experience</Link></li>
      <li><Link onClick={closeMenu} activeClass="active" to="projects" spy={ true } smooth={ true }>Projects</Link></li>
      <li><Link onClick={closeMenu} activeClass="active" to="contact" spy={ true } smooth={ true }>Contact</Link></li>
      <Resume onClick={handleResume}>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer">
        </a>
        RESUME
      </Resume>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
