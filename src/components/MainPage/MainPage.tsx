import { FC } from "react";
import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import PersonalCard from "../PersonalCard/PersonalCard";
import Header from "../Header/Header";
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
      <section className="flex flex-col mx-auto w-11/12 lg:w-4/5 xl:flex-row xl:m-0 xl:w-full">
        <aside className="flex flex-row xl:flex-col justify-center xl:w-1/6 p-4">
          <PersonalCard />
          <LeftMenu />
        </aside>
        <main className="p-4 flex flex-row xl:flex-col xl:w-5/6 xl:pr-24">
          <Header />
        </main>
      </section>
    </>
  );
};

export default MainPage;
