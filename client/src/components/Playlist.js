import React, { useState } from 'react';
import PlaylistItem from './PlaylistItem';
import Spinner from '../components/Spinner';

import './Playlist.scss';

const Playlist = ({ playlistData }) => {
  return (
    <div className='playlist-container'>
      {playlistData &&
        playlistData.map((playlist) => (
          <PlaylistItem
            key={playlist.id}
            playlistName={playlist.name}
            thumbnail={playlist.images[0].url}
            trackCount={playlist.tracks.total}
            link={playlist.external_urls.spotify}
          />
        ))}
    </div>
  );
};

export default Playlist;
