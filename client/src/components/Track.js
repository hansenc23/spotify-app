import React from 'react';
import './Track.scss';
import album from '../images/album.png';
const Track = () => {
  return (
    <div className='track-item'>
      <img src={album} alt='' />
      <div className='track-detail'>
        <p className='track-title'>Without You</p>
        <p className='track-artist'>G-DRAGON, Rose</p>
      </div>
    </div>
  );
};

export default Track;
