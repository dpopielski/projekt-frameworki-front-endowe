import { FC } from "react";
import styled from "styled-components";
import { bool } from "prop-types";

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

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export const HamburgerMenu: FC = () => {
  return (
    <StyledMenu>
      <a href="/">
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
      </a>
      {/* <nav className="absolute flex flex-col w-full top-9 bg-white">
        <div className="flex align-center p-1.5 w-full">
          <input
            className="text-xs p-1.5 border-2 border-solid border-gray-100 rounded-sm w-full"
            placeholder="Filter..."
            type="text"
          />
        </div>
        <span className="text-xs px-2">Platform</span>
        {ExpandedMenuData.map((elem, index) => (
          <ul
            key={index}
            className="flex justify-start align-center p-2 gap-4 w-full hover:bg-gray-300"
          >
            <img src={elem.icone} alt="" />
            <li className="text-sm">{elem.title}</li>
          </ul>
        ))}
      </nav> */}
    </StyledMenu>
  );
};
// HamburgerMenu.propTypes = {
//   open: bool.isRequired,
// };
export default HamburgerMenu;