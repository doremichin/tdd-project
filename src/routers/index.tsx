import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../page/home';
import SubPage from '../page/sub';
import MainLayout from '../views/components/layout/MainLayout';

interface IRouters {}

export function Routers({}: IRouters) {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="sub" element={<SubPage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
