import styled from 'styled-components';


export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
 
`
export const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 650px) {
   width: 500px;
   
  }
  @media (min-width: 1200px) {
   width: 800px;
  }

`

export const MapContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapLinkButton = styled.a`
  display: inline-block;
  background-color: #ffffff;
  color: #cc2525;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #cc2525;
    color: #ffffff;
  }
`;

export const MainText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Raleway';
  line-height: 1.5;
  margin: 0px 0px 10px 0px;
  @media (min-width: 650px) {
   font-size: 28px;
   text-align: center;
  }
`;
export const LogoSvg = styled.svg`
  display: block;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  margin-bottom: 0;

  @media (min-width: 650px) {
   width: 300px;
   height: 200px;
  }
`;