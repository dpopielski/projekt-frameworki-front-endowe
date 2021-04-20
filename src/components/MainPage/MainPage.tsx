import { FC } from "react";
import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import PersonalCard from "../PersonalCard/PersonalCard";
import styled from "styled-components";

// const Layout = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const LeftBar = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* width: 16.666667%; */
//   padding: 15px;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* width: 83.333333%; */
// `;

const MainPage: FC = () => {
  return (
    <>
      <TopBar />
      <section className="flex flex-col xl:flex-row md:flex-row">
        <aside className="flex flex-row md:w-64 xl:flex-col md:flex-col justify-center xl:w-1/6 p-4">
          <PersonalCard />
          <LeftMenu />
        </aside>
        <main className="bg-gray-300 flex flex-row xl:flex-col md:flex-col justify-center xl:w-5/6 w-full"></main>
      </section>
    </>
  );
};

export default MainPage;
