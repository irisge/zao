import React, { useEffect, useState } from 'react';

import ShoppingCartList from '../components/ShoppingCartList';

import instance from '../services/serviceApi';

import blob from '../assets/blob-pattern.svg';
import { useUserContext } from '../contexts/UserContext';

function ShoppingCart({ nav }) {
  const [produits, setProduits] = useState([]);
  const { cartId } = useUserContext();
  console.log(cartId);
  const handleIncrease = async (e) => {
    try {
      await instance.put(`/api/articles-paniers/${cartId}`, {
        productId: e.target.name,
        quantity: +1,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDecrease = async (e) => {
    try {
      await instance.put(`/api/articles-paniers/${cartId}`, {
        productId: e.target.name,
        quantity: -1,
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    instance
      .get(`/api/commande/${cartId}`)
      .then((res) => setProduits(res.data));
  }, []);

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
      <ShoppingCartList
        produits={produits}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </div>
  );
}

export default ShoppingCart;
