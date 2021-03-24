import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const Main = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #ace6d3;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
`;

const Text = styled.p`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  width:  100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1em;
`;

const Input = styled.input`
  font-style: italic;
  font-size: 1em;
  border-radius: 5px;
  outline: none;
  padding: 0 2%;
  height: 40px;
  width: 45%;
  line-height: 40px;
  border: 0;
`;

const Message = styled.textarea`
  font-family: inherit;
  font-style: italic;
  font-size: 1em;
  border: 0;
  border-radius: 5px;
  resize: none;
  width: 96%;
  height: 10em;
  padding: 2%;
  line-height: 1.4em;
  outline: none;
  overflow: auto;
  margin-bottom: 1em;
`;

const Send = styled.button`
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

const Contact = () => {
  return (
    <Main id="contact">
      <StyledDiv>   
        <Title>Get In Touch</Title>
        <Text>I'm currently seeking new opportunites. Please feel free to reach out through email or connect with me on LinkedIn or Twitter!</Text>
      </StyledDiv>
      <Form method="POST">
        <NameEmail>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </NameEmail>
        <Message placeholder="Your Message"></Message>
      </Form>
      <Send type="submit">Send</Send>
      <Social />
    </Main>
  );
};

export default Contact;
