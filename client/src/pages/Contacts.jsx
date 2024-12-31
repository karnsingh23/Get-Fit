import React from 'react';
import heroContact from '../Assets/hero-contact.mp4';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  position: relative;
  height: 90vh;
  width: 100vw;
  overflow-y: scroll;
`;

const HeroImgContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const HeroImg = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 640px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const HeroText = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #fff;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const FormSection = styled.div`
  padding: 20px;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2563eb;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #4b5563;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 4px rgba(37, 99, 235, 0.5);
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 4px rgba(37, 99, 235, 0.5);
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: #2563eb;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1d4ed8;
  }
`;

function Contact() {
  return (
    <div className="container">
      {/* Scrollable Section */}
      <Section>
        {/* Hero Section */}
        <HeroImgContainer>
          <HeroImg autoPlay loop muted playsInline src={heroContact}></HeroImg>
        </HeroImgContainer>
        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroText>We’re here to assist you. Get in touch with us today!</HeroText>
        </HeroContent>

        {/* Contact Form Section */}
        <FormSection>
          <Title>Reach Out to Us</Title>
          <Subtitle>Fill out the form below, and we’ll get back to you shortly.</Subtitle>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows="5" required></Textarea>
            <Button type="submit">Send Message</Button>
          </Form>
        </FormSection>
      </Section>
    </div>
  );
}

export default Contact;
