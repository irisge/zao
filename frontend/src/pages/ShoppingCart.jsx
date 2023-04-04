import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import blob from '../assets/blob-pattern.svg';

import instance from '../services/serviceApi';
import { useUserContext } from '../contexts/UserContext';
function ShoppingCart({ nav }) {
  const { userId, cartId } = useUserContext();
  useEffect(() => {
    instance.get(`/api/panier/${cartId}`).then((res) => console.log(res.data));
  }, []);

  console.log(userId);

  return (
    <div className="flex flex-col w-full h-full grow relative">
      <img
        src={blob}
        alt="pattern"
        className="w-full px-8 self-center absolute"
      />
      <h2 className="z-10 px-16 py-4 font-inter font-extrabold text-3xl text-black">
        {`Accueil / ${nav}`}
      </h2>
      <ShoppingCart />
    </div>
  );
}

export default ShoppingCart;
