import styled from "styled-components";

export const PageContainer = styled.div``;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  scroll-snap-align: center;
  background-color: ${(props) => props.theme.background};
  transition: all 0.3s ease;
  min-height: 100vh;

  & .gallery {
    margin: auto 0;
    padding: 0 150px;
    width: 100%;

    & h1 {
      margin-bottom: 30px;
      font-size: 2rem;
    }
  }
  & button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
    appearance: none;
  }
`;
