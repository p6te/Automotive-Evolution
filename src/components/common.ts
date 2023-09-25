import styled from "styled-components";

export const PageContainer = styled.div``;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  min-height: 100vh;
  border: 1px solid black;
  scroll-snap-align: center;
  background-color: ${(props) => props.theme.background};
  transition: all 0.3s ease;
  position: relative;
`;
