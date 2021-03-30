import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFF;
  height: 100vh;
  text-align: left;
  padding: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (max-width: 768px) {
    width: 100%;
  }

  li {
    list-style-type: none;
    font-size: 3rem;
    text-transform: uppercase;
    padding: 3rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #2f343f;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ACE6D3;
    }
  }
`;
