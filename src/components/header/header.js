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
 const logo = "https://res.cloudinary.com/teamprojectavatar/image/upload/v1700926597/zmekjelrajtysryq3mbq.png"


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <>
      <HeaderSection>
        <HeaderContainer>

          <LogoContainer>
          <Logo>
            <MobileSVG src={logo} alt="logo" />
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
            <MobileSVG src={logo} alt="logo" />
          <MobileSocialIcons>
            <InstagramButton profileLink="https://instagram.com/cardedetailing?igshid=OGQ5ZDc2ODk2ZA==" buttonText= "Наш Instagram" />
            <PhoneButton phoneNumber="+380969551338" buttonText="Зателефонувати"/>
          </MobileSocialIcons>
      </MobileHeader>
      </HeaderSection>
      
    </>
  );
};

export default Header;