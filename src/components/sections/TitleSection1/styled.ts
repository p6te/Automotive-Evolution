import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledImg = styled.img`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  width: 50rem;
  position: absolute;
  right: 12rem;
  bottom: 0;
  right: 0;
`;

export const StyledTitle = styled(motion.h1)`
  font-size: 12rem;
  font-weight: 700;
  overflow: visible;
`;

export const Flexbox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
`;
export const Title = styled(motion.h1)`
  color: white;
  font-size: 12rem;
  z-index: 1;
  margin: 0;
  white-space: nowrap;

  transition: all 2s ease-in-out;
`;
