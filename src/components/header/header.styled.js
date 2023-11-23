import styled from 'styled-components';

 export const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #fff;
  font-family: Neue Machina-Regular;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

 export const HeaderSection = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent; 
  color: #fff;
  position: fixed;
  max-width: 1170px;
  gap: 50px;
   @media screen and (max-width: 1200px){
    width: 80%;
    display: flex;
    justify-content: center;
    }


    @media screen and (min-width: 320px) and (max-width: 767px){
    width: calc((100% - 60px) / 1);
    justify-content: space-between;
    }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  
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
 
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    height: calc(100vh - 65px);
    width: 100%;
    left: 0;
    position: absolute;
    opacity: 1;
    overflow-y: hidden;
    top: 75px;
    background-color: #cc2525;
    color: #afafaf;
    padding: 30px 30px 0;
  }
  
`;

export const MobileTitle = styled.h2`
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    margin-top: 10px;
    text-transform: uppercase;
    color: #eaeaea;
`