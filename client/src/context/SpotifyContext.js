import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { getHashParams } from '../utils/index';
import { AuthContext } from './AuthContext';
import { authToken } from '../token';

export const SpotifyContext = createContext();

export const SpotifyProvider = (props) => {
  let tokenConfig = {
    headers: {
      Authorization: 'Bearer ' + authToken,
    },
  };

  //Get Current User's Profile
  const getProfile = async () => {
    const res = await axios.get('https://api.spotify.com/v1/me', tokenConfig);
    return res;
  };

  //Get Current User's followed artists
  const getFollowing = async () => {
    const res = await axios.get('https://api.spotify.com/v1/me/following?type=artist', tokenConfig);
    return res;
  };

  //Get Current User's playlists
  const getPlaylists = async () => {
    const res = await axios.get('https://api.spotify.com/v1/me/playlists', tokenConfig);
    return res;
  };
  return <SpotifyContext.Provider value={{ getProfile, getFollowing, getPlaylists }}>{props.children}</SpotifyContext.Provider>;
};
