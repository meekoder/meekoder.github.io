import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const Main = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 .inner {
    width: 90%;
    @media (min-width : 992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .title {
    font-size: 100px;
    @media (min-width : 992px) {
      font-size: 50px;
    }
  }

  .footer {
    font-size: 25px;
    @media (min-width : 992px) {
      font-size: 12px;
    }
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  margin: 0;
  font-size: 30px;
  &:last-of-type {
    margin-bottom: 10px;
  }
  @media (min-width : 992px) {
    font-size: 16px;
  }
`;

const NameEmail = styled.div`
  @media (min-width : 992px) {
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 10px;
  }
`;

const Subject = styled.div`
  @media (min-width : 992px) {
    display: grid;
    grid-template-columns: 3fr;
    .subject {
      padding: 0 1%;
    }
  }
`;

const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  outline: none;
  padding: 0 2%;
  border: 0;
  height: 100px;
  line-height: 1.4em;
  font-size: 2.5em;
  margin-top: 30px;
  @media (min-width : 992px) {
    width: auto;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 1em;
    height: 40px;
    line-height: 40px;
  }
`;

const Message = styled.textarea`
  font-family: inherit;
  font-size: 2.5em;
  border: 0;
  border-radius: 10px;
  resize: none;
  width: 100%;
  height: 400px;
  padding: 2%;
  line-height: 1.4em;
  outline: none;
  overflow: auto;
  margin-bottom: 1em;
  margin-top: 40px;
  @media (min-width : 992px) {
    width: -webkit-fill-available;
    border-radius: 5px;
    margin-top: 1em;
    font-size: 1em;
    padding: 1%;
    height: 10em;
    line-height: 40px;
  }
`;

const Send = styled.button`
  cursor: pointer;
  border: 2px solid #ace6d3;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  color: #f3f4f5;
  font-size: 50px;
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
  @media (min-width : 992px) {
    border: 1px solid #ace6d3;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-size: 16px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  height: 30%;
  justify-content: center;
  align-items: flex-end;
`;

const Contact = () => {
  return (
    <Main id="contact">
      <div className="inner">
        <StyledDiv>   
          <p className="title">Get In Touch</p>
          <Text>I'm currently seeking new opportunites.</Text>
          <Text>Please feel free to reach out through email or connect with me on LinkedIn or Twitter!</Text>
        </StyledDiv>
        <form method="POST">
          <NameEmail>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </NameEmail>
          <Subject>
            <Input type="text" placeholder="Subject" className="subject" />
          </Subject>
          <Message placeholder="Your Message"></Message>
        </form>
        <Button>
          <Send type="submit">Send</Send>
        </Button>
        <Social />
      </div>
      <Footer>
        <p className="footer">© 2021 Meekoly Rusdi.</p>
      </Footer>
    </Main>
  );
};

export default Contact;
