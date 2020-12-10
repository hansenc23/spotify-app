import React, { useState, createContext } from 'react';
import { getHashParams } from '../utils/index';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [accessToken, setAccessToken] = useState('');

  const setLocalAccessToken = (accessToken) => {
    if (accessToken) {
      window.localStorage.setItem('access_token', accessToken);
    } else {
      console.log('Token expired or invalid');
    }
  };

  const getLocalAccessToken = () => {
    let accessToken;
    if (window.localStorage.getItem('access_token')) {
      accessToken = window.localStorage.getItem('access_token');
    }

    return accessToken;
  };

  const logout = () => {
    window.localStorage.removeItem('access_token');
  };

  return (
    <AuthContext.Provider value={{ setLocalAccessToken, getLocalAccessToken, setAccessToken, accessToken, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
