import { FC } from "react";
import styled from "styled-components";

export const ResumeCard: FC = () => {
  return (
    <div className="w-full px-4 py-2 bg-white rounded-md shadow-sm">
      <p className="font-bold">Lorem Ipsum</p>
      <span className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolor ea expedita tempore iure vitae assumenda impedit eligendi
        praesentium molestiae ipsam sunt, sit, voluptatum aliquid tenetur
        quaerat illo, minima ullam.
      </span>
      <div className="flex gap-2 ml-1">
        <span className="flex items-center gap-2 text-xs">
          <img className="w-4 h-4" src="./assets/profile.svg" alt="" />
          Lorem Ipsum
        </span>
        ·
        <span className="flex items-center gap-2 text-xs">
          <img className="w-4 h-4" src="./assets/profile.svg" alt="" />
          Lorem Ipsum
        </span>
        ·
        <span className="flex items-center gap-2 text-xs text-gray-400">
          Updated 3 days ago by John Doe
        </span>
      </div>
    </div>
  );
};
export default ResumeCard;
