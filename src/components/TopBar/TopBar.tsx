import { FC } from "react";
import styled from "styled-components";
import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import useDropdown from "react-dropdown-hook";
import { ExpandedMenu } from "./ExpandedMenu";

const TopBarWrapper = styled(Wrapper)`
  /* justify-content: space-between; */
  width: 100%;
  height: auto;
  background-color: ${Colors.white};
  box-shadow: 0px 1px 10px #999;
  z-index: 999;
`;

const WrapperInner = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
  }
`;

const LeftSection = styled.div`
  width: 21%;
  margin-right: 4%;
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
  position: relative;
  width: 100%;
  cursor: pointer;
  & > img {
    margin-right: 10px;
  }
`;

const HomeInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
`;

const SearchComponent = styled.input`
  text-align: center;
  padding: 5px;
  border: 1px solid #dedede;
  border-radius: 5px;
  width: 100%;
`;

const SearchIcone = styled.img`
  position: absolute;
  right: 5px;
`;

const RightIconsContainer = styled.div`
  display: flex;

  & > img {
  }
`;

const IconsBackground = styled.div`
  background-color: #d4d4d4;
  width: 40px;
  height: 40px;
  border-radius: 70px;
  margin-left: 10px;

  & > img {
    padding: 8px;
  }
`;

export const TopBar: FC = () => {
  // const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown;

  // const menuHandler = () => {
  //   toggleDropdown();
  // };

  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
  ] = useDropdown();

  return (
    <TopBarWrapper>
      <WrapperInner>
        <LeftSection ref={wrapperRef}>
          <MainLogo src="./assets/logo.png" alt="img"></MainLogo>
          <HomeContainer onClick={toggleDropdown}>
            <img src="./assets/icons/house.svg" alt="img" />
            <p>Home</p>
            <HomeInner>
              <img src="./assets/icons/arrow-down.svg" alt="" />
            </HomeInner>
            {dropdownOpen && <>{<ExpandedMenu />}</>}
          </HomeContainer>
        </LeftSection>
        <CenterSection>
          <SearchContainer>
            <SearchComponent placeholder="Search"></SearchComponent>
            <SearchIcone
              src="./assets/icons/search.svg"
              alt="img"
            ></SearchIcone>
          </SearchContainer>
        </CenterSection>
        <RightSection>
          <RightIconsContainer>
            <img src="./assets/icons/house2.svg" alt="" />
            <IconsBackground>
              <img src="./assets/icons/comments.svg" alt="" />
            </IconsBackground>
            <IconsBackground>
              <img src="./assets/icons/bell.svg" alt="" />
            </IconsBackground>
          </RightIconsContainer>
        </RightSection>
      </WrapperInner>
    </TopBarWrapper>
  );
};
export default TopBar;
