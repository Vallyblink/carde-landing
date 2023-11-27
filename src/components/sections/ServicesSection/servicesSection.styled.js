import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  padding: 20px;
  margin-top: 40px;
  font-family: "Raleway",Sans-serif;

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  overflow-x: hidden; 
  gap: 11px;
`;

export const ServiceItem = styled.div`
  margin: 0 10px 20px 10px;
  cursor: pointer;

  @media (min-width: 781px) {
    margin: 0 10px 20px 10px;
  }

  @media (min-width: 1200px) {
    width: calc(100% - 40px);
  }
`;

export const ServiceContent = styled.div`
 
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 780px) {
    width: 300px;
    height: 120px;
    transition: opacity 0.3s ease-in-out; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  @media (max-width: 780px) {
    width: 100%;
    height: auto;
    object-fit: contain;
   
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: relative;
  margin-right: 10px;
  margin-left: 10px;

  @media (max-width: 780px) {
    width: calc(100% - 40px);
    margin-right: 0;
    margin-left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 780px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 700px;
    flex-wrap: wrap;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    flex-wrap: wrap;
  }

`;

export const ServiceTitle = styled.h2`
  @media (max-width: 780px) {
    text-align: left;
    margin-right: 20px;
    font-weight: 500;
    font-style: normal;
    font-size: calc(24px + (36 - 24) * ((100vw - 100px)/ (1800 - 100)));
    line-height: calc(30px + (48 - 30) * ((100vw - 100px)/ (1800 - 100)));
  }
  @media (min-width: 780px) {
    text-align: left;
    margin-right: 20px;
  }
`;

export const ServiceDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  @media (min-width: 780px) {
    width: 300px;
    text-align: right;
  }
`;

export const ServiceLine = styled.div`
  height: 2px;
  background-color: #ccc;
  margin-bottom: 10px;
`;

export const ContainerTitle = styled.h2`
  text-align: left;
  margin: 10px 10px;
    font-weight: 800;
    font-style: normal;
    font-size: 36px;
    
`;

