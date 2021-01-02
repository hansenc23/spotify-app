import React, { useState, useContext, useEffect } from 'react';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import TrackList from '../components/TrackList';
import { ToggleContext } from '../context/ToggleContext';
import { SpotifyContext } from '../context/SpotifyContext';
import Spinner from '../components/Spinner';
import './Recent.scss';
import RecentTracks from '../components/RecentTracks';

const Recent = () => {
  const { toggle, toggleProfile } = useContext(ToggleContext);
  const { getRecent, getTopTracks } = useContext(SpotifyContext);
  const [recentlyPlayedData, setRecentlyPlayedData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecent()
      .then((res) => {
        if (res.status === 200) {
          setRecentlyPlayedData(res.data.items);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchRecent = () => {
    // getTopTracks().then((res) => {
    //   console.log(res);
    // });

    getRecent().then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      {/* <div className='profile'>
        <Profile toggleProfile={toggle} />
      </div> */}
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='recent-container'>
        <div className='upper-nav'>
          <h1 className='heading'>Recently played {loading ? <span>{loading ? <Spinner size='20px' /> : ''}</span> : ''}</h1>
          <div className='track-range-container'></div>
        </div>
        <RecentTracks trackData={recentlyPlayedData} />
      </div>
    </>
  );
};

export default Recent;
