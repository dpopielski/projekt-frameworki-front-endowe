import { FC } from 'react';
import Publication from './Publication';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  border-radius: 4px;
  overflow: hidden;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url('./assets/images/img1.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 200px;
  width: 100%;

  @media (min-width: 768px) {
    height: inherit;
    width: 50%;
  }
  @media (min-width: 1280px) {
    height: inherit;
    width: 30%;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: inherit;
  padding: 0.5rem 1rem;

  & > p {
    font-size: 16px;
  }
  & > span {
    font-size: 14px;
  }
  & > div {
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    height: 100%;
  }
`;

const LeftSectionInner = styled.div`
  width: 83.333333%;
  padding: 0 0 1.2rem 1rem;
  & > p {
    color: #fff;
    font-size: 10px;
    margin-bottom: 8px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > span {
    font-size: 10px;
    color: #ececec;
  }

  & > img {
    width: 1rem;
    height: 1rem;
    border-radius: 70px;
  }

  & > p {
    font-size: 12px;
    color: #ececec;
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
            <InfoContainer>
              <span>7 jan. 2020</span>
              <img src='./assets/profile.svg' alt='' />
              <p>John Doe</p>
            </InfoContainer>
          </LeftSectionInner>
        </LeftSection>
        <RightSection>
          <p>Lastes publications</p>
          <div>
            <Publication />
            <Publication />
            <Publication />
          </div>
          <Link to={'/publications'}>
            <span>See more publications</span>
          </Link>
        </RightSection>
      </Wrapper>
    </>
  );
};
export default Header;
