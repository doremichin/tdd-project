import React from 'react';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import PageTab from '../page-tab';

export function MainLayout() {
  return (
    <section className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <PageTab />
    </section>
  );
}

export default MainLayout;
