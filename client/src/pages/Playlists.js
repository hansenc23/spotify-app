import React, { useState, useContext, useEffect } from 'react';
import ArtistList from '../components/ArtistList';
import Menu from '../components/Menu';
import './Playlists.scss';
import { ToggleContext } from '../context/ToggleContext';
import { BiSearch } from 'react-icons/bi';
import Playlist from '../components/Playlist';
import { SpotifyContext } from '../context/SpotifyContext';
import Spinner from '../components/Spinner';

const Playlists = () => {
  const { toggle, toggleProfile } = useContext(ToggleContext);
  const { getPlaylists } = useContext(SpotifyContext);
  const [playlistData, setPlaylistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    fetchPlaylist(limit, offset);
  }, [limit, offset]);

  const fetchPlaylist = () => {
    getPlaylists(limit, offset).then((res) => {
      if (res.status === 200) {
        // setPlaylistData(res.data.items);
        setPlaylistData((prev) => [...prev, ...res.data.items]);
        if (res.data.items < limit) {
          setIsEmpty(true);
        }
        // setLoading(true);
      }
    });
  };

  const updateSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (Math.round(scrollHeight - scrollTop) === clientHeight || Math.round(scrollHeight - scrollTop) === clientHeight + 1) {
      setOffset(limit + offset);
    }
  };

  let filteredPlaylist =
    playlistData &&
    playlistData.filter((playlist) => {
      return playlist.name.toLowerCase().indexOf(searchInput) !== -1;
    });

  return (
    <>
      <div className='menu'>
        <Menu toggleProfile={toggleProfile} />
      </div>
      <div className='playlists-container' onScroll={handleScroll}>
        <div className='upper-nav'>
          <h1 className='heading'>Your Playlists</h1>
        </div>
        <div className='search-container'>
          <BiSearch />
          <input className='search-input' type='text' placeholder='Search playlists' value={searchInput} onChange={updateSearch} />
        </div>
        <Playlist playlistData={filteredPlaylist} />

        {isEmpty || filteredPlaylist.length < 5 ? (
          ''
        ) : (
          <div className='spinner-container'>
            <Spinner size='30px' />
          </div>
        )}
      </div>
    </>
  );
};

export default Playlists;
