import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import { Reset } from "styled-reset";
import styled from "styled-components";

const Layout = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
`

const LeftBar = styled.div`
  width: 40%;
  height: 100vh;
  background-color: blue;
`

const Content = styled.div`
  width: 60%;
  background-color: red;
`

function MainPage() {
  return (
    <>
      <Reset />
      <TopBar />
      <Layout>
        <LeftBar>
          <LeftMenu />
        </LeftBar>
        <Content></Content>
      </Layout>
    </>
  );
}

export default MainPage;
