import React, { useState, useEffect, useContext } from 'react';
import './TopTracks.scss';
import Track from '../components/Track';
import TrackList from '../components/TrackList';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import { ToggleContext } from '../context/ToggleContext';
import { SpotifyContext } from '../context/SpotifyContext';
import Spinner from '../components/Spinner';

const TopTracks = () => {
  const [range, setRange] = useState('long_term');
  const { toggle, toggleProfile } = useContext(ToggleContext);
  const { getTopTracks } = useContext(SpotifyContext);
  const [topTracksData, setTopTracksData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopTracks(range).then((res) => {
      if (res.status === 200) {
        console.log(res);
        setTopTracksData(res.data.items);
        setLoading(false);
      }
    });
  }, [range]);

  const fetch = () => {
    getTopTracks('long_term').then((res) => {
      console.log(res);
    });
  };

  const allTimeRange = () => {
    setRange('long_term');
  };

  const sixMonthsRange = () => {
    setRange('medium_term');
  };

  const oneMonthRange = () => {
    setRange('short_term');
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
          <h1 className='heading'>Top Tracks{loading ? <span>&nbsp; {loading ? <Spinner size='20px' /> : ''}</span> : ''}</h1>
          <div className='track-range-container'>
            <ul className='track-range'>
              <li onClick={allTimeRange} className={range === 'long_term' ? 'selected' : ''}>
                All time
              </li>
              <li onClick={sixMonthsRange} className={range === 'medium_term' ? 'selected' : ''}>
                Last 6 Months
              </li>
              <li onClick={oneMonthRange} className={range === 'short_term' ? 'selected' : ''}>
                Last Month
              </li>
            </ul>
          </div>
        </div>
        <TrackList topTracksData={topTracksData} />
      </div>
    </>
  );
};

export default TopTracks;
