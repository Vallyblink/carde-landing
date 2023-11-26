import { useState } from 'react';
import {
  Box,
  SlideImage,
  BackSide,
  BackContent,
  BackButton,
  Card,
  FrontSide,
  SlideContent,
  CardContent,
} from '../sections/ContentSection/ContentSection.styled';

const ContentCard = ({ infocard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card onClick={handleCardClick}>
      <Box>
        <FrontSide className="card__face--front" isFlipped={isFlipped}>
          <CardContent>
            <SlideImage src={infocard.image} alt={`Slide with repair `} />
            <SlideContent>{infocard.firstText}</SlideContent>
          </CardContent>
        </FrontSide>
        <BackSide className="card__face--back" isFlipped={isFlipped}>
          <CardContent>
            <SlideImage src={infocard.image} alt={`Slide with repair `} />
            <BackContent>{infocard.secondText}</BackContent>
            <BackButton>{infocard.buttonText}</BackButton>
          </CardContent>
        </BackSide>
      </Box>
    </Card>
  );
};
export default ContentCard;