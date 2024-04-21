import styled from 'styled-components';

 export const Section = styled.div`
  height: 400px;
  margin-bottom: 30px;
  overflow: hidden;
  
`;

export const SliderContainer = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  
`;
export const SliderTitle = styled.h3`
text-align: left;
margin: 10px 10px;
margin-bottom: 30px;
font-family: 'Oswald', sans-serif;
font-size: 32px;
font-weight: 800;
text-transform: uppercase;
  
`;

export const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
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
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const NameDiv = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`;