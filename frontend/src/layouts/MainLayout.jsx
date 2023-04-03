import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

function MainLayout() {
  return (
    <div className="bg-dark-blue bg-no-repeat flex flex-col h-full font-inter grow">
      <Navbar />
      <div className="grow bg-dark-blue">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
