import { FC } from "react";
import styled from "styled-components";

// const LeftMenuContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #f4f4f4;
//   padding: 20px;
// `;

// const Card = styled.div`
//   height: 200px;
//   width: 100%;
//   padding: 10px;
//   background-color: #ffffff;
// `

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

export const LeftMenu: FC = () => {
  return (
    <aside className="hidden xl:flex xl:flex-col xl:p-3 xl:gap-4">
      {LeftMenuData.map((elem, index) => (
        <div key={index} className="flex align-center">
          <img className="w-6 h-auto my-auto mr-4" src={elem.icone} alt="" />
          <span className="text-xs font-normal my-auto w-full">
            {elem.title}
          </span>
        </div>
      ))}
    </aside>
  );
};
export default LeftMenu;
