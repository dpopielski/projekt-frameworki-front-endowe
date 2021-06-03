import { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import PersonalCard from "./components/PersonalCard/PersonalCard";
import Workspace from "./components/Workspace/Workspace";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import styled from "styled-components";

const App: FC = () => {
  return (
    <Router>
      <main>
        <TopBar />
        <section className="flex flex-col mx-auto w-11/12 lg:w-4/5 xl:flex-row xl:m-0 xl:w-full">
          <aside className="flex flex-row xl:flex-col xl:w-1/6 p-4">
            <PersonalCard />
            <LeftMenu />
          </aside>
          <main className="p-4 flex gap-5 flex-col xl:w-5/6 xl:pr-24">
            <Header />
            <Workspace />
            <Resume />
          </main>
        </section>
      </main>
    </Router>
  );
};

export default App;
