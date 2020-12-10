import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import music from '../images/music.svg';
import playlist from '../images/playlist.svg';
import star from '../images/star.svg';
import recent from '../images/past.svg';
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='links active'>
        {' '}
        <Link to='/top-tracks'>
          <img src={music} alt='' />
          Top Tracks
        </Link>
      </div>
      <div className='links'>
        {' '}
        <Link to='/top-artists'>
          <img src={star} alt='' />
          Top Artists
        </Link>
      </div>
      <div className='links'>
        <Link to='/recent'>
          <img src={recent} alt='' />
          Recent
        </Link>
      </div>
      <div className='links'>
        <Link to='/playlists'>
          <img src={playlist} alt='' />
          Playlists
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
