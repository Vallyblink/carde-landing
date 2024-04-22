import { useState } from 'react';
import {
  Box,
  SlideImage,
  BackContent,
  BackButton,
  Card,
  SlideContent,
  CardContent,
  SlideTextContainer,
  ShortCard,
  LongCard,
  LongSideText,
} from '../sections/ContentSection/ContentSection.styled';

const ContentCard = ({ infocard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCallButtonClick = () => {
    window.open(`tel:+380969551338`);
  };

  return (
    <Card onClick={handleCardClick} isOpen={isOpen}>
      <Box>
        <ShortCard className="card__face--front" isOpen={isOpen}>
          <CardContent>
            <SlideImage src={infocard.image} alt={`Slide with repair `} />
            <SlideTextContainer>
              <SlideContent>{infocard.firstText}</SlideContent>
            </SlideTextContainer>
            
          </CardContent>
        </ShortCard>
        {isOpen && (
          <LongCard className="card__face--back" isOpen={isOpen}>
            <BackContent>
              <LongSideText>
              {infocard.secondText[0]} <br/>
              {infocard.secondText[1]}<br/>
              {infocard.secondText[2]}<br/>
              {infocard.secondText[3]}<br/></LongSideText>
              <BackButton onClick={handleCallButtonClick}>{infocard.buttonText}</BackButton>            </BackContent>
          </LongCard>
        )}
      </Box>
    </Card>
  );
};

export default ContentCard;
