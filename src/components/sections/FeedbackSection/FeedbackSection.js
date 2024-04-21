import React, { useRef, useState } from 'react';
import { Button, Section, Slide, SliderContainer, SliderContent, SliderTitle, Avatar, NameDiv } from './FeedBackSection.styled';
import Slider from "react-slick";

const FeedbackSection = ({ feedback }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Section id='feedback'>
      <SliderContainer>
        <SliderTitle>Відгуки</SliderTitle>
        <Slider {...settings} ref={sliderRef}>
          {feedback.map((feedback) => (
            <Slide key={feedback.key}>
              <NameDiv>
              <Avatar src={feedback.avatar} alt="Avatar" />
              <h3>{feedback.name}</h3>
              </NameDiv>  
              <p>{feedback.comment}</p>
            </Slide>
          ))}
        </Slider>
        <Button onClick={() => goToSlide(currentSlide - 1)}>Попередній</Button>
        <Button onClick={() => goToSlide(currentSlide + 1)}>Наступний</Button>
      </SliderContainer>
    </Section>
  );
};

export default FeedbackSection;
