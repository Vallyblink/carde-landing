import MainSectionSlider from "./sections/MainSection/mainSection"
import data from "../data/mainSlider.json"
import infodata from "../data/infoSlider.json"
import Header from "./header/header";
import ContentSection from "./sections/ContentSection/ContentSection";

export const App = () => {
  return (
    <div>
    <Header/>
      <MainSectionSlider sliders={data} />
      <ContentSection infocards={infodata} />
    </div>
  );
};
