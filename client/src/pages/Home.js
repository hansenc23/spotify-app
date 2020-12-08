import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SpotifyContext } from '../context/SpotifyContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Profile from '../components/Profile';

const Home = () => {
  const [isTokenExist, setIsTokenExist] = useState(true);
  const { logout, getLocalAccessToken } = useContext(AuthContext);
  const { getUser } = useContext(SpotifyContext);
  const [userProfile, setUserProfile] = useState({ fullName: '', img: '' });

  useEffect(() => {
    if (getLocalAccessToken()) {
      setIsTokenExist(true);
    } else {
      setIsTokenExist(false);
    }

    getUsername();
  }, [isTokenExist, getUser, getLocalAccessToken]);

  const getUsername = async () => {
    const tokenConfig = {
      headers: {
        Authorization: 'Bearer ' + getLocalAccessToken(),
      },
    };

    try {
      const res = await axios.get('https://api.spotify.com/v1/me', tokenConfig);
      console.log(res.data.images[0]);
      if (res.status === 200) {
        setUserProfile({
          fullName: res.data.display_name,
          img: res.data.images[0].url,
        });
      }
    } catch {
      console.log('failed');
    }
  };

  return isTokenExist ? (
    <>
      <Profile profileData={userProfile} />
    </>
  ) : (
    <Redirect to='/' />
  );
};

export default Home;
