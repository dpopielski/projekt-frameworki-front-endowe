import { FC } from "react";

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

// const SearchContainer = styled.div`
//   display: flex;
//   position: relative;
//   align-items: center;
//   width: 100%;
// `;

// const SearchComponent = styled.input`
//   text-align: center;
//   padding: 5px;
//   border: 1px solid #dedede;
//   border-radius: 5px;
//   width: 100%;
// `;

export const ExpandedMenu: FC = () => {
  return (
    <nav className="absolute flex flex-col w-full top-9 bg-white">
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
    </nav>
  );
};
export default ExpandedMenu;
