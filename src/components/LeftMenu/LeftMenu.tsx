import { FC } from "React";
import styled from "styled-components";

const LeftMenuContainer = styled.div`
  height: 100vh;
  width: 25%;
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Card = styled.div`
  height: 200px;
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
`


export const LeftMenu: FC = () => {
  return (
    <LeftMenuContainer>
      <Card></Card>
    </LeftMenuContainer>
  );
};

export default LeftMenu;