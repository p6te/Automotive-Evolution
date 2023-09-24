import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.aside`
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 200px;
`;

export const StyledList = styled.ul`
  position: relative;
  list-style: none;
`;

export const StyledListItem = styled.li`
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  min-width: 16px;
  min-height: 16px;
  border-radius: 8px;
  border: 1px solid gray;
  margin: 2rem 0;

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    /* add optional label */
  }

  &.active {
    background-color: gray;
    z-index: 5;
  }
`;

export const StyledLink = styled(Link)`
  a.active {
  }
`;
