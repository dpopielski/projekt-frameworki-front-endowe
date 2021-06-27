import { FC, useState, useEffect } from 'react';
import ResumeCard from '../Resume/ResumeCard';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import {
  StatusOnlineIcon,
  SearchIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';

export const LatestUpdates: FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const [filter, setFilter] = useState('');

  return (
    <div>
      <div className='flex items-center mb-3'>
        <h4 className='w-full text-lg font-semibold'>Latest updates</h4>
        <div className='relative flex items-center justify-end w-full mr-8'>
          <input
            className='p-0.5 border-2 border-solid rounded-sm'
            placeholder='Filter by title...'
            type='text'
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          />
          <a className='absolute right-2' href='/'>
            <SearchIcon className='w-5 h-5' />
          </a>
        </div>
        <div className='flex items-center gap-2 mr-8'>
          <StatusOnlineIcon className='w-5 h-5' />
          <span className='flex items-center gap-2'>
            Followed
            <img src='./assets/icons/arrow-down.svg' alt='' />
          </span>
        </div>
      </div>

      <div className='flex justify-start gap-3 my-3'>
        <span className='flex items-center justify-center w-auto px-3 bg-blue-100 rounded'>
          All
        </span>
        <span className='flex items-center justify-center w-auto bg-green-100 rounded px-3'>
          <OfficeBuildingIcon className='h-4 w-4 mr-2' />
          SAS
        </span>
        <span className='flex items-center justify-center w-auto bg-blue-200 rounded px-3'>
          <OfficeBuildingIcon className='h-4 w-4 mr-2' />
          SARL
        </span>
        <span className='flex items-center justify-center w-auto bg-orange-100 rounded px-3'>
          <OfficeBuildingIcon className='h-4 w-4 mr-2' />
          Secondary business
        </span>
        <span className='flex items-center justify-center w-auto bg-gray-100 rounded px-3'>
          Communities
        </span>
        <span className='flex items-center justify-center w-auto bg-gray-100 rounded px-3'>
          POA
        </span>
        <span className='flex items-center justify-center w-auto bg-gray-100 rounded px-3'>
          Survey
        </span>
      </div>

      {filter === '' ? (
        <>
          <div className='flex flex-col gap-2'>
            <ResumeCard posts={currentPost} loading={loading} filter={filter} />
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </>
      ) : (
        <>
          <div className='flex flex-col gap-2'>
            <ResumeCard posts={posts} loading={loading} filter={filter} />
          </div>
        </>
      )}
    </div>
  );
};
export default LatestUpdates;
