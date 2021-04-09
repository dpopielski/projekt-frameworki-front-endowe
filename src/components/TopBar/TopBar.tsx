import { FC } from "React";
import styled from "styled-components";

import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
// import { ExpandedMenu } from "./ExpandedMenu";

const TopBarWrapper = styled(Wrapper)`
  /* justify-content: space-between; */
  width: auto;
  height: auto;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 10px #999;
  z-index: 999;
`;

const LeftSection = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CenterSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MainLogo = styled.img`
  height: 35px;
  margin-left: 10px;
  margin-right: 30px;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  &>img {
    margin-right: 10px;
  }
`;

const HomeInner = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-end;

  &>img {
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const SearchComponent = styled.input`
  text-align: center;
  padding: 5px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

const SearchIcone = styled.img`
  position: absolute;
  right: 5px;
`;

const RightIconsContainer = styled.div`
  display: flex;

  &>img { 

  }
`;

const IconsBackground = styled.div`
  background-color: #d4d4d4;
  width: 40px;
  height: 40px;
  border-radius: 70px;
  margin-left: 10px;

  &>img {
    padding: 8px;
  }
`;

export const TopBar: FC = () => {
  return (
    <TopBarWrapper>
        <LeftSection>
          <MainLogo
            src={process.env.PUBLIC_URL + "/assets/logo.png"} 
            alt="img"
          >
          </MainLogo>
          <HomeContainer>
            <img
              src={process.env.PUBLIC_URL + "/assets/icons/house.svg"}
              alt="img"
            />
            <p>Home</p>
            <HomeInner>
              <img 
                src={process.env.PUBLIC_URL + "/assets/icons/arrow-down.svg"} 
                alt=""
              />
            </HomeInner>
          </HomeContainer>
        </LeftSection>
        <CenterSection>
          <SearchContainer>
          <SearchComponent 
          placeholder="Search"
          >
          </SearchComponent>
          <SearchIcone
            src={process.env.PUBLIC_URL + "/assets/icons/search.svg"} 
            alt="img"
            >
          </SearchIcone>
        </SearchContainer>
        </CenterSection>
        <RightSection>
          <RightIconsContainer>
          <img 
            src={process.env.PUBLIC_URL + "/assets/icons/house2.svg"} 
            alt=""
          />
          <IconsBackground>
            <img src={process.env.PUBLIC_URL + "/assets/icons/comments.svg"} 
            alt=""/>
          </IconsBackground> 
          <IconsBackground>
            <img src={process.env.PUBLIC_URL + "/assets/icons/bell.svg"} 
            alt=""/>
          </IconsBackground>
        </RightIconsContainer>
        </RightSection>
    </TopBarWrapper>
  );
};
export default TopBar;
