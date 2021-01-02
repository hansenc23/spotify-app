import React, { useState, useEffect, useContext } from 'react';
import './TopTracks.scss';
import Track from '../components/Track';
import TrackList from '../components/TrackList';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import { ToggleContext } from '../context/ToggleContext';
import { SpotifyContext } from '../context/SpotifyContext';

const TopTracks = () => {
  const [range, setRange] = useState('alltime');
  const { toggle, toggleProfile } = useContext(ToggleContext);
  const { getTopTracks } = useContext(SpotifyContext);
  const [topTracksData, setTopTracksData] = useState();

  useEffect(() => {
    getTopTracks().then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    });
  }, []);

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
      {/* <div className='profile'>
        <Profile toggleProfile={toggle} />
      </div> */}
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
