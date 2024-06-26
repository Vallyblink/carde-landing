
import styled from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #fff;
  font-family: "Raleway", Sans-serif;
  position: relative;
  width: 100%;
  z-index: 1; 
  top:0px;
  @media screen and (min-width: 320px) and (max-width: 750px) {
   background-color: transparent; 
    height: 60px;
    MenuIcon {
    display: none;
  }
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top:0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
 

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }

  @media screen and (min-width: 320px) and (max-width: 750px) {
    justify-content: space-between;
    background-color: #000000;
    height: 50px;
    z-index: 2;
   
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    display: none;
  }
`;


export const MobileSVG = styled.img`
  width: 160px;
  height: 140px;
  z-index: -1;
  margin-bottom: -20px;
`;
export const LogoPicture = styled.div`
  margin-right: 10px; 
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  font-size: 14px;
  font-weight: inherit;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none; 
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  color:#fff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 70%;
    right: 0;
    top: 0;
    opacity: 1;
    overflow-y: hidden;
    background-color: rgba(0, 0, 0, 0.9); 
    color: #afafaf;
    padding: 30px 20px; 
 }
`;

export const BackDrop = styled.div`
  @media screen and (max-width: 768px) {
        display:block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); 
 }
`;

export const MobileTitle = styled.h2`
  font-size: 16px;
  font-weight: 800;
  line-height: 28px;
  margin-top: 10px;
  text-transform: uppercase;
  color: #eaeaea;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MobileHeader = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 165px;
    background-color: #19191a; 
    position: absolute;
    width: 100%;
    top: 50px; 
    z-index: 1;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
  display: none;
  }
`;

export const MobileSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

`;


export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  background: transparent;
  border: none;
`;


