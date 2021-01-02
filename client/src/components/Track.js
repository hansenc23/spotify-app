import React from 'react';
import './Track.scss';
import album from '../images/album.png';
const Track = ({ track }) => {
  return (
    <div className='track-item'>
      <img className='track-img' src={track.album.images[0].url} alt='' />
      <div className='track-detail'>
        <a href={track.external_urls.spotify} target='_blank'>
          <p className='track-title'>{track.name}</p>
        </a>
        <p className='track-artist'>
          {track.artists.map((artist) => artist.name).join(', ')} &bull; <span>{track.album.name}</span>
        </p>
      </div>
    </div>
  );
};

export default Track;
