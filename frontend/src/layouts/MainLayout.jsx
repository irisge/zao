import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

function MainLayout() {
  return (
    <div className="bg-dark-blue flex flex-col h-full font-inter">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
