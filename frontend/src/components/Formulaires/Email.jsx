import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validateEmail from '../../services/formValidators';

function Email({ email, setEmail }) {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    if (!validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  return (
    <label
      htmlFor="email"
      className="flex flex-col w-full text-yellow text-3xl"
    >
      <span className="px-6">Email:</span>
      <input
        type="email"
        name="email"
        className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
        value={email}
        onChange={handleChangeEmail}
      />
      {!isValidEmail && (
        <span className="text-red-400">Renseignez un email valide</span>
      )}
    </label>
  );
}

Email.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
};

export default Email;
