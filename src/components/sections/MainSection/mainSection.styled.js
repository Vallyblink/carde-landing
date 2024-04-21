import styled, { keyframes} from "styled-components";

export const SliderContainer = styled.section`
position: relative;  
  width: 100%;
  height: 800px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 700px;
  }

  @media (max-width: 480px) {
    height: 550px;
    margin-top:100px;
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4); 
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
  background-color: rgba(0, 0, 0, 0.5); 
`;

const fadeIn = keyframes`
  from {
    transform: translateY(120%);
    visability: hidden;
  }
  to {
    transform: translateY(-50%);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(120%);
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  text-align: left;
  color: #fff;
  align-self: flex-start;
  font-family: Oswald, italic;
  font-size: 28px;
  font-weight: 400;
  // text-transform: uppercase;
  letter-spacing: 0.9px;
  overflow: hidden;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  h3 {
    color: #ffffff;
    text-align: left;
    color: #ffffff;
    font-family: "Oswald", italic;
    font-size: 28px;
    font-weight: 400;
    // text-transform: uppercase;
    line-height: 1.1em;
    padding: 0px 15px 0px 15px;
    margin: 16px 0px 10px 0px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    // perspective: 500px;
    letter-spacing: 0px;
 
    margin: 53px 0px 0px 0px;

    @media (min-width: 768px) {
      font-family: "Oswald", italic;
      font-size: 40px;
      font-weight: 500;
      margin: 0px 50px 50px 0px;
    }

    @media (max-width: 480px) {
      font-size: 30px;
      margin: 0px 10px 0px 0px;
      font-weight: 400;
    }
  }
  @media (min-width: 400px) {
      top: 55%;
      font-size: 28px;
      animation: ${({ active }) => (active === 'true' ? fadeIn : fadeOut)} 0.5s ease-out 0.1s both;
    }
    @media (min-width: 680px) {
      top: 40%;   
    }
    @media (min-width: 1199px) {
      top: 50%;   
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
