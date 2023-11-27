import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(to bottom, black, #cc2525);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapContainer = styled.div`
  width: 100%;
  margin-top: 20px;
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

export const InstagramButton = styled.a`
  display: inline-block;
  background-color: #ffffff;
  color: #cc2525;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #cc2525;
    color: #ffffff;
  }
`;

export const PhoneButton = styled.a`
  display: inline-block;
  background-color: #ffffff;
  color: #cc2525;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #cc2525;
    color: #ffffff;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const LogoSvg = styled.svg`
  margin-bottom: -26px;
`;
