import { SectionContainer } from "src/components/common";
import { sectionIds } from "src/constants/sectionIds";
import { Container } from "./styled";

const Section3 = () => {
  return (
    <SectionContainer id={sectionIds.section2}>
      <Container>
        <h1>Historia w Kilku Słowach</h1>
      </Container>
    </SectionContainer>
  );
};

export default Section3;
