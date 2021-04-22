import { FC } from "react";

const PersonData = {
  name: "Humberta Swift",
  jobTitle: "Job title",
  company: "Company",
  img: `${process.env.PUBLIC_URL} /assets/profile.svg`,
};

const PersonalNavData = [
  {
    title: "Your network",
    path: "",
    icone1: `${process.env.PUBLIC_URL} /assets/icons/network.png`,
    icone2: `${process.env.PUBLIC_URL} /assets/icons/network.svg`,
    cName: "aside-text",
  },
  {
    title: "Your Publications",
    path: "",
    icone1: `${process.env.PUBLIC_URL} /assets/icons/publications.png`,
    icone2: `${process.env.PUBLIC_URL} /assets/icons/plus.png`,
    cName: "aside-text",
  },
];

export const PersonalCard: FC = () => {
  return (
    <article className="w-full bg-white rounded shadow">
      <div className="border-solid border-b-2 border-gray-200">
        <div className="p-3">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src={PersonData.img}
            alt=""
          />
          <p className="flex justify-center text-sm my-1">{PersonData.name}</p>
          <div className="flex justify-center">
            <span className="text-xs font-thin">{PersonData.jobTitle}</span>
            <span className="text-xs mx-1">-</span>
            <span className="text-xs font-thin">{PersonData.company}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-3 gap-2">
        {PersonalNavData.map((elem, index) => (
          <div
            key={index}
            className="flex align-center justify-center md:justify-between"
          >
            <img
              className="w-4 h-auto my-auto mr-1.5"
              src={elem.icone1}
              alt=""
            />
            <span className="font-normal my-auto w-24 md:w-full text-xs mr-1.5">
              {elem.title}
            </span>
            <img
              className="float-right w-8 h-5 p-1 rounded-md border-solid border border-gray-500"
              src={elem.icone2}
              alt=""
            />
          </div>
        ))}
      </div>
    </article>
  );
};
export default PersonalCard;
