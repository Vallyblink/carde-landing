import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 700px;
  }

  @media (max-width: 480px) {
    height: 500px; 
`;

export const SlideContainer = styled.div`
 width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  z-index: -1;
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
   z-index: 2; 

  h3 {
    text-align: left;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 0px;
    padding: 0px 15px 0px 15px;
    margin: 53px 0px 0px 0px;
  }

`;


export const SliderNav = styled.div`
  position: absolute;
  top: 40%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-50%);
  z-index: 2;
    
  .prev,
  .next {
    color: #fff;
    size:"large";
    cursor: pointer;
    transition: color 0.3s; 


    &:hover {
      color: #00f;
    }
  }
`;


export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 2;


  &:hover {
    color: #00f; 
  }
`;


export const CenteredImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
  
`;

