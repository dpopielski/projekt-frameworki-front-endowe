import { useEffect, useState } from 'react';
import cx from 'classnames';
import axios from 'axios';
import EntitiesCard from 'components/EntitiesCard';
import {
  CogIcon,
  ViewListIcon,
  StopIcon,
  SwitchVerticalIcon,
  FilterIcon,
} from '@heroicons/react/outline';
import {
  ViewGridIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/solid';

type Entity = {
  id: number;
  title: string;
  thumbnailUrl: string;
};
export default function Entites() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isList, setIsList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      setEntities(response.data.slice(0, 20) as Entity[]);
    };
    fetchData();
  }, []);

  return (
    <div
      className={cx({
        'flex flex-col bg-white fixed left-0 top-0 z-50 p-5 w-full min-h-screen':
          isFullscreen,
      })}
    >
      <div className='flex justify-between'>
        <span className='flex items-center gap-2'>
          <h3>Entities</h3>
          <CogIcon className='w-5 h-5' />
        </span>
        <div className='flex w-auto h-auto border border-gray-200 border-solid rounded'>
          <button
            onClick={() => setIsList(false)}
            className={cx(
              'flex items-center justify-center h-8 gap-1 rounded px-2',
              { 'bg-gray-300': !isList }
            )}
          >
            <ViewGridIcon className='w-5 h-5' />
            {!isList && <p>Mosaic</p>}
          </button>
          <button
            onClick={() => setIsList(true)}
            className={cx('flex items-center justify-end px-2', {
              'bg-gray-300': isList,
            })}
          >
            <ViewListIcon className='w-6 h-6' />
            {isList && <p>List</p>}
          </button>
        </div>
      </div>

      <div className='flex items-center w-auto h-auto'>
        <span className='flex items-center justify-center gap-2 rounded bg-blue-100 px-1 py-0.5'>
          <StopIcon className='w-5 h-5' />
          <span>All</span>
          <ChevronDownIcon className='w-5 h-5' />
        </span>
        <span className='flex items-center justify-center h-auto px-3 border-r border-gray-300 border-solid'>
          <DotsHorizontalIcon className='w-5 h-5' />
        </span>
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className='flex items-center gap-2 px-4'
        >
          <SwitchVerticalIcon className='w-5 h-5' />
          <span>Sort</span>
        </button>
        <span className='flex items-center gap-2 px-4 border-r border-gray-300 border-solid'>
          <FilterIcon className='w-5 h-5' />
          <span>Filters</span>
        </span>

        <button
          className='ml-4 focus:outline-none'
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? 'Exit' : ''} Fullscreen
        </button>

        <button
          className={cx('ml-4 focus:outline-none', {
            'text-green-600': isCopied,
          })}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href).then(
              function () {
                setIsCopied(true);
              },
              function () {
                console.log('Clipboard error');
              }
            );
          }}
        >
          Copy
        </button>
      </div>

      <div
        className={cx('gap-3 mt-3', {
          'grid grid-cols-4': !isList,
          'flex flex-col': isList,
        })}
      >
        {entities
          .sort((a: Entity, b: Entity) => {
            if (sortAsc) return a.title > b.title ? 1 : -1;
            return a.title > b.title ? -1 : 1;
          })
          .map((entity: Entity) => {
            return (
              <EntitiesCard
                key={`entity-${entity.id}`}
                img={entity.thumbnailUrl}
                title={entity.title}
                text={'Lorem ipsum dolor sit amet'}
              />
            );
          })}
      </div>
    </div>
  );
}
