
import {
  Section,
  Container,
  ContainerTitle,
} from './ContentSection.styled';
import ContentCard from 'components/sectionElements/ContentCard';


const ContentSection = ({ infocards }) => {
  return (
    <Section id='content'> 
    <ContainerTitle>Популярні послуги</ContainerTitle>
      <Container>
        {infocards.map((infocard) => (
          <ContentCard key={infocard.id} infocard={infocard} />
        ))}
      </Container>
    </Section>
  );
};

export default ContentSection;
