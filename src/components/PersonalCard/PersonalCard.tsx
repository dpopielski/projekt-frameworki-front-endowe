import { FC } from 'react';

const PersonData = {
  name: 'Humberta Swift',
  jobTitle: 'Job title',
  company: 'Company',
  img: `/assets/profile.svg`,
};

const PersonalNavData = [
  {
    title: 'Your network',
    path: '',
    icone1: `/assets/icons/network.png`,
    icone2: `/assets/icons/network.svg`,
    cName: 'aside-text',
  },
  {
    title: 'Your Publications',
    path: '',
    icone1: `/assets/icons/publications.png`,
    icone2: `/assets/icons/plus.png`,
    cName: 'aside-text',
  },
];

export const PersonalCard: FC = () => {
  return (
    <article className='bg-white rounded shadow'>
      <div className='border-b-2 border-gray-200 border-solid'>
        <div className='p-3'>
          <img
            className='w-12 h-12 mx-auto rounded-full'
            src={PersonData.img}
            alt=''
          />
          <p className='flex justify-center my-1 text-sm'>{PersonData.name}</p>
          <div className='flex justify-center'>
            <span className='text-xs font-thin'>{PersonData.jobTitle}</span>
            <span className='mx-1 text-xs'>·</span>
            <span className='text-xs font-thin'>{PersonData.company}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-3'>
        {PersonalNavData.map((elem, index) => (
          <div
            key={index}
            className='flex justify-center align-center xl:justify-between'
          >
            <img
              className='w-4 h-auto my-auto mr-1.5'
              src={elem.icone1}
              alt=''
            />
            <span className='font-normal my-auto w-24 xl:w-full text-xs mr-1.5'>
              {elem.title}
            </span>
            <img
              className='float-right w-8 h-5 p-1 border border-gray-500 border-solid rounded-md'
              src={elem.icone2}
              alt=''
            />
          </div>
        ))}
      </div>
    </article>
  );
};
export default PersonalCard;
