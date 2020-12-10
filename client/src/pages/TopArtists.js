import React from 'react';
import ArtistList from '../components/ArtistList';
import Menu from '../components/Menu';
import TrackList from '../components/TrackList';
import './TopArtists.scss';

const TopArtists = () => {
  return (
    <div className='top-artists-container'>
      <div className='upper-nav'>
        <Menu />
        <h1 className='heading'>Top Artists</h1>
        <div className='track-range-container'>
          <ul className='track-range'>
            <li className='selected'>All time</li>
            <li>Last 6 Months</li>
            <li>Last Month</li>
          </ul>
        </div>
      </div>
      <ArtistList />
    </div>
  );
};

export default TopArtists;
