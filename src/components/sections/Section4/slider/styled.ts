import { HTMLMotionProps, motion } from "framer-motion";
import styled from "styled-components";

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  margin-top: 10vh;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
`;

export const Item = styled(motion.div)`
  height: 30rem;
  min-width: 40rem;
  padding: 40px;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    pointer-events: none;
    transition: 0.2;
  }
`;

export const CarInfo = styled(motion.div)`
  position: absolute;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(242, 244, 243, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 2.2rem;
  }
  & h3 {
    font-size: 1.8rem;
  }
`;

// passing props example
interface Props extends HTMLMotionProps<"div"> {
  height?: number;
}

const Container = styled(motion<Props>("div"))`
  height: ${({ height }) => height};
`;

export const StyledButton = styled(motion.button)`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledArrow = styled(motion.img)`
  background-color: lightgray;
  border-radius: 50%;

  padding: 10%;
  width: 100px;
`;

export const StyledArrowLeft = styled(motion.img)`
  background-color: lightgray;
  border-radius: 50%;
  padding: 10%;
  width: 100px;

  transform: scaleX(-1);
`;

export const ButtonsContainer = styled(motion.div)`
  width: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  gap: 10px;
`;
