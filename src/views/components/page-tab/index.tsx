import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, User, Book } from 'react-feather';

import { HOME_URL, SUB_URL } from '@shared/constant/urls';

interface IPageTab {}

export function PageTab({}: IPageTab) {
  const navigate = useNavigate();

  const onClick = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <div className="fixed z-10 bg-white border-t border-primary-100 bottom-0 left-0 right-0">
      <div className="container">
        <ul className="flex justify-between -mx-3">
          <li
            role="button"
            className="flex flex-col items-center text-center py-2 px-3"
            onClick={onClick(HOME_URL)}
          >
            <Home color="#333" size={20} />
            <span className="text-12">홈</span>
          </li>
          <li
            role="button"
            onClick={onClick(SUB_URL)}
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
