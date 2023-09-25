import { SectionContainer } from "src/components/common";
import { sectionIds } from "src/constants/sectionIds";
import { BlankArea, Container, StyledText, StyledToogleInput } from "./styled";

const Section2 = () => {
  return (
    <SectionContainer id={sectionIds.section2}>
      <Container>
        <BlankArea />
        <StyledText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quae voluptatibus libero blanditiis, totam sint ipsum accusamus
          asperiores voluptate impedit? Alias blanditiis excepturi ipsa
          necessitatibus omnis assumenda asperiores nesciunt repellendus.
        </StyledText>
        {/* <StyledText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quae voluptatibus libero blanditiis, totam sint ipsum accusamus
          asperiores voluptate impedit? Alias blanditiis excepturi ipsa
          necessitatibus omnis assumenda asperiores nesciunt repellendus.
        </StyledText> */}
      </Container>
    </SectionContainer>
  );
};

export default Section2;
