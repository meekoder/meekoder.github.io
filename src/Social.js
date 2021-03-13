import React from 'react';
import { socialMedia } from './config';
import styled from 'styled-components';
import Icon from './icons/icon';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    height: 5em;
  }

  li {
    a {
      padding: 2em;


      svg {
        width: 1.5em;
        height: 1.5em;
        &:hover,
        &:focus {
          transform: translateY(-3px);
          transition: transform .3s cubic-bezier(.3,0,.45,1);
        }
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
