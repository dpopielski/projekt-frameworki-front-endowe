import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  height: 50px;
`;

const LeftSection = styled.div`
  width: 16.666667%;
  background-image: url("./assets/images/img1.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const RightSection = styled.div`
  width: 83.333333%;
  & > p {
    font-size: 12px;
  }

  & > span {
    display: block;
    font-size: 10px;
  }
`;

export const Publication: FC = () => {
  return (
    <>
      <Wrapper>
        <LeftSection></LeftSection>
        <RightSection>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nesciunt fuga.
          </p>
          <span>11.02.2021</span>
        </RightSection>
      </Wrapper>
    </>
  );
};
export default Publication;
