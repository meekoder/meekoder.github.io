import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Links = styled.ul`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

const StyledLink = styled.li`
  
`;

const Resume = styled.button`

`;

function Nav() {
  return (
    <div>
      <StyledNav>
        <Links>
          <StyledLink>About</StyledLink>
          <StyledLink>Experience</StyledLink>
          <StyledLink>Projects</StyledLink>
          <StyledLink>Contact</StyledLink>
        </Links>
        <Resume>Resume</Resume>
      </StyledNav>
    </div>
  );
}

export default Nav;
