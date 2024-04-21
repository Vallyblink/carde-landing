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
  align-items: center;
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
`;

export const Card = styled.div`
  position: relative;
  width: 350px;
  min-height: ${props => (props.isOpen ? '1100px' : '400px')}; 
  padding: 15px 15px;
  margin-bottom: 30px;
  cursor: pointer;
  border: ${props => (props.isOpen ? '3px outset #a6a6a6;' : 'none')};
  border-radius: ${props => (props.isOpen ? '12px' : 'none')};
  box-shadow: ${props => (props.isOpen ? '-16px -16px 21px -9px rgba(122,116,116,0.71);' : 'none')};

  @media (max-width: 500px) {
    width: 320px;
    min-height: ${props => (props.isOpen ? '1000px' : '400px')};
    background:${props => (props.isOpen ? '#f1f1f178': 'transparent')};
  }
  &:focus {
    outline: none;
  }
`;


export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
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
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9)
  );
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 100px;
  text-align: center;
`;
export const SlideContent = styled.p`
  position: absolute;
  top: 20%;
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
  }

  @media (max-width: 500px) {
  }
`;

export const LongCard = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  transition: transform 1.5s;
  padding-right:15px;
`;

export const BackContent = styled.div`
  position: absolute;
  top: 95%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 95%;
  padding-right:15px;
  &:focus {
    outline: none;
  }
  `;
export const LongSideText = styled.p`
  font-family: Manrope;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.5px;
  color: rgb(36 36 36);
  margin-top: 20px; 
  margin-bottom: 0px; 
 
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 30px; 
    text-align: left;
    color: rgb(38 36 36);
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
`
export const BackButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  font-size: 28px;
  font-weight: 600;
  width:90%;
  height:50px;
  color: #fff;
  background-color:#cc2525;
  border-radius: 19px;
  margin-top:20px;
  &:hover {
    color: #fff;
    background-color:#cc2525;
  }
  &:focus {
    outline: none;
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
