import { FC } from "React";
import styled from "styled-components";

import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
// import { ExpandedMenu } from "./ExpandedMenu";

const Wrapper2 = styled(Wrapper)`
  padding: 10px;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 10px #999;
  z-index: 999;
`;

const InnerWrapper = styled.div`
  width: 1200px;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TopBar: FC = () => {
  return (
    <Wrapper2>
      <InnerWrapper>
        <HomeContainer>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/house.png"}
            alt="img"
          />
          <h1>Home</h1>
        </HomeContainer>
      </InnerWrapper>
    </Wrapper2>
  );
};
export default TopBar;
