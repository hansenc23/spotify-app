import './Profile.scss';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SpotifyContext } from '../context/SpotifyContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Profile = ({ profileData }) => {
  const { fullName, img } = profileData;
  const { logout, getLocalAccessToken } = useContext(AuthContext);
  return (
    <div className='profile-container'>
      <img src={img} alt='picture' />
      <h2>{fullName}</h2>
      {/* <h2>{userProfile.fullName}</h2>
      <img src={userProfile.img} alt='' />
      <button onClick={logout}>Log out</button> */}
      <button onClick={logout} className='logout-btn'>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
