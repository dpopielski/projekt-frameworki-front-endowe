import { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import PersonalCard from "../PersonalCard/PersonalCard";
import Workspace from "../Workspace/Workspace";
import Header from "../Header/Header";
import styled from "styled-components";

const MainPage: FC = () => {
  return (
    <Router>
      <TopBar />
      <section className="flex flex-col mx-auto w-11/12 lg:w-4/5 xl:flex-row xl:m-0 xl:w-full">
        <aside className="flex flex-row xl:flex-col xl:w-1/6 p-4">
          <PersonalCard />
          <LeftMenu />
        </aside>
        <main className="p-4 flex gap-5 flex-col xl:w-5/6 xl:pr-24">
          <Header />
          <Workspace />
        </main>
      </section>
    </Router>
  );
};

export default MainPage;
