import { FC } from "react";
import styled from "styled-components";

interface Props {
  open: boolean;
}

interface HamburgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const StyledBurger = styled.button<Props>`
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

  @media (min-width: 1280px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  & > div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: #0d0c1d;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Hamburger: FC<HamburgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Hamburger;
