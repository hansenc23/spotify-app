import React, { useState, useContext } from 'react';
import ArtistList from '../components/ArtistList';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import TrackList from '../components/TrackList';
import { ToggleContext } from '../context/ToggleContext';
import './TopArtists.scss';

const TopArtists = () => {
  const { toggle, toggleProfile } = useContext(ToggleContext);
  const [range, setRange] = useState('alltime');

  const allTimeRange = () => {
    setRange('alltime');
  };

  const sixMonthsRange = () => {
    setRange('sixmonths');
  };

  const oneMonthRange = () => {
    setRange('onemonth');
  };
  return (
    <>
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='top-artists-container'>
        <div className='upper-nav'>
          <h1 className='heading'>Top Artists</h1>
          <div className='track-range-container'>
            <ul className='track-range'>
              <li onClick={allTimeRange} className={range === 'alltime' ? 'selected' : ''}>
                All time
              </li>
              <li onClick={sixMonthsRange} className={range === 'sixmonths' ? 'selected' : ''}>
                Last 6 Months
              </li>
              <li onClick={oneMonthRange} className={range === 'onemonth' ? 'selected' : ''}>
                Last Month
              </li>
            </ul>
          </div>
        </div>
        <ArtistList />
      </div>
    </>
  );
};

export default TopArtists;
