import { FC } from "React";
import styled from "styled-components";

import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
// import { ExpandedMenu } from "./ExpandedMenu";

const Wrapper2 = styled(Wrapper)`
  padding: 10px;
`;

const InnerWrapper = styled.div`
  width: 1200px;
`;

export const TopBar: FC = () => {
  return (
    <Wrapper2>
      <InnerWrapper></InnerWrapper>
    </Wrapper2>
  );
};
export default TopBar;
