

import React from 'react';
import hero from '../../src/Assets/Hero.mp4';
import Workout1 from '../../src/Assets/Workout-1.mp4';
import Workout2 from '../../src/Assets/Workout-2.mp4';
import Workout3 from '../../src/Assets/Workout-3.mp4';
import styled from 'styled-components';

// Styled components

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
  color: #333; /* Darker text color */

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const HeroButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #2563eb;
  border-radius: 0.375rem;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #1d4ed8;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px; /* Increased gap for more spacing */
  padding: 20px;
`;

const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardVideo = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 8px 0;
  color: #333; /* Darker text color */
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #4b5563; /* Slightly darkened description text */
`;

const CardList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
  color: #374151; /* Darker list item text */
  margin: 12px 0;
`;

const CardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const CardButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #6a11cb;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #2575fc;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

function Tutorials() {
    return (
        <>
            <div className="container">
                {/* Hero Section */}
                <Section>
                    <HeroImgContainer>
                        <HeroImg autoPlay loop muted playsInline src={hero}></HeroImg>
                    </HeroImgContainer>
                    <HeroContent>
                        <HeroTitle>Let's Go for Get-Fit</HeroTitle>
                        <HeroText>Achieve your fitness goals with us!</HeroText>
                        <HeroButton>Get Started</HeroButton>
                    </HeroContent>

                    {/* Cards Section */}
                    <CardsSection>
                        <Card>
                            <CardVideo autoPlay loop muted playsInline src={Workout1}></CardVideo>
                            <CardContent>
                                <CardTitle>Workout 1</CardTitle>
                                <CardDescription>Learn the basics of fitness and get started on your journey.</CardDescription>
                                <CardList>
                                    <li>Warm-up exercises</li>
                                    <li>Basic stretches</li>
                                    <li>Light cardio</li>
                                </CardList>
                                <CardButtonContainer>
                                    <CardButton>Try for Free</CardButton>
                                    <CardButton>Learn More</CardButton>
                                </CardButtonContainer>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardVideo autoPlay loop muted playsInline src={Workout2}></CardVideo>
                            <CardContent>
                                <CardTitle>Workout 2</CardTitle>
                                <CardDescription>Intermediate level workout routines to build strength and stamina.</CardDescription>
                                <CardList>
                                    <li>Strength training</li>
                                    <li>Core exercises</li>
                                    <li>Cardio intervals</li>
                                </CardList>
                                <CardButtonContainer>
                                    <CardButton>Try for Free</CardButton>
                                    <CardButton>Learn More</CardButton>
                                </CardButtonContainer>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardVideo autoPlay loop muted playsInline src={Workout3}></CardVideo>
                            <CardContent>
                                <CardTitle>Workout 3</CardTitle>
                                <CardDescription>Advanced fitness programs for peak performance.</CardDescription>
                                <CardList>
                                    <li>High-intensity intervals</li>
                                    <li>Endurance training</li>
                                    <li>Advanced yoga</li>
                                </CardList>
                                <CardButtonContainer>
                                    <CardButton>Try for Free</CardButton>
                                    <CardButton>Learn More</CardButton>
                                </CardButtonContainer>
                            </CardContent>
                        </Card>
                    </CardsSection>
                </Section>
            </div>
        </>
    );
}

export default Tutorials;




