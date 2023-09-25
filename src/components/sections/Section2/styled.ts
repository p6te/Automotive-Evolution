import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "title green yellow "
    "grey purple purple purple"
    "orange orange black black";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

export const StyledToogleInput = styled.h2`
  font-size: 5rem;
  grid-area: title;
`;

export const StyledText = styled.div`
  font-size: 2rem;
  grid-area: a;
`;
export const BlankArea = styled.div`
  grid-area: blank;
  background-color: tomato;
  min-width: 100px;
  min-height: 50px;
`;
