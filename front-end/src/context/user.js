import React, { createContext } from 'react';
import { PropTypes } from 'prop-types';
import useUser from '../hooks/useUser';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const { handleLogin,
    setEmail, setPassword, email,
    password, handleRegister, setName, valid, validName, setUser, user } = useUser();

  return (
    <UserContext.Provider
      value={ {
        handleLogin,
        setEmail,
        setPassword,
        email,
        password,
        handleRegister,
        setName,
        valid,
        validName,
        setUser,
        user,
      } }
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
