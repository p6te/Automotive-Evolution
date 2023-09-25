import { SectionContainer } from "src/components/common";
import { sectionIds } from "src/constants/sectionIds";
import { Container, StyledText, SectionTitle, StyledImg } from "./styled";
import car2 from "src/assets/images/car2.png";

const Section2 = () => {
  return (
    <SectionContainer id={sectionIds.section2}>
      <Container>
        <SectionTitle>First car in history</SectionTitle>

        <StyledImg src={car2} alt="car-image" />
        <StyledText>
          The history of the first car dates back to 1885 when Karl Benz, a
          German inventor, built the Benz Patent-Motorwagen, which is considered
          the world's first true automobile. This three-wheeled vehicle was
          powered by an internal combustion engine, marking a significant
          milestone in the development of modern automobiles.
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
