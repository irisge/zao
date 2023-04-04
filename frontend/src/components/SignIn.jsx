import React, { useState, useEffect } from 'react';
import Email from './Formulaires/Email';
import { useUserContext } from '../contexts/UserContext';
import Password from './Formulaires/Password';

import fleche from '../assets/arrow-blue-right.svg';
import instance from '../services/serviceApi';

function SignIn({ closePopUp }) {
  const { setPassword, password, email, setEmail, setUserId, userId } =
    useUserContext();
  const [response, setResponse] = useState('');

  const data = { email, password };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const res = await instance.post('/api/login', data, response);
        setResponse(res.data.userId);
        setUserId(
          localStorage.setItem('userId', JSON.stringify(res.data.userId))
        );
        console.log(response);
        setUserId(res.data.userId);
        console.log(userId);
        closePopUp();
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(userId);

  return (
    <div className="fixed place-self-center flex justify-center items-start w-full h-full md:h-full backdrop-blur-sm top-8 lg:top-0">
      <div className="absolute flex flex-col items-center w-[80%] lg:w-11/12 gap-4 lg:h-full rounded-3xl p-4 bg-dark-blue">
        <h1 className="text-yellow  self-start font-extrabold text-[40px] ">
          ZAO SURF SCHOOL
        </h1>
        <h3 className="text-orange font-extrabold text-3xl">
          Bienvenue à la Zao Surf School
        </h3>
        <form className="flex flex-col w-full justify-evenly gap-4 items-center">
          <Email email={email} setEmail={setEmail} />
          <Password password={password} setPassword={setPassword} />
          <button
            type="button"
            onClick={handleSignIn}
            className="bg-orange rounded-full flex justify-evenly items-center text-dark-blue font-bold text-xl lg:text-3xl px-4"
          >
            Me connecter
            <img
              src={fleche}
              alt="fleche vers la droite"
              className=" scale-50 lg:scale-100"
            />
          </button>
        </form>
        <button type="button" onClick={closePopUp}>
          X
        </button>
      </div>
    </div>
  );
}

export default SignIn;
