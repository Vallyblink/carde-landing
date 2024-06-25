import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 1000px) {
    flex-wrap: wrap;
  }
  @media (max-width: 780px) {
    flex-wrap: wrap;
  }

  @media (max-width: 400px) {
    margin: 0;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    flex-wrap: wrap;
    
  }
`;

export const ContainerTitle = styled.h2`
  text-align: left;
  margin: 10px 10px;
  margin-left: 0;
  margin-bottom: 30px;
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: #fff; /* Білий текст для контрасту */
`;

export const Card = styled.div`
  position: relative;
  width: 350px;
  min-height: ${props => (props.isOpen ? '950px' : '400px')}; 
  padding: 15px 15px;
  margin-bottom: 30px;
  cursor: pointer;
  border: ${props => (props.isOpen ? '1px outset #a6a6a6;' : 'none')};
  border-radius: ${props => (props.isOpen ? '12px' : 'none')};
  box-shadow: ${props => (props.isOpen ? '-16px -16px 21px -9px rgba(122,116,116,0.71);' : 'none')};
  background-color: ${props => (props.isOpen ? '#333' : 'transparent')}; /* Темний фон для відкритої картки */

  @media (max-width: 400px) {
    width: 320px;
    min-height: ${props => (props.isOpen ? '1000px' : '400px')};
    background: ${props => (props.isOpen ? '#f1f1f178' : 'transparent')};
  }

  @media (max-width: 780px) {
    width: 320px;
    min-height: ${props => (props.isOpen ? '1050px' : '400px')};
    background: ${props => (props.isOpen ? '#f1f1f178' : 'transparent')};
  }

   @media (max-width: 1200px) {
    width: 350px;
    min-height: ${props => (props.isOpen ? '1050px' : '400px')};
    background: ${props => (props.isOpen ? '#f1f1f178' : 'transparent')};
  }


  &:focus {
    outline: none;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;

  @media (max-width: 780px) {
    width: 100%;
    height: 400px;
  }

  @media (min-width: 781px) and (max-width: 1200px) {
    width: 100%;
    height: 300px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    height: 300px;
  }
`;

export const ShortCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  background: rgba(0, 0, 0, 0.5);
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:focus {
    outline: none;
  }
`;

export const SlideTextContainer = styled.div`
  position: absolute;
  background: linear-gradient(180deg, rgb(143 9 9 / 89%), rgb(191 0 0), rgb(143 9 9 / 89%));
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 100px;
  text-align: center;
`;

export const SlideContent = styled.p`
  position: absolute;
  top: 30%;
  left: 5%;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 26px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.9px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export const LongCard = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: transform 1.5s;
  padding-right: 15px;
`;

export const BackContent = styled.div`
  position: absolute;
  top: 95%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 95%;
  padding-right: 15px;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    height: 660px;
  }

  @media (max-width: 380px) {
    font-size: 26px;
    height: 560px;
  }
`;

export const LongSideText = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.5px;
  color: #fff; 
  margin-top: 20px;
  margin-bottom: 0px;

   @media (max-width: 1200px) {
    margin-top: 30px;
    text-align: left;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    text-align: left;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    text-align: left;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`;

export const BackButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  font-size: 28px;
  font-weight: 600;
  width: 90%;
  height: 60px;
  color: #fff;
  background-color: #cc2525;
  border-radius: 9px;
  margin-top: 20px;

  &:hover {
    color: #fff;
    background-color: #b22222;
  }

  &:focus {
    outline: none;
  }

   @media (max-width: 908px) {
    color: #fff;
    font-size: 22px;
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
