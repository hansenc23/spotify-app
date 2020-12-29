import React, { useState, useContext } from 'react';
import ArtistList from '../components/ArtistList';
import Menu from '../components/Menu';
import './Playlists.scss';
import { ToggleContext } from '../context/ToggleContext';
import { BiSearch } from 'react-icons/bi';
import Playlist from '../components/Playlist';

const Playlists = () => {
  const { toggle, toggleProfile } = useContext(ToggleContext);
  return (
    <>
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='playlists-container'>
        <div className='upper-nav'>
          <h1 className='heading'>Playlists</h1>
        </div>
        <div className='search-container'>
          <BiSearch />
          <input className='search-input' type='text' placeholder='Search playlists' />
        </div>
        <Playlist />
      </div>
    </>
  );
};

export default Playlists;
