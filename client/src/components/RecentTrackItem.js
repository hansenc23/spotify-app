import React from 'react';
import './Track.scss';

const RecentTrackItem = ({ track }) => {
  return (
    <div className='track-item'>
      <img className='track-img' src={track.track.album.images[0].url} alt='' />
      <div className='track-detail'>
        <a href={track.track.external_urls.spotify} target='_blank'>
          <p className='track-title'>{track.track.name}</p>
        </a>
        <p className='track-artist'>
          {track.track.artists.map((artist) => artist.name).join(', ')} &bull; <span>{track.track.album.name}</span>
        </p>
      </div>
    </div>
  );
};

export default RecentTrackItem;
