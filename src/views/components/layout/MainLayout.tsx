import React from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import PageTab from '../page-tab';

export function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <PageTab />
    </div>
  );
}

export default MainLayout;
