import React from 'react';
import sprite from '../../../sprite.svg';
import { InstagramButton, PhoneButton } from 'components/buttons/button';
import {
  Section,
  Container,
  MapContainer,
  MapLinkButton,
  Text,
  Span,
  LogoSvg,
} from './LocationSection.styled';

const LocationSection = () => {
  return (
    <Section id='location'>
      <Container>
        <LogoSvg>
          <use href={sprite + '#icon-logo-removebg-preview-1'} />
        </LogoSvg>
          <InstagramButton
            profileLink="https://instagram.com/cardedetailing?igshid=OGQ5ZDc2ODk2ZA=="
            buttonText="cardedetailing"
          />
          <PhoneButton phoneNumber="+380969551338" buttonText="+380969551338" />
         <Text>
            Ми знаходимось за адресою: </Text>
            <Span>вулиця Київська, 98а, Тарасівка, Київська обл., 08161</Span>
        
        <MapLinkButton
          href="https://maps.app.goo.gl/S3P7q7CE2zTYeUuM9"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Відкрити в Google Maps
        </MapLinkButton>
        <MapContainer>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10188.06824487256!2d30.30484697846636!3d50.32893294328873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4b534e65741c7%3A0xa85247c08a07ecdb!2z0JTQtdGC0LXQudC70ZbQvdCzINGB0YLRg9C00ZbRjyBDYXJEZSBEZXRhaWxpbmc!5e0!3m2!1suk!2sua!4v1701039310581!5m2!1suk!2sua"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
       
      </Container>
    </Section>
  );
};

export default LocationSection;

