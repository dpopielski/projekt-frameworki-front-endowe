import { FC, useState, useEffect } from 'react';
import ResumeCard from '../ResumeCard';
import Pagination from '../Pagination';
import axios from 'axios';
import { StatusOnlineIcon, SearchIcon } from '@heroicons/react/outline';

interface ComponentProps {}

export const Resume: FC<ComponentProps> = () => {
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
      <div className="flex items-center mb-3">
        <h4 className="text-lg font-semibold w-full">Resume your work</h4>
        <div className="flex justify-end relative items-center w-full mr-8">
          <input
            className="p-0.5 border-2 border-solid rounded-sm"
            placeholder="Filter by title..."
            type="text"
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          />
          <a className="absolute right-2" href="/">
            <SearchIcon className="h-5 w-5" />
          </a>
        </div>
        <div className="flex items-center gap-2 mr-8">
          <StatusOnlineIcon className="h-5 w-5" />
          <span className="flex items-center gap-2">
            Followed
            <img src="./assets/icons/arrow-down.svg" alt="" />
          </span>
        </div>
      </div>

      {filter === '' ? (
        <>
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
            <ResumeCard posts={posts} loading={loading} filter={filter} />
          </div>
        </>
      )}
    </div>
  );
};
export default Resume;
