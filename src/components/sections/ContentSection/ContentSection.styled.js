import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0px 0px 70px 0px;
  background-color: #f0f0f0;
  position: relative;

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1200px;

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }

  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const Card = styled.div`
  perspective: 1000px;
  width: 350px;
  height: 350px;
  margin: -70px 0 0 0;
  padding: 0 15px;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  cursor: pointer;

  @media (min-width: 1200px) {
     &:hover,
  &:active {
    transform: rotateY(180deg);
  }
  }
 

  @media (max-width: 400px) {
    padding: 0 10px; 
    width: 320px;
  }

  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: rotateY(180deg);
    }

    &:active {
      transform: rotateY(180deg);
    }
  }
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  text-align: center;
  @media (max-width: 780px) {
    width: 100%;
    height: 300px;
  }

  @media (min-width: 781px) and (max-width: 1200px) {
    width: 48%;
    height: 300px;
  }
`;

export const FrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(${props => (props.isFlipped ? '180deg' : '0deg')});
  overflow: hidden;
  transition: transform 0.8s;
  background: rgba(0, 0, 0, 0.5);
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideContent = styled.p`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  align-self: flex-start;
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.9px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    text-align: left;
    color: #fff;
    align-self: flex-start;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.9px;
  }
};`

export const BackContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  transform: translateY(-50%);
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.9px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    text-align: left;
    color: #fff;
    align-self: flex-start;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.9px;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 85%;
  left: 10%;
  transform: translateY(-50%);
  align-self: flex-start;
  font-size: 28px;
  font-weight: 800;
  color: #cc2525;
`;

export const BackSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(${props => (props.isFlipped ? '0deg' : '180deg')});
  transition: transform 0.8s;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backface-visibility: hidden;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
