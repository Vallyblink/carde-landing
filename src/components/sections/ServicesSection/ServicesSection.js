import React from 'react';
import {
  Section,
  Container,
  ServiceItem,
  ServiceContent,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
  ContainerTitle,
} from './servicesSection.styled';

export const ServicesSection = ({ services }) => {
  return (
      <Section id='services'>
          
        <Container>
        <ContainerTitle >Наші послуги</ContainerTitle>
        {services.map((service) => (
          <ServiceItem key={service.id}>
                <ServiceContent>
                <ServiceCard>
                <ServiceTitle>{service.title}</ServiceTitle>
                 {/* <ServiceImage className='service-image' src={service.image} alt={`Slide ${service.id}`} />         */}
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </ServiceContent>
          </ServiceItem>
        ))}
      </Container>
    </Section>
  );
};

export default ServicesSection;
