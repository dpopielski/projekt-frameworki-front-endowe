import { FC } from "react";
import styled from "styled-components";
import LeftMenu from "../LeftMenu/LeftMenu";

const ExpandedMenuData = [
  {
    title: "Client contract",
    path: "#",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "Supplier contract",
    path: "#",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "Corporate",
    path: "#",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "Group Norms",
    path: "#",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "Real estate contracts",
    path: "#",
    icone: `./assets/icons/publications.svg`,
  },
];

const LeftMenuData = [
  {
    title: "Publications",
    path: "#",
    icone: `./assets/icons/publications.svg`,
    cName: "aside-text",
  },
  {
    title: "Ecosystem",
    path: "#",
    icone: `./assets/icons/ecosystem.svg`,
    cName: "aside-text",
  },
  {
    title: "Entities",
    path: "#",
    icone: `./assets/icons/entities2.svg`,
    cName: "aside-text",
  },
];

interface Props {
  open: boolean;
}

interface HamburgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: #f5f5f5;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 4rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 33.333333%;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) => (open ? "0px 1px 10px #999;" : "none")};

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const HamburgerMenu: FC<HamburgerProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {/* <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a> */}
      <div className="flex align-center p-1.5 w-full">
        <input
          className="text-xs p-1.5 border-2 border-solid border-gray-100 rounded-sm w-full"
          placeholder="Filter..."
          type="text"
        />
      </div>

      <div className="mt-2">
        <span className="text-xs px-2">Platform</span>
        {ExpandedMenuData.map((elem, index) => (
          <ul
            key={index}
            className="flex justify-start align-center p-2 gap-4 w-full hover:bg-gray-300 cursor-pointer"
          >
            <img src={elem.icone} alt="" />
            <li className="text-sm">{elem.title}</li>
          </ul>
        ))}
      </div>

      <div className="">
        {LeftMenuData.map((elem, index) => (
          <ul
            key={index}
            className="flex justify-start align-center p-2 gap-4 w-full hover:bg-gray-300 cursor-pointer"
          >
            <img src={elem.icone} alt="" />
            <li className="text-sm">{elem.title}</li>
          </ul>
        ))}
      </div>
    </StyledMenu>
  );
};
export default HamburgerMenu;
