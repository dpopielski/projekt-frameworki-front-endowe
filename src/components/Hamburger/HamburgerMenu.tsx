import { FC, useState } from "react";
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
  const [search, setSearch] = useState("");
  return (
    <StyledMenu open={open}>
      <div className="flex align-center p-1.5 w-full">
        <input
          className="text-xs p-1.5 border-2 border-solid border-gray-100 rounded-sm w-full"
          placeholder="Filter..."
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className="mt-2">
        <span className="text-xs px-2">Platform</span>
        {ExpandedMenuData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
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
        {LeftMenuData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
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
