import styled from "styled-components";

export const PageContainer = styled.div``;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;

  border: 1px solid black;
  scroll-snap-align: center;
  background-color: ${(props) => props.theme.background};
  transition: all 0.3s ease;
`;
