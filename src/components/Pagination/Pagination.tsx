import React, { FC } from 'react'

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
}

export const Pagination: FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers: Array<number> = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center w-full my-4 text-blue-500">
            <ul className="flex justify-center w-1/2 gap-3">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;