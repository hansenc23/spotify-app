import React, { useEffect, useState, useContext } from 'react';
import ArtistList from '../components/ArtistList';
import Menu from '../components/Menu';
import Profile from '../components/Profile';
import TrackList from '../components/TrackList';
import { ToggleContext } from '../context/ToggleContext';
import { SpotifyContext } from '../context/SpotifyContext';
import Spinner from '../components/Spinner';
import './TopArtists.scss';

const TopArtists = () => {
  const { toggle, toggleProfile } = useContext(ToggleContext);
  const [topArtistsData, setTopArtistsData] = useState();
  const { getTopArtists } = useContext(SpotifyContext);
  const [range, setRange] = useState('long_term');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopArtists(range).then((res) => {
      if (res.status === 200) {
        console.log(res);
        setTopArtistsData(res.data.items);
        setLoading(false);
      }
    });
  }, [range]);

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
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='top-artists-container'>
        <div className='upper-nav'>
          <h1 className='heading'>
            Top Artists
            {loading ? <span>&nbsp; {loading ? <Spinner size='20px' /> : ''}</span> : ''}
          </h1>

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
              <li></li>
            </ul>
          </div>
        </div>
        <ArtistList topArtistsData={topArtistsData} />
      </div>
    </>
  );
};

export default TopArtists;
