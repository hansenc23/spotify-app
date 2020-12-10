import React from 'react';
import './TopTracks.scss';
import Track from '../components/Track';
import TrackList from '../components/TrackList';
import Menu from '../components/Menu';

const TopTracks = () => {
  return (
    <div className='top-tracks-container'>
      <div className='upper-nav'>
        <Menu />
        <h1 className='heading'>Top Tracks</h1>
        <div className='track-range-container'>
          <ul className='track-range'>
            <li className='selected'>All time</li>
            <li>Last 6 Months</li>
            <li>Last Month</li>
          </ul>
        </div>
      </div>
      <TrackList />
    </div>
  );
};

export default TopTracks;
