
import {
  Section,
  Container,
} from './ContentSection.styled';
import ContentCard from 'components/sectionElements/ContentCard';


const ContentSection = ({ infocards }) => {
  return (
    <Section id='info'>
      <Container>
        {infocards.map((infocard) => (
          <ContentCard key={infocard.id} infocard={infocard} />
        ))}
      </Container>
    </Section>
  );
};

export default ContentSection;
