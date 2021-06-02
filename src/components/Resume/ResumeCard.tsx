import { FC } from "react";
import styled from "styled-components";
import { ApiResumeType } from "../../types/Types";

interface ResumeCardProps {
  posts: Array<ApiResumeType>;
  loading: boolean;
  filter: string;
}

export const ResumeCard: FC<ResumeCardProps> = ({ posts, loading, filter }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts
        .filter((elem) => elem.title.toLowerCase().includes(filter))
        .map(({ id, title, body }) => (
          <div
            key={id}
            className="w-full px-4 py-2 bg-white rounded-md shadow-sm"
          >
            <p className="font-bold">{title}</p>
            <span className="text-xs">{body}</span>
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
        ))}
    </>
  );
};
export default ResumeCard;
