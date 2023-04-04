import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState([]);

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      userId,
      setUserId,
    }),
    [email, setEmail, password, setPassword, userId, setUserId]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
