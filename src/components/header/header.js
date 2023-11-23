import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';


import {
  HeaderContainer,
  Logo,
  MobileMenu,
  Navigation,
  HeaderSection,
  MobileTitle
} from './header.styled';
import { HeaderButton, MenuButton, PhoneButton } from 'components/buttons/button';

const buttons = ['Price', 'About Us', 'Contacts'];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <Logo>
          "Logo here"
        </Logo>
        <Navigation>
          {buttons.map((button, index) => (
            <HeaderButton key={index} title={button}/>
          ))}
        </Navigation>
              
        <InstagramIcon onClick={() => window.open("https://instagram.com/cardedetailing?igshid=OGQ5ZDc2ODk2ZA==")}/>
        <PhoneButton phoneNumber="+380969551338"/>
        
        <MenuButton onClick={toggleMobileMenu}></MenuButton>
        {isMobileMenuOpen && (
          <MobileMenu>
            <MobileTitle>Категорії</MobileTitle>
            {buttons.map((button, index) => (
              <HeaderButton key={index} title={button}/>
            ))}
          </MobileMenu>
        )}
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
