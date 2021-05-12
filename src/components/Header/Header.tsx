import { FC } from "react";
import Publication from "./Publication";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url("./assets/images/img1.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: inherit;
  width: 33.333333%;
`;

const RightSection = styled.div`
  background-color: pink;
  height: inherit;
  width: 66.666667%;
  padding: 0.5rem;
  & > p {
    font-size: 16px;
    height: 10%;
  }
  & > span {
    font-size: 12px;
    height: 10%;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
  }
`;

const LeftSectionInner = styled.div`
  width: 83.333333%;
  padding: 0 0 1rem 0.5rem;
  & > p {
    color: #fff;
    font-size: 10px;
  }
`;

export const Header: FC = () => {
  return (
    <>
      <Wrapper>
        <LeftSection>
          <LeftSectionInner>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              magni, nemo tempora quia corrupti optio fugit vero.
            </p>
          </LeftSectionInner>
        </LeftSection>
        <RightSection>
          <p>Lastes publications</p>
          <div>
            <Publication />
            <Publication />
            <Publication />
          </div>
          <span>See more publications</span>
        </RightSection>
      </Wrapper>
    </>
  );
};
export default Header;
