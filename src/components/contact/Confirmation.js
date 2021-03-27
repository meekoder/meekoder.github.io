import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  max-width: 900px;
  height: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border: 2px solid #ace6d3;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  margin-top: 2em;
  width: 86%;
  @media (min-width : 992px) {
    margin-top: 1em;
    height: 1em;
    width: 79%;
  }
  opacity: 0;
  animation: fadeIn ease 10s linear;
  -webkit-animation: fadeIn ease 10s;
  -moz-animation: fadeIn ease 10s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;

  @keyframes fadeIn {
    0%,100% {opacity:0;}
    50% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0%,100% {opacity:0;}
    50% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0%,100% {opacity:0;}
    50% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0%,100% {opacity:0;}
    50% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0%,100% {opacity:0;}
    50% {opacity:1;}
  }
`;

const Text = styled.p`
  text-align: center;
  color: #f3f4f5;
  margin: 0;
  font-size: 30px;
  @media (min-width : 992px) {
    font-size: 15px;
  }
  &:last-of-type {
    margin-top: 0.5em;
  }
`;

const Confirmation = () => {
  return (
    <Main className="fade-in">
      <Text>Message sent successfully.</Text>
      <Text>Thanks for reaching out! I'll get back to you shortly.</Text>
    </Main>
  );
};

export default Confirmation;
