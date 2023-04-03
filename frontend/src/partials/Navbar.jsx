import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../assets/menu.svg';
import cart from '../assets/shopping-bag.svg';

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: '#D98C4A' };
    }
    return null;
  };

  return (
    <nav className="flex justify-between items-center">
      <a
        href="/"
        className="text-dark-brown font-extrabold text-2xl lg:text-[40px] p-8"
      >
        ZAO SURF SCHOOL
      </a>
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <img src={menu} alt="Logo menu" className="p-8 lg:hidden" />
      </button>
      <div
        className={`${
          mobileNavOpen
            ? 'flex flex-col items-center bg-dark-blue w-screen absolute h-screen top-24 lg:hidden'
            : 'hidden lg:flex lg:justify-between lg:items-center lg:w-2/4 lg:py-8'
        }`}
      >
        <NavLink
          style={getActiveLinkStyle}
          to="/"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="font-extrabold text-yellow text-2xl py-8 lg:py-0"
        >
          Accueil
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="/shop"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="font-extrabold text-yellow text-2xl lg:text-3xl py-8 lg:py-0"
        >
          Le Shop
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="/ecole"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="font-extrabold text-yellow text-2xl lg:text-3xl py-8 lg:py-0"
        >
          L'École
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="/panier"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="font-extrabold text-yellow text-2xl lg:hidden py-8 lg:py-0"
        >
          Panier
        </NavLink>
      </div>
      <NavLink
        style={getActiveLinkStyle}
        to="/panier"
        className="hidden lg:block lg:p-8"
      >
        <img src={cart} alt="panier" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
