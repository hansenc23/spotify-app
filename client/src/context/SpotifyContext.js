import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { getHashParams } from '../utils/index';
import { AuthContext } from './AuthContext';

export const SpotifyContext = createContext();

export const SpotifyProvider = (props) => {
  const token = window.localStorage.getItem('access_token');
  const { getLocalAccessToken } = useContext(AuthContext);

  let tokenConfig = {
    headers: {
      Authorization: 'Bearer ' + getLocalAccessToken(),
    },
  };

  const getUser = async () => {
    try {
      const res = await axios.get('https://api.spotify.com/v1/me', tokenConfig);
      return res;
    } catch {
      console.log('Token invalid');
    }
  };

  return <SpotifyContext.Provider value={{ getUser }}>{props.children}</SpotifyContext.Provider>;
};
