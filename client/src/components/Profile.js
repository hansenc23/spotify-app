import './Profile.scss';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import profile from '../images/profile.jpg';
import axios from 'axios';

const Profile = ({ profileData, toggleProfile }) => {
  // useEffect(() => {

  // }, [toggleProfile]);

  const logout = () => {
    console.log('logout');
  };
  return (
    <div className={'profile-container' + (toggleProfile ? ' open' : '')}>
      <div className='profile-content'>
        <img src={profile} alt='picture' />
        <h2>Hansen Christian</h2>
        <div className='profile-metric'>
          <div className='followers'>
            <p className='description'>Followers</p>
            <p className='value'>7</p>
          </div>
          <div className='following'>
            <p className='description'>Following</p>
            <p className='value'>2</p>
          </div>
          <div className='Playlists'>
            <p className='description'>Playlists</p>
            <p className='value'>15</p>
          </div>
        </div>
        <button onClick={logout} className='logout-btn'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
