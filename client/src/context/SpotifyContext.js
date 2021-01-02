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
  const getPlaylists = async (limit = 10, offset = 0) => {
    const res = await axios.get(`https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`, tokenConfig);
    return res;
  };

  //Get User's Recently Played Tracks
  const getRecent = async () => {
    const res = await axios.get('https://api.spotify.com/v1/me/player/recently-played', tokenConfig);

    return res;
  };

  //Get User's Top Tracks
  const getTopTracks = async () => {
    const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', tokenConfig);

    return res;
  };
  return (
    <SpotifyContext.Provider value={{ getProfile, getFollowing, getPlaylists, getRecent, getTopTracks }}>{props.children}</SpotifyContext.Provider>
  );
};
