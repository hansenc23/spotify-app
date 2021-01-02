import React from 'react';
import RecentTrackItem from './RecentTrackItem';
import './TrackList.scss';

const RecentTracks = ({ trackData }) => {
  return <div className='tracklist-container'>{trackData && trackData.map((track, i) => <RecentTrackItem key={i} track={track} />)}</div>;
};

export default RecentTracks;
