import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const PlatformData = [
  {
    title: 'Home',
    path: '/',
    icone: `./assets/icons/house.svg`,
  },
  {
    title: 'Publications',
    path: '/publications',
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: 'People',
    path: '/people',
    icone: `./assets/icons/people.svg`,
  },
  {
    title: 'Entities',
    path: '/entities',
    icone: `./assets/icons/entities.svg`,
  },
  {
    title: 'Administration',
    path: '/administration',
    icone: `./assets/icons/administration.svg`,
  },
];

const WorkspacesData = [
  {
    title: 'Client contract',
    path: '/client-contract',
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: 'Supplier contract',
    path: '/supplier-contract',
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: 'Corporate',
    path: '/corporate',
    icone: `./assets/icons/entities2.svg`,
  },
  {
    title: 'Group Norms',
    path: 'group-norms',
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: 'Real estate contracts',
    path: 'real-estate-contracts',
    icone: `./assets/icons/publications.svg`,
  },
];

const AccountData = [
  {
    title: 'Privacy',
    path: '/privacy',
    icone: `./assets/icons/privacy.svg`,
  },
  {
    title: 'Settings',
    path: '/settings',
    icone: `./assets/icons/settings.svg`,
  },
];

export const ExpandedMenu: FC = () => {
  const [search, setSearch] = useState('');

  return (
    <nav
      className='absolute flex flex-col w-full top-9 cursor-default bg-white border-t-2'
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
        <span className='text-xs px-2'>Platform</span>
        {PlatformData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index} className=''>
            <ul className='flex justify-start items-center p-2 gap-4 hover:bg-gray-300 cursor-pointer'>
              <img className='h-5 w-5' src={elem.icone} alt='' />
              <li className='flex items-center text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
        <span className='text-xs px-2'>Workspace</span>
        {WorkspacesData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index}>
            <ul
              key={index}
              className='flex justify-start items-center p-2 gap-4 cursor-pointer w-full hover:bg-gray-300'
            >
              <img className='h-5 w-5' src={elem.icone} alt='' />
              <li className='flex items-center text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
      </div>
      <div className='border-b-2'>
        <span className='text-xs px-2'>Account</span>
        <div className='flex justify-start items-center p-2 gap-4 w-full'>
          <img className='h-5 w-5' src={'./assets/profile.svg'} alt='' />
          <div className='flex flex-col'>
            <span className='flex items-center text-sm'> Jeanne-Marie Li</span>
            <Link to='/profile' className='text-xs '>
              See profile
            </Link>
          </div>
        </div>
        {AccountData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <Link to={elem.path} key={index}>
            <ul
              key={index}
              className='flex justify-start items-center p-2 gap-4 w-full cursor-pointer hover:bg-gray-300'
            >
              <img className='h-5 w-5' src={elem.icone} alt='' />
              <li className='flex items-center text-sm'>{elem.title}</li>
            </ul>
          </Link>
        ))}
      </div>
      <Link to='/'>
        <div className='flex justify-center items-center p-2 gap-3 w-full hover:bg-gray-300'>
          <img className='h-5 w-5' src={'./assets/icons/logout.svg'} alt='' />
          <span className='flex items-center text-sm'>Logout</span>
        </div>
      </Link>
    </nav>
  );
};
export default ExpandedMenu;
