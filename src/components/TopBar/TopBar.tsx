import { FC } from "React";
import styled from "styled-components";

import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
// import { ExpandedMenu } from "./ExpandedMenu";

const TopBarWrapper = styled(Wrapper)`
  position: fixed;
  width: 100%;
  padding: 10px;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 10px #999;
  z-index: 999;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const MainLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 30px;

  &>img { 
    height: 35px;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  &>img {
    margin-right: 15px;
  }
`;

const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;

  &>p {
    margin-right: 100px;
  }
  

  &>img {
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30%;
  margin-right: 20px;
`;

const SearchComponent = styled.input`
  text-align: center;
  padding: 5px;
  width: 100%;
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
    margin-right: 10px;
  }
`;

const IconsBackground = styled.div`
  background-color: #d4d4d4;
  padding: 5px;
  margin-right: 10px;
  border-radius: 50%;
`;


export const TopBar: FC = () => {
  return (
    <TopBarWrapper>
      <InnerWrapper>
        <MainLogoContainer>
          <img 
            src={process.env.PUBLIC_URL + "/assets/logo.png"} 
            alt="img"
          />
        </MainLogoContainer>
        <HomeContainer>
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/house.svg"}
            alt="img"
          />
          <HomeInner>
            <p>Home</p>
            <img 
              src={process.env.PUBLIC_URL + "/assets/icons/arrow-down.svg"} 
              alt=""
            />
          </HomeInner>
        </HomeContainer>
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
      </InnerWrapper>
    </TopBarWrapper>
  );
};
export default TopBar;
