import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PlatformData = [
  {
    title: 'Home',
    path: '/',
    icone: `/assets/icons/house.svg`,
  },
  {
    title: 'Publications',
    path: '/publications',
    icone: `/assets/icons/publications.svg`,
  },
  {
    title: 'People',
    path: '/people',
    icone: `/assets/icons/people.svg`,
  },
  {
    title: 'Entities',
    path: '/entities',
    icone: `/assets/icons/entities.svg`,
  },
  {
    title: 'Administration',
    path: '/administration',
    icone: `/assets/icons/administration.svg`,
  },
];

const WorkspacesData = [
  {
    title: 'Client contract',
    path: '/workspace/client-contract',
    icone: `/assets/icons/publications.svg`,
  },
  {
    title: 'Supplier contract',
    path: '/workspace/supplier-contract',
    icone: `/assets/icons/publications.svg`,
  },
  {
    title: 'Corporate',
    path: '/workspace/corporate',
    icone: `/assets/icons/entities2.svg`,
  },
  {
    title: 'Group Norms',
    path: '/workspace/group-norms',
    icone: `/assets/icons/publications.svg`,
  },
  {
    title: 'Real estate contracts',
    path: 'real-estate-contracts',
    icone: `/assets/icons/publications.svg`,
  },
];

const AccountData = [
  {
    title: 'Privacy',
    path: '/privacy',
    icone: `/assets/icons/privacy.svg`,
  },
  {
    title: 'Settings',
    path: '/settings',
    icone: `/assets/icons/settings.svg`,
  },
];

interface Props {
  open: boolean;
}

interface HamburgerProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 4rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 33.333333%;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) => (open ? '0px 1px 10px #999;' : 'none')};

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const HamburgerMenu: FC<HamburgerProps> = ({ open, setOpen }) => {
  const [search, setSearch] = useState('');

  return (
    <StyledMenu open={open}>
      <div className='flex align-center p-1.5 w-full'>
        <input
          className='text-xs p-1.5 border-2 border-solid border-gray-100 rounded-sm w-full'
          placeholder='Filter...'
          type='text'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className='mt-2'>
        <span className='px-2 text-xs'>Platform</span>
        {PlatformData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index} onClick={() => setOpen(false)}>
            <ul className='flex items-center justify-start w-full gap-4 p-2 cursor-pointer hover:bg-gray-300'>
              <img src={elem.icone} alt='' />
              <li className='text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
      </div>

      <div className=''>
        <span className='px-2 text-xs'>Workspace</span>
        {WorkspacesData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index} onClick={() => setOpen(false)}>
            <ul className='flex items-center justify-start w-full gap-4 p-2 cursor-pointer hover:bg-gray-300'>
              <img src={elem.icone} alt='' />
              <li className='text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
      </div>

      <div className='border-b-2'>
        <span className='px-2 text-xs'>Account</span>
        <div className='flex items-center justify-start w-full gap-4 p-2'>
          <img className='w-5 h-5' src={'/assets/profile.svg'} alt='' />
          <div className='flex flex-col'>
            <span className='flex items-center text-sm'> Jeanne-Marie Li</span>
            <Link
              to='/profile'
              className='text-xs'
              onClick={() => setOpen(false)}
            >
              See profile
            </Link>
          </div>
        </div>
        {AccountData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <ul
            key={index}
            className='flex items-center justify-start w-full gap-4 p-2 cursor-pointer hover:bg-gray-300'
          >
            <img className='w-5 h-5' src={elem.icone} alt='' />
            <li className='flex items-center text-sm'>{elem.title}</li>
          </ul>
        ))}
      </div>
      <Link to='/' onClick={() => setOpen(false)}>
        <div className='flex items-center justify-center w-full gap-3 p-2 hover:bg-gray-300'>
          <img className='w-5 h-5' src={'/assets/icons/logout.svg'} alt='' />
          <span className='flex items-center text-sm'>Logout</span>
        </div>
      </Link>
    </StyledMenu>
  );
};
export default HamburgerMenu;
