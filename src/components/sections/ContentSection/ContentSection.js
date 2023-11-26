import {
  Section,
  Box,
  SlideImage,
  BackSide,
  BackContent,
  BackButton,
  Card,
  FrontSide,
  Container,
  SlideContent,
  CardContent,
} from './ContentSection.styled';

const ContentSection = ({ infocards }) => {

  return (
    <Section>
      <Container>
        {infocards.map((infocard) => (
          <Card
            key={infocard.id}
          >
            <Box>
              
              <FrontSide className="card__face--front">
                <CardContent>
                <SlideImage src={infocard.image} alt={`Slide with repair `} />
                  <SlideContent>{infocard.firstText}</SlideContent>
                </CardContent>
              </FrontSide>
              
              <BackSide className="card__face--back">
                <CardContent>
                <SlideImage src={infocard.image} alt={`Slide with repair `} />
                <BackContent>{infocard.secondText}</BackContent>
                <BackButton>
                  {infocard.buttonText}
                  </BackButton>
                </CardContent>
              </BackSide>
            
            </Box>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default ContentSection;
