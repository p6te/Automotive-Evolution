import { SectionContainer } from "src/components/common";
import { sectionIds } from "src/constants/sectionIds";
import Slider from "./slider";

const Section4 = () => {
  return (
    <SectionContainer id={sectionIds.section4}>
      <div className="gallery">
        <h1>The Fastest Cars of Every Decade</h1>
        <Slider />
      </div>
    </SectionContainer>
  );
};

export default Section4;
