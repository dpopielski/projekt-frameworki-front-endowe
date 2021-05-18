import { FC } from "react";
import styled from "styled-components";
import WorkspaceCard from "./WorkspaceCard";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Workspace: FC = () => {

  return (
    <Wrapper>
      <WorkspaceCard />
      <WorkspaceCard /> 
      <WorkspaceCard /> 
    </Wrapper>
  );
};
export default Workspace;
