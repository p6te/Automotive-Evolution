import { SectionContainer } from "src/components/common";
import { sectionIds } from "src/constants/sectionIds";
import car1 from "src/assets/images/car1.png";
import { StyledImg, StyledTitle, Flexbox, Title } from "./styled";
import { useScroll, useTransform } from "framer-motion";

const TitleSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [1, 3000]);

  return (
    <SectionContainer id={sectionIds.section1}>
      <Flexbox>
        <StyledTitle>Automotive</StyledTitle>
        <Title style={{ x }}> Evolution</Title>
        {/* 
        <StyledTitle
          animate={{
            x: -1000,
          }}
          initial={{
            x: 500,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
          }}
        >
          Evolution
        </StyledTitle> */}
      </Flexbox>
      <StyledImg src={car1} alt="car-image" />
    </SectionContainer>
  );
};

export default TitleSection;
