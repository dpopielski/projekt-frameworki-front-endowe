import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: space-between;
`;

const LeftSection = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 60px;
    min-height: 64px;
    max-height: 72px;
    background-image: url("./assets/images/img1.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 83.333333%;
  }

  & > span {
    font-size: 12px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    font-size: 10px;
    color: #d4d4d4;
  }

  & > img {
    width: 1rem;
    height: 1rem;
    border-radius: 70px;
  }

  & > p {
    font-size: 12px;
    color: #5d5d5d;
  }
`;

export const Publication: FC = () => {
  return (
    <>
      <Wrapper>
        <LeftSection></LeftSection>
        <RightSection>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nesciunt fuga. Adipisicing elit. Consectetur, nesciunt
            fuga.
          </span>
          <InfoContainer>
            <span>7 jan. 2020</span>
            <img src="./assets/profile.svg" alt="" />
            <p>John Doe</p>
          </InfoContainer>
        </RightSection>
      </Wrapper>
    </>
  );
};
export default Publication;
