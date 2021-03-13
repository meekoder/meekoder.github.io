import React from 'react';
import { socialMedia } from './config';
import styled from 'styled-components';
import Icon from './icons/icon';

const StyledDiv = styled.div`
  position: fixed;
  height: 90vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = () => {
  return (
    <StyledDiv>
      <SocialList>
        {socialMedia.map(({url, name}, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </SocialList>
    </StyledDiv>
  );
};

export default Social;
