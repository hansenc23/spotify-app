import React from 'react';
import './Track.scss';
import album from '../images/album.png';
const Track = ({ track }) => {
  return (
    <div className='track-item'>
      <img src={track.track.album.images[2].url} alt='' />
      <div className='track-detail'>
        <p className='track-title'>Without You</p>
        <p className='track-artist'>G-DRAGON, Rose</p>
      </div>
    </div>
  );
};

export default Track;
