import React, { useState } from 'react';
import './TopTracks.scss';
import Track from '../components/Track';
import TrackList from '../components/TrackList';
import Menu from '../components/Menu';
import Profile from '../components/Profile';

const TopTracks = () => {
  const [toggle, setToggle] = useState(false);
  const [range, setRange] = useState('alltime');

  const toggleProfile = () => {
    setToggle(!toggle);
  };

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
      <div className='profile'>
        <Profile toggleProfile={toggle} />
      </div>
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='top-tracks-container'>
        <div className='upper-nav'>
          <h1 className='heading'>Top Tracks</h1>
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
        <TrackList />
      </div>
    </>
  );
};

export default TopTracks;
