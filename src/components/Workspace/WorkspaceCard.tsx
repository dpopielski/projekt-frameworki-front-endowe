import { FC } from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
`;

const CardInner = styled.div``;

export const WorkspaceCard: FC = () => {
  return (
    <>
      <Card></Card>
    </>
  );
};
export default WorkspaceCard;
