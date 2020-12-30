import React from 'react';
import artist from '../images/artist.jpg';
import './PlaylistItem.scss';
import { Link } from 'react-router-dom';
const PlaylistItem = ({ playlistName, thumbnail, trackCount, link }) => {
  return (
    <div className='playlist-item'>
      <a className='playlist-link' target='_blank' href={link}>
        <img src={thumbnail} alt='' />
        <p>{playlistName}</p>
        <p className='track-count'>{`${trackCount} TRACKS`}</p>
      </a>
    </div>
  );
};

export default PlaylistItem;
