import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import styled from "styled-components";

const Layout = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
`

const LeftBar = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100vh;
  padding: 20px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  background-color: red;
`

function MainPage() {
  return (
    <>
      <TopBar />
      <Layout>
        <LeftBar>
          <LeftMenu></LeftMenu>
        </LeftBar>
        <Content></Content>
      </Layout>
    </>
  );
}

export default MainPage;
