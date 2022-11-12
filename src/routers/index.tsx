import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../page/home';
import SubPage from '../page/sub';
import MainLayout from '../views/components/layout/MainLayout';
import { HOME_URL, SUB_URL } from '@shared/constant/urls';

interface IRouters {}

export function Routers({}: IRouters) {
  return (
    <Routes>
      <Route path={HOME_URL} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={SUB_URL} element={<SubPage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
