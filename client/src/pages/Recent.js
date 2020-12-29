import React, { useState, useContext } from 'react';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import TrackList from '../components/TrackList';
import { ToggleContext } from '../context/ToggleContext';
import './Recent.scss';

const Recent = () => {
  const { toggle, toggleProfile } = useContext(ToggleContext);

  return (
    <>
      {/* <div className='profile'>
        <Profile toggleProfile={toggle} />
      </div> */}
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='recent-container'>
        <div className='upper-nav'>
          <h1 className='heading'>Recently played</h1>
          <div className='track-range-container'></div>
        </div>
        <TrackList />
      </div>
    </>
  );
};

export default Recent;
