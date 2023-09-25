import styled from "styled-components";

export const StyledNav = styled.aside`
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 200px;
  z-index: 10;
`;

export const StyledList = styled.ul`
  /* margin: calc(10vh - 40px); */
  position: relative;
  list-style: none;
`;

export const StyledListItem = styled.li`
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  min-width: 16px;
  min-height: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.primary};
  margin: 2rem 0;

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    /* add optional label */
  }

  &.active {
    background-color: ${(props) => props.theme.primary};
    z-index: 5;
  }
`;

export const StyledToogleInput = styled.input.attrs({
  type: "checkbox",
})`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: gray;
  }

  &:checked + label:after {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }
`;

export const StyledToogleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
  background: #ebebeb;
  display: block;
  border-radius: 20px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 18px;
    transition: 0.3s;
  }

  &:active:after {
    width: 22px;
    background: #fff;
  }
`;

export const StyledToggleButton = styled.div`
  translate: 20px;
  position: absolute;
  top: 0;
`;
