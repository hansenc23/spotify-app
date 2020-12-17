import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import music from '../images/music.svg';
import playlist from '../images/playlist.svg';
import star from '../images/star.svg';
import recent from '../images/past.svg';
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='nav-container'>
      <div className={`links ${location.pathname === '/top-tracks' ? 'active' : ''}`}>
        {' '}
        <Link to='/top-tracks'>
          <img src={music} alt='' />
          Top Tracks
        </Link>
      </div>
      <div className={`links ${location.pathname === '/top-artists' ? 'active' : ''}`}>
        {' '}
        <Link to='/top-artists'>
          <img src={star} alt='' />
          Top Artists
        </Link>
      </div>
      <div className={`links ${location.pathname === '/recent' ? 'active' : ''}`}>
        <Link to='/recent'>
          <img src={recent} alt='' />
          Recent
        </Link>
      </div>
      <div className={`links ${location.pathname === '/playlists' ? 'active' : ''}`}>
        <Link to='/playlists'>
          <img src={playlist} alt='' />
          Playlists
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
