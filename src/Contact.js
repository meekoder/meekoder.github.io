import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
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
    width: 100%;
    text-align: center;
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
  line-height: 1.6em;
  font-size: 2.5em;
  margin-top: 30px;
  @media (min-width : 992px) {
    width: auto;
    border-radius: 5px;
    margin-top: 0.5em;
    font-size: 1em;
    height: 40px;
    line-height: 1.6em;
  }
`;

const Message = styled.textarea`
  font-family: inherit;
  font-size: 1.5em;
  border: 0;
  border-radius: 10px;
  resize: none;
  width: 100%;
  height: 400px;
  padding: 2%;
  line-height: 2em;
  outline: none;
  overflow: auto;
  margin-bottom: 1em;
  margin-top: 40px;
  @media (min-width : 992px) {
    width: -webkit-fill-available;
    border-radius: 5px;
    margin-top: 0.5em;
    font-size: 1em;
    padding: 1%;
    height: 10em;
    line-height: 1.6em;
  }
  &::placeholder {
    font-size: 40px;
    @media (min-width : 992px) {
      font-size: 1em;
    }
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
  height: -webkit-fill-available;
  flex-direction: column;
  justify-content: flex-end;
`;

const Contact = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (param, e) => {
    setInfo({ ...info, [param] : e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = info;
    const templateParams = {
      from_name: name,
      to_name: 'Meeko',
      email,
      subject: subject,
      message_html: message,
    };

    emailjs
      .send(
        'service_nmm7e97',
        'template_emmilo3',
        templateParams,
        'user_YLpfBi0BUMmnGHush9hVq'
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    ;

    setInfo({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Main id="contact">
      <div className="inner">
        <StyledDiv>   
          <p className="title">Get In Touch</p>
          <Text>I'm currently seeking new opportunites.</Text>
          <Text>Please feel free to reach out through email or connect with me on LinkedIn or Twitter!</Text>
        </StyledDiv>
        <form>
          <NameEmail>
            <Input type="text" placeholder="Name" value={info.name} onChange={(e) => handleChange('name', e)} />
            <Input type="email" placeholder="Email" value={info.email} onChange={(e) => handleChange('email', e)} />
          </NameEmail>
          <Subject>
            <Input type="text" placeholder="Subject" className="subject"  value={info.subject} onChange={(e) => handleChange('subject', e)} />
          </Subject>
          <Message placeholder="Your Message" value={info.message} onChange={(e) => handleChange('message', e)}></Message>
        </form>
        <Button>
          <Send type="submit" onClick={handleSubmit}>Send</Send>
        </Button>
      </div>
      <Footer>
        <Social />
        <p className="footer">© 2021 Meekoly Rusdi.</p>
      </Footer>
    </Main>
  );
};

export default Contact;
