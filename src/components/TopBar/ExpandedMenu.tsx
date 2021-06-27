import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

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
    path: '/workspace/real-estate-contracts',
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

export const ExpandedMenu: FC<{
  setOpen: (open: boolean) => void;
}> = ({ setOpen }) => {
  const [search, setSearch] = useState('');

  return (
    <nav
      className='absolute flex flex-col w-full bg-white border-t-2 cursor-default top-9'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='flex items-center p-1.5 w-full'>
        <input
          className='text-xs p-1.5 border-2 border-solid border-gray-100 rounded-sm w-full'
          placeholder='Filter...'
          type='text'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className='border-b-2'>
        <span className='px-2 text-xs'>Platform</span>
        {PlatformData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link
            to={elem.path}
            key={index}
            className=''
            onClick={() => setOpen(false)}
          >
            <ul className='flex items-center justify-start gap-4 p-2 cursor-pointer hover:bg-gray-300'>
              <img className='w-5 h-5' src={elem.icone} alt='' />
              <li className='flex items-center text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
        <span className='px-2 text-xs'>Workspace</span>
        {WorkspacesData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index} onClick={() => setOpen(false)}>
            <ul
              key={index}
              className='flex items-center justify-start w-full gap-4 p-2 cursor-pointer hover:bg-gray-300'
            >
              <img className='w-5 h-5' src={elem.icone} alt='' />
              <li className='flex items-center text-sm'>{elem.title}</li>
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
              className='text-xs '
              onClick={() => setOpen(false)}
            >
              See profile
            </Link>
          </div>
        </div>
        {AccountData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index} onClick={() => setOpen(false)}>
            <ul
              key={index}
              className='flex items-center justify-start w-full gap-4 p-2 cursor-pointer hover:bg-gray-300'
            >
              <img className='w-5 h-5' src={elem.icone} alt='' />
              <li className='flex items-center text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
      </div>
      <Link to='/' onClick={() => setOpen(false)}>
        <div className='flex items-center justify-center w-full gap-3 p-2 hover:bg-gray-300'>
          <img className='w-5 h-5' src={'/assets/icons/logout.svg'} alt='' />
          <span className='flex items-center text-sm'>Logout</span>
        </div>
      </Link>
    </nav>
  );
};
export default ExpandedMenu;
