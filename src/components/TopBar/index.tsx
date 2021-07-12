import { FC, useState, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import useDropdown from 'react-dropdown-hook';
import { ExpandedMenu } from '../ExpandedMenu';
import Hamburger from '../Hamburger';
import HamburgerMenu from '../HamburgerMenu';
import { useOnClickOutside } from '../../hooks/hooks';
import { Link } from 'react-router-dom';

const TopBarWrapper = styled(Wrapper)`
  position: sticky;
  top: 0;
  justify-content: flex-start;
  width: 100%;
  z-index: 40;
  box-shadow: 0px 1px 10px #999;
  background-color: ${Colors.white};
  padding: 10px;
`;

const WrapperInner = styled.div`
  display: none;

  @media (min-width: 1280px) {
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
    margin-right: 12px;
    cursor: pointer;
  }
`;

const IconsBackground = styled.div`
  position: relative;
  background-color: #d4d4d4;
  width: 35px;
  height: 35px;
  border-radius: 70px;
  margin-right: 12px;
  cursor: pointer;

  & > img {
    padding: 8px;
  }

  &::after {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    content: '3';
    font-size: 13px;
    height: 18px;
    width: 18px;
    top: -4px;
    left: 22px;
    border-radius: 70px;
    background-color: #9fd1fa;
  }
`;

interface ComponentProps {}

export const TopBar: FC<ComponentProps> = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] =
    useDropdown();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const node = useRef() as MutableRefObject<HTMLInputElement>;
  useOnClickOutside(node, () => setIsMenuOpen(false));

  return (
    <TopBarWrapper ref={node}>
      <Hamburger open={isMenuOpen} setOpen={setIsMenuOpen} />
      <HamburgerMenu open={isMenuOpen} setOpen={setIsMenuOpen}></HamburgerMenu>
      <WrapperInner>
        <LeftSection ref={wrapperRef}>
          <Link to="/">
            <MainLogo src="/assets/logo.png" alt="img"></MainLogo>
          </Link>
          <HomeContainer onClick={toggleDropdown}>
            <img src="/assets/icons/house.svg" alt="img" />
            <p>Home</p>
            <HomeInner>
              <img src="/assets/icons/arrow-down.svg" alt="" />
            </HomeInner>
            {dropdownOpen && <>{<ExpandedMenu setOpen={closeDropdown} />}</>}
          </HomeContainer>
        </LeftSection>
        <CenterSection>
          <SearchContainer>
            <SearchComponent placeholder="Search"></SearchComponent>
            <SearchIcone src="/assets/icons/search.svg" alt="img"></SearchIcone>
          </SearchContainer>
        </CenterSection>
        <RightSection>
          <RightIconsContainer>
            <img src="/assets/icons/house2.svg" alt="" />
            <IconsBackground>
              <img src="/assets/icons/comments.svg" alt="" />
            </IconsBackground>
            <IconsBackground>
              <img src="/assets/icons/bell.svg" alt="" />
            </IconsBackground>
          </RightIconsContainer>
        </RightSection>
      </WrapperInner>
    </TopBarWrapper>
  );
};
export default TopBar;
