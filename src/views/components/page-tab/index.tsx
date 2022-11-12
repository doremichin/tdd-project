import React from 'react';
import { Home, Search, User, Book } from 'react-feather';

interface IPageTab {}

export function PageTab({}: IPageTab) {
  return (
    <div className="absolute border-t border-primary-100 bottom-0 left-0 right-0">
      <div className="container">
        <ul className="flex justify-between -mx-3">
          <li
            role="button"
            className="flex flex-col items-center text-center py-2 px-3"
          >
            <Home color="#333" size={20} />
            <span className="text-12">홈</span>
          </li>
          <li
            role="button"
            className="flex flex-col items-center text-center py-2 px-3"
          >
            <Search color="#333" size={20} />
            <span className="text-12">찾기</span>
          </li>
          <li
            role="button"
            className="flex flex-col items-center text-center py-2 px-3"
          >
            <Book size={20} />
            <span className="text-12">-</span>
          </li>
          <li
            role="button"
            className="flex flex-col items-center text-center py-2 px-3"
          >
            <User size={20} />
            <span className="text-12">-</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PageTab;
