import React from 'react';
import './TrackList.scss';
import Track from './Track';

const TrackList = ({ trackData }) => {
  return <div className='tracklist-container'>{trackData && trackData.map((track) => <Track track={track} />)}</div>;
};

export default TrackList;
