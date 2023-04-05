import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

function HomeLayout() {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover flex h-full flex-col font-inter">
      <Navbar bg />
      <div className="grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
