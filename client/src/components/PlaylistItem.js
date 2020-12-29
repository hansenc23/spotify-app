import React from 'react';
import artist from '../images/artist.jpg';
import './PlaylistItem.scss';
const PlaylistItem = () => {
  return (
    <div className='playlist-item'>
      <img src={artist} alt='' />
      <p>BLACKPINK</p>
    </div>
  );
};

export default PlaylistItem;
