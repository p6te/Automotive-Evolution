import { SectionContainer } from "src/components/common";
import { sectionIds } from "../../../constants/sectionIds";

const TitleSection = () => {
  return (
    <section id={sectionIds[sectionIds.section1]}>
      <SectionContainer>Title</SectionContainer>
    </section>
  );
};

export default TitleSection;
