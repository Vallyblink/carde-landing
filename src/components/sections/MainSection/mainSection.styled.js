import styled from "styled-components";

export const SliderContainer = styled.section`
position: relative;  
width: 100%;
  height: 800px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 700px;
  }

  @media (max-width: 480px) {
    height: 500px;
    margin-top:50px;
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 700px;
  }

  @media (max-width: 480px) {
    height: 500px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index:-1;
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  text-align: left;
  color: #fff;
  align-self: flex-start;
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.9px;
  transform: translateY(-50%);
  animation: slideIn 4s ease-out 0.1s both; /* Змініть тривалість на 4 секунди */
  visibility: hidden;
  overflow: hidden;

  h3 {
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 0px;
    padding: 0px 15px 0px 15px;
    margin: 53px 0px 0px 0px;

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }
  
  @keyframes slideIn {
    0% {
      transform: translateY(70%);
      visibility: hidden;
    }
    30% {
      transform: translateY(-50%);
      visibility: visible;
    }
    80% {
      transform: translateY(-50%);
      visibility: visible;
    }
    90% {
     visibility: hidden;
     transform: translateY(70%);
    }
    100% {
      visibility: hidden;
      
    }
  }
`;

export const SliderNav = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between; /* Add this to space the buttons on both sides */
  align-items: center;
  transform: translateY(-50%);

  .prev,
  .next {
    color: #fff;
    cursor: pointer;
    transition: color 0.3s;
    font-size: 24px;

    &:hover {
      color: #cc2525;
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

  &:hover {
    color: #00f;
  }
`;

export const CenteredImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
`;

export const CustomButton = styled.button`
  width: 180px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #00f;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;
