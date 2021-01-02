import React from 'react';
import './TrackList.scss';
import Track from './Track';

const TrackList = ({ topTracksData }) => {
  // return <div className='tracklist-container'>{trackData && trackData.map((track) => <Track track={track} />)}</div>;
  return <div className='tracklist-container'>{topTracksData && topTracksData.map((track) => <Track key={track.id} track={track} />)}</div>;
};

export default TrackList;
