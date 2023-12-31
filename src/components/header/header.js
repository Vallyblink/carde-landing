import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  HeaderContainer,
  HeaderSection,
  Logo,
  Navigation,
  MobileMenu,
  MobileTitle,
  MobileHeader,
  LogoContainer,
  SocialIcons,
  MobileSocialIcons,
  CloseButton,
  MobileSVG,
  BackDrop
} from './header.styled';
import { HeaderButton, PhoneButton, InstagramButton } from 'components/buttons/button';
import sprite from '../../sprite.svg';

const buttons = [
  { title: 'Головна', link: 'main' },
  { title: 'Про нас', link: 'content' },
  { title: 'Послуги', link: 'services' },
  { title: 'Відгуки', link: 'feedback' },
  { title: 'Контакти', link: 'location' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <>
      <HeaderSection>
        <HeaderContainer>

          <LogoContainer>
            <Logo>
              <svg width="130" height="100">
                <use href={sprite + '#icon-logo-removebg-preview-1'} />
              </svg>
            </Logo>
          </LogoContainer>

          <Navigation>
          {buttons.map((button, index) => (
          <HeaderButton key={index} title={button.title} link={button.link} />
            ))}
          </Navigation>

          <SocialIcons>
              <InstagramIcon onClick={() => window.open("https://instagram.com/cardedetailing?igshid=OGQ5ZDc2ODk2ZA==")}/>
            <PhoneButton phoneNumber="+380969551338" />
          </SocialIcons>
          
          <MenuIcon onClick={toggleMobileMenu} sx={{ '@media screen and (min-width: 780px)': { display: 'none' }, }}></MenuIcon>
          {isMobileMenuOpen && (
            <BackDrop onClick={toggleMobileMenu}>
            <MobileMenu>
              <CloseButton onClick={toggleMobileMenu} >
                <CloseIcon />
              </CloseButton>
              <MobileTitle>Категорії</MobileTitle>
              {buttons.map((button, index) => (
          <HeaderButton key={index} title={button.title} link={button.link} />
            ))}
              </MobileMenu>
            </BackDrop>
          )}
        </HeaderContainer>

        <MobileHeader>
              <MobileSVG >
                <use href={sprite + '#icon-logo-removebg-preview-1'} />
              </MobileSVG>
          <MobileSocialIcons>
            <InstagramButton profileLink="https://instagram.com/cardedetailing?igshid=OGQ5ZDc2ODk2ZA==" buttonText= "cardedetailing" />
            <PhoneButton phoneNumber="+380969551338" buttonText="+380969551338"/>
          </MobileSocialIcons>
      </MobileHeader>
      </HeaderSection>
      
    </>
  );
};

export default Header;