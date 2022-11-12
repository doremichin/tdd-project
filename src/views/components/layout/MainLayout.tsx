import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header';
import PageTab from '../page-tab';

export function MainLayout() {
  return (
    <section className="relative min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <PageTab />
    </section>
  );
}

export default MainLayout;
