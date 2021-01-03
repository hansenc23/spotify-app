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
      <Link to='/top-tracks' className={`links ${location.pathname === '/top-tracks' ? 'active' : ''}`}>
        <img src={music} alt='' />
        Top Tracks
      </Link>
      <Link to='/top-artists' className={`links ${location.pathname === '/top-artists' ? 'active' : ''}`}>
        <img src={star} alt='' />
        Top Artists
      </Link>
      <Link to='/recent' className={`links ${location.pathname === '/recent' ? 'active' : ''}`}>
        <img src={recent} alt='' />
        Recent
      </Link>
      <Link to='/playlists' className={`links ${location.pathname === '/playlists' ? 'active' : ''}`}>
        <img src={playlist} alt='' />
        Playlists
      </Link>
    </div>
    // <div className='nav-container'>
    //   <a to='/top-tracks' className={`links`}>
    //     <img src={music} alt='' />
    //     Top Tracks
    //   </a>
    //   <a to='/top-artists' className={`links`}>
    //     <img src={star} alt='' />
    //     Top Artists
    //   </a>
    //   <a to='/recent' className={`links`}>
    //     <img src={recent} alt='' />
    //     Recent
    //   </a>
    //   <a to='/playlists' className={`links `}>
    //     <img src={playlist} alt='' />
    //     Playlists
    //   </a>
    // </div>
  );
};

export default Navbar;
