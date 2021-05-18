import { FC } from "react";
import styled from "styled-components";

const Card = styled.div`
position: relative;
  height: 250px;
  width: 350px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
`;

const CardImg = styled.div`
  background-image: url("./assets/images/img1.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 45%;
`;

const Content = styled.div`
height: 55%;
  padding: 10px;

  div {
    height: 60%;

    p { 
      margin-left: 35%;
    }
  }

  span { 
    display: flex;
    gap: 15px;
  }
`;

const CardInnerImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  top: 75px;
  height: 100px;
  width: 100px;
  border-radius: 5px;
  background-color: #fff;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    img { 
      width: 50px;
    }
`;

export const WorkspaceCard: FC = () => {
  return (
    <>
      <Card>
        <CardInnerImg><img src="./assets/icons/entities.png" alt="" /></CardInnerImg>
        <CardImg></CardImg>
        <Content>
          <div>
            <p>Client contract</p>
          </div>
          
          <span>
            <img src="./assets/icons/people.png" alt="" />
            Contract -
            <img src="./assets/icons/people.png" alt="" />
            150 users
          </span>

          <span>Last update 2 days ago</span>

        </Content>
      </Card>
    </>
  );
};
export default WorkspaceCard;
