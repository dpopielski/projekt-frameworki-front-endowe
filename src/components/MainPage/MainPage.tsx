import TopBar from "../TopBar/TopBar";
import LeftMenu from "../LeftMenu/LeftMenu";
import { Reset } from "styled-reset";

function MainPage() {
  return (
    <div>
      <Reset />
      <TopBar />
      <LeftMenu />
    </div>
  );
}

export default MainPage;
