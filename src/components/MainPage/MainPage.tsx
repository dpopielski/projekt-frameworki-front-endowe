import { FC } from "react";
import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import PersonalCard from "../PersonalCard/PersonalCard";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`

const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 16.666667%;
  padding: 15px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 83.333333%;
`

const MainPage: FC = () => {
  return (
    <>
      <TopBar />
      <Layout>
        <LeftBar>
          <PersonalCard />
          <LeftMenu />
        </LeftBar>
        <Content></Content>
      </Layout>
    </>
  );
}

export default MainPage;
