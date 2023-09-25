import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    " sec1 sec1 ."
    ". sec2 sec2"
    "sec3 . . ";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 5rem;
  grid-area: sec1;
`;

export const StyledText = styled.h5`
  font-size: 2rem;
  font-weight: 500;
  grid-area: sec2;

  margin-right: 100px;
`;

export const StyledImg = styled.img`
  grid-area: sec3;
  width: min-content;
  position: relative;

  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
