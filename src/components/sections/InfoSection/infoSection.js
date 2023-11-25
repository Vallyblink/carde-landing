import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  position: relative;
 
  @media (max-width: 780px) {
    flex-wrap: wrap;
  }
`;

const Box = styled.div`
  width: 300px;
  text-align: center;
  margin: 10px;
  transition: transform 0.5s ease-in-out;
  background-color: aqua;
  height: 350px;
 ;

  &:hover {
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0deg); /* Reset the rotation on the back side */
  }

  @media (max-width: 780px) {
    width: 100%;
  }

  @media (min-width: 781px) and (max-width: 1200px) {
    width: 48%; 
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ContentSection = () => (
  <Section>
    <Box>
      <SlideImage src={'https://res.cloudinary.com/teamprojectavatar/image/upload/v1692540894/samples/ecommerce/car-interior-design.jpg'} alt={`Slide `} />
      <p>Something, something, something</p>
      <BackSide className="back">
        {/* Content on the back side */}
        <p style={{ color: 'white' }}>Back side content</p>
      </BackSide>
    </Box>
    <Box>
      <SlideImage src={'https://res.cloudinary.com/teamprojectavatar/image/upload/v1692540894/samples/ecommerce/car-interior-design.jpg'} alt={`Slide `} />
      <p>Something, something, something</p>
      <BackSide className="back">
        {/* Content on the back side */}
        <p style={{ color: 'white' }}>Back side content</p>
      </BackSide>
    </Box>
    <Box>
      <SlideImage src={'https://res.cloudinary.com/teamprojectavatar/image/upload/v1692540894/samples/ecommerce/car-interior-design.jpg'} alt={`Slide `} />
      <p>Something, something, something</p>
      <BackSide className="back">
        {/* Content on the back side */}
        <p style={{ color: 'white' }}>Back side content</p>
      </BackSide>
    </Box>
    <Box>
      <SlideImage src={'https://res.cloudinary.com/teamprojectavatar/image/upload/v1692540894/samples/ecommerce/car-interior-design.jpg'} alt={`Slide `} />
      <p>Something, something, something</p>
      <BackSide className="back">
        {/* Content on the back side */}
        <p style={{ color: 'white' }}>Back side content</p>
      </BackSide>
    </Box>
  </Section>
);

export default ContentSection;
