import React from 'react';

function Footer() {
  return (
    <div className="bg-medium-blue flex w-full items-center p-4">
      <div className="text-yellow font-extrabold text-3xl flex flex-col w-full">
        <h1>ZAO SURF SCHOOL</h1>
        <h2 className="text-dark-blue font-medium text-xl">
          APPRENEZ LE SURF EN TOUTE HUMILITÉ
          <br /> ÉQUIPEZ VOUS AVEC DU MATERIEL DE QUALITÉ
        </h2>
      </div>
      <div className="text-yellow text-lg font-semibold flex flex-col w-6/12 ">
        <div className="flex flex-wrap justify-between w-full">
          <h4>TEL: </h4> <p>06 07 08 09 10</p>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <h4>MAIL:</h4> <p>zaosurfshop@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
