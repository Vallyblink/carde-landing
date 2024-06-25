import styled from 'styled-components';

export const Section = styled.div`
  height: 400px;
  margin-bottom: 30px;
  overflow: hidden;
  background-color: #000;

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 350px;
  }
`;

export const SliderContainer = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
`;

export const SliderTitle = styled.h3`
  text-align: left;
  margin: 10px 10px;
  margin-bottom: 30px;
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #333;
`;

export const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
  color: #fff;

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 15px;
  }
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  background-color: #cc2525;
  color: white;
  border: none;
  margin-top: 30px;
  border-radius: 4px;
  padding: 10px 15px;
  margin-right: 10px; 
  cursor: pointer;
  font-size: 16px;

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 16px;
    padding: 8px 12px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentText = styled.p`
  font-size: 18px; 
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 18px; 
  }
  @media (max-width: 767px) {
    font-size: 16px; 
  }
`;