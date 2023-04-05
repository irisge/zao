import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useUserContext } from '../contexts/UserContext';

import fleche from '../assets/arrow-light-blue-right.svg';

function ShoppingCardList({ produits, handleIncrease, handleDecrease }) {
  const { cartId, setCartId, userId } = useUserContext();

  console.log(produits);

  return (
    <div className="bg-light-blue rounded-3xl place-self-center flex flex-col w-9/12 lg:w-11/12 items-center justify-between px-4 py-4 text-center gap-4 -translate-y-3.5">
      {produits.map((p) => (
        <div className="flex flex-row justify-between w-full " key={p.id}>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${p.picture}`}
            alt={p.title}
            className=" w-[60px] lg:w-[100px]"
          />
          <div className="flex flex-col text-left pl-4 w-full justify-between">
            <div className="flex w-full justify-between items-start">
              {' '}
              <p className="font-roboto font-regular text-xl lg:text-3xl text-dark-blue">
                {p.title.toUpperCase()}
              </p>
              <p className="font-semibold text-2xl lg:text-3xl text-dark-blue">
                {p.total_price}€
              </p>
            </div>
            <div className="flex w-3/5 max-w-[100px] justify-evenly bg-dark-blue rounded-full text-white font-inter font-regular text-base py-2">
              <button
                type="button"
                onClick={handleDecrease}
                name={p.product_id}
                className="font-extrabold text-base"
              >
                -
              </button>
              {p.quantity}
              <button
                type="button"
                name={p.product_id}
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex w-full justify-between font-extrabold text-2xl lg:text-3xl text-orange">
        <h2 className="">TOTAL</h2>
        <p>{produits.reduce((acc, curr) => acc + curr.total_price, 0)}€</p>
      </div>
      <button
        type="button"
        className="bg-orange flex w-full items-center text-dark-blue font-semibold text-xl lg:text-3xl rounded-full py-2 px-3 flex-nowrap whitespace-nowrap"
      >
        Passer la commande <img src={fleche} alt="fleche" />
      </button>
    </div>
  );
}

ShoppingCardList.propTypes = {
  produits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // eslint-disable-next-line comma-dangle
    })
  ).isRequired,
};

export default ShoppingCardList;
