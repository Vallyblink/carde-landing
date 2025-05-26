import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import MainSectionSlider from './sections/MainSection/mainSection';
import ContentSection from './sections/ContentSection/ContentSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import LocationSection from './sections/LocationSection/LocationSection';
import FeedbackSection from './sections/FeedbackSection/FeedbackSection';
import data from '../data/mainSlider.json';
import infodata from '../data/infoSlider.json';
import servicedata from '../data/servicesSection.json';
import feedback from '../data/feedback.json';
import TemporaryPage from './temporaryPage/temporaryPage';

const Home = () => {
  return (
    <>
      {/* <MainSectionSlider sliders={data} />
      <ContentSection infocards={infodata} />
      <ServicesSection services={servicedata} />
      <FeedbackSection feedback={feedback} />
      <LocationSection /> */}
      <TemporaryPage/>
    </>
  );
};

 export const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}>
        {/* <Route path="main" element={<MainSectionSlider sliders={data} />} />
        <Route path="content" element={<ContentSection infocards={infodata} />} />
        <Route path="services" element={<ServicesSection services={servicedata} />} />
        <Route path="feedback" element={<FeedbackSection feedback={feedback} />} />
        <Route path="location" element={<LocationSection />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

