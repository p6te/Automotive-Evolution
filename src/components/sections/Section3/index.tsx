import { SectionContainer } from "src/components/common";
import { sectionIds } from "src/constants/sectionIds";
import { AxisContainer, Container, SideContainer, Text1 } from "./styled";
import { useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const Section3 = () => {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 0.7", "1.3 1"],
  });

  const isInView1 = useInView(text1Ref, { once: true });
  const isInView2 = useInView(text2Ref, { once: true });
  const isInView3 = useInView(text3Ref, { once: true });
  const isInView4 = useInView(text4Ref, { once: true });
  const isInView5 = useInView(text5Ref, { once: true });

  console.log(scrollYProgress);

  return (
    <SectionContainer id={sectionIds.section3} ref={sectionRef}>
      <Container>
        <SideContainer>
          <Text1
            ref={text1Ref}
            style={{
              transform: isInView1 ? "none" : "translateX(-500px)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Mass Production Revolution: In the early 20th century, Henry Ford's
            introduction of the assembly line technique with the Model T
            revolutionized the industry by making cars more affordable and
            accessible to the general public.
          </Text1>
          <Text1
            ref={text3Ref}
            style={{
              transform: isInView3 ? "none" : "translateX(-500px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Post-War Boom: After World War II, there was a surge in car
            production and ownership, driven by economic prosperity and the
            development of the interstate highway system in the United States.
          </Text1>
          <Text1
            ref={text5Ref}
            style={{
              transform: isInView5 ? "none" : "translateX(-500px)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Autonomous Vehicles and Sustainability: The current era is marked by
            the exploration of autonomous vehicles and a growing emphasis on
            sustainability, with electric cars and renewable energy sources
            gaining prominence in the automotive industry.
          </Text1>
        </SideContainer>

        <AxisContainer style={{ scaleY: scrollYProgress }} />

        <SideContainer style={{ justifyContent: "space-evenly" }}>
          <Text1
            ref={text2Ref}
            style={{
              transform: isInView2 ? "none" : "translateX(500px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Technological Advancements: The 1920s and 1930s saw significant
            technological advancements in automobiles, including innovations
            like hydraulic brakes, automatic transmissions, and the
            popularization of V8 engines.
          </Text1>

          <Text1
            ref={text4Ref}
            style={{
              transform: isInView4 ? "none" : "translateX(500px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Oil Crises and Alternative Fuels: The 1970s oil crises spurred
            research into alternative fuels and energy-efficient vehicles,
            leading to the development of hybrid and electric cars.
          </Text1>
        </SideContainer>
      </Container>
    </SectionContainer>
  );
};

export default Section3;
