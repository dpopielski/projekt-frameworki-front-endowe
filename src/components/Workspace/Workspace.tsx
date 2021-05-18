import { FC } from "react";
import styled from "styled-components";
import WorkspaceCard from "./WorkspaceCard";
import Carousel from 'react-elastic-carousel'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Workspace: FC = () => {
  return (
    <Wrapper>
      <Carousel isRTL={false} itemsToShow={4} showArrows={false} itemPosition={"START"} pagination={false}>
        <WorkspaceCard>1</WorkspaceCard>
        <WorkspaceCard>2</WorkspaceCard>
        <WorkspaceCard>3</WorkspaceCard>
        <WorkspaceCard>4</WorkspaceCard>
        <WorkspaceCard>5</WorkspaceCard>
        <WorkspaceCard>6</WorkspaceCard>
      </Carousel>
    </Wrapper>
  );
};
export default Workspace;
