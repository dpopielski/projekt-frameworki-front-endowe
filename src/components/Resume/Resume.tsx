import { FC } from "react";
import styled from "styled-components";
import { ResumeCard } from "./ResumeCard";

export const Resume: FC = () => {
  return (
    <div>
      <div className="flex items-center mb-3">
        <h4 className="text-lg font-semibold w-full">Resume your work</h4>
        <div className="flex justify-end relative items-center w-full mr-8">
          <input
            className="p-0.5 border-2 border-solid rounded-sm"
            placeholder="Filter by title..."
            type="text"
          />
          <img
            className="absolute right-2"
            src="./assets/icons/search.svg"
            alt=""
          />
        </div>
        <div className="flex gap-2 mr-8">
          <img src="./assets/icons/cog.svg" alt="" />
          <span className="flex items-center gap-2">
            Followed
            <img src="./assets/icons/arrow-down.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  );
};
export default Resume;
