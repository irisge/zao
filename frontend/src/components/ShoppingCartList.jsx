import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SignIn from './SignIn';

import grille from '../assets/view-grid.svg';
import panier from '../assets/shopping-bag-wo-circle.png';
import instance from '../services/serviceApi';
import { useUserContext } from '../contexts/UserContext';

function Card({ produits }) {
  const [signInPopUpOn, setSignInPopUpOn] = useState(false);

  const { cartId, setCartId, userId } = useUserContext();

  const handleLogin = async (e) => {
    if (!userId) {
      setSignInPopUpOn(true);
    } else {
      try {
        const response = await instance.post('/api/panier', {
          userId: localStorage.getItem('userId'),
        });
        console.log(response.data.insertId);
        setCartId(
          localStorage.setItem('cartId', JSON.stringify(response.data.insertId))
        );

        const res = await instance.get(`api/produits/${e.target.name}`);
        const productId = res.data.id;
        await instance.post(`api/panier/perso`, {
          cartId: 1,
          productId,
          quantity: +1,
        });
      } catch (e) {
        console.log(e);
      }
      // ajout au panier
    }
  };

  console.log(cartId);
  console.log(userId);

  const closePopUp = () => {
    setSignInPopUpOn(false);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full -translate-y-10 lg:-translate-y-1 gap-8 lg:gap-y-8 lg:grid lg:grid-cols-3 py-8">
      {produits.map((p) => (
        <div
          className="bg-light-blue rounded-3xl w-[300px] h-[350px] place-self-center flex flex-col items-center justify-between px-4 py-4 text-center"
          key={p.id}
        >
          <div className="flex w-full justify-between">
            <img src={grille} alt="quatre carrés formant une grille" />
            <button type="button" onClick={handleLogin}>
              <img src={panier} alt="panier de shopping" name={p.id} />
            </button>
          </div>
          <img src={p.picture} alt={p.title} />
          <p className="font-regular text-3xl text-dark-blue">{p.title}</p>
          <p className="font-bold text-3xl text-dark-blue">{p.price}€</p>
        </div>
      ))}
      {signInPopUpOn && (
        <SignIn signInPopUpOn={signInPopUpOn} closePopUp={closePopUp} />
      )}
    </div>
  );
}

Card.propTypes = {
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

export default Card;
