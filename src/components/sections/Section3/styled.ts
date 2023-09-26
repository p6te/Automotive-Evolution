import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const AxisContainer = styled(motion.div)`
  width: 8px;
  height: 70%;
  background: red;
  align-self: center;
  transform-origin: top;
`;

export const Text1 = styled.h5`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Text2 = styled.h5`
  font-size: 2rem;
  font-weight: 500;
  grid-area: sec2;
`;

export const Text3 = styled.h5`
  font-size: 2rem;
  font-weight: 500;
  grid-area: sec3;
`;

export const Text4 = styled.h5`
  font-size: 2rem;
  font-weight: 500;
  grid-area: sec4;
`;

export const Text5 = styled.h5`
  font-size: 2rem;
  font-weight: 500;
  grid-area: sec5;
`;

export const Line1 = styled.div`
  width: 10px;
  height: 15vh;
  background-color: tomato;
`;
export const Line2 = styled.div`
  width: 10px;
  height: 15vh;
  background-color: tomato;
`;
export const Line3 = styled.div`
  width: 10px;
  height: 15vh;
  background-color: tomato;
`;
export const Line4 = styled.div`
  width: 10px;
  height: 15vh;
  background-color: tomato;
`;
export const Line5 = styled.div`
  width: 10px;
  height: 15vh;
  background-color: tomato;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 0 5vw;
`;
