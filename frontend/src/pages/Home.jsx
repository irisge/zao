import React from 'react';

// import line from '../assets/surfDrawLine.svg';
import arrow from '../assets/arrow-blue-right.svg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="grow grid grid-rows-4 lg:grid-rows-3 h-full w-full">
      <div className="row-start-1 row-span-2 lg:row-span-1 flex flex-col justify-evenly items-center justify-self-center w-full  max-w-[300px] lg:min-w-md font-extrabold text-3xl">
        <button
          type="button"
          onClick={navigate('/shop')}
          className="bg-light-blue flex items-center justify-between w-full max-w-sm rounded-3xl px-8 text-dark-blue"
        >
          S'ÉQUIPER
          <img src={arrow} alt="flèche" />
        </button>
        <button
          type="button"
          onClick={navigate('/shop')}
          className="bg-light-blue flex items-center justify-between w-full max-w-sm rounded-3xl px-8 text-dark-blue"
        >
          SE FORMER
          <img src={arrow} alt="flèche" />
        </button>
      </div>
      <div className="bg-dark-blue flex flex-col w-full row-start-3 lg:row-start-2 row-end-5 lg:row-end-4 justify-evenly justify-self-center ">
        <div className="bg-line-pattern bg-no-repeat bg-left h-full p-8">
          {/* <img src={line} alt="sufeur tracé sans lever la main" className="" /> */}
          <div className="bg-light-blue z-30 rounded-2xl p-8 font-extrabold text-3xl text-dark-blue w-full lg:w-1/2 float-right">
            <h5>NOUVEAUTÉ:</h5>
            <h6>LES FORFAITS DU PRINTEMPS SONT DISPONIBLES À LA VENTE. </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
