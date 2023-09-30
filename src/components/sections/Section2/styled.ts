import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: url("src/assets/images/blueprint1.jpg");
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: contain;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 5rem;
  flex-shrink: 2;
  margin-top: 10%;
`;

export const StyledText = styled.h5`
  font-size: 1.3rem;
  font-weight: 500;
  flex-shrink: 1;
`;

export const StyledImg = styled.img`
  position: absolute;

  max-height: 80vh;
  margin: auto;

  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  margin-right: 130px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`;
