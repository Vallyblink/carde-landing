import MainSectionSlider from "./sections/MainSection/mainSection"
import data from "../data/mainSlider.json"
import Header from "./header/header";
import ContentSection from "./sections/InfoSection/infoSection";

export const App = () => {
  return (
    <div>
    <Header/>
      <MainSectionSlider sliders={data} />
      <ContentSection/>
    </div>
  );
};
