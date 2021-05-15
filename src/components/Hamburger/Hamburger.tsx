import { FC } from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 8px;
  margin-top: 4px;

  @media (min-width: 1280px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #161616;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const Hamburger: FC = () => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
// Hamburger.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };

export default Hamburger;
