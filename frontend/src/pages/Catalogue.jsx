import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

import blob from '../assets/blob-pattern.svg';

import instance from '../services/serviceApi';

function Catalogue({ nav }) {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    instance.get('api/produits').then((res) => setProduits(res.data));
  }, []);

  console.log(produits);
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
      <Card produits={produits} />
    </div>
  );
}

Catalogue.propTypes = {
  nav: PropTypes.string.isRequired,
};

export default Catalogue;
