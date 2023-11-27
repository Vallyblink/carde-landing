import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 250px;
  margin-bottom: 30px;
  overflow: hidden;
  background-color: #deb1b1;
`;

const SliderContainer = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #cc2525;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin-right: 60px;
  cursor: pointer;
  font-size: 16px;

`;

const FeedbackSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <Section id='feedback'>
      <SliderContainer>
        <h3>Відгуки  TEST</h3>
        <SliderContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <h3>{testimonial.author}</h3>
              <p>{testimonial.comment}</p>
            </Slide>
          ))}
        </SliderContent>
        <Button onClick={prevSlide}>Previous</Button>
        <Button onClick={nextSlide}>Next</Button>
      </SliderContainer>
    </Section>
  );
};

export default FeedbackSection;
