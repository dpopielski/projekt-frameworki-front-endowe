import { FC } from "react";

export const ExpandedMenu: FC = () => {
  return (
    <div className="absolute flex w-full top-9 bg-white">
      <ul className="flex flex-col gap-4 text-center w-full">
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ul>
    </div>
  );
};
export default ExpandedMenu;
