import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validateEmail from '../../services/formValidators';

function Password({ password, setPassword }) {
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleChangePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
    if (!validateEmail(password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  };

  return (
    <label
      htmlFor="password"
      className="flex flex-col w-full text-yellow text-3xl"
    >
      <span className="px-6">Mot de passe:</span>
      <input
        type="password"
        name="password"
        className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
        value={password}
        onChange={handleChangePassword}
      />
      {!isValidPassword && (
        <span className="text-red-400">Renseignez un mot de passe valide</span>
      )}
    </label>
  );
}

Password.propTypes = {
  password: PropTypes.string,
  setPassword: PropTypes.func,
};

export default Password;
