import './Profile.scss';
import React, { useState, useEffect, useContext } from 'react';
import { SpotifyContext } from '../context/SpotifyContext';
import profile from '../images/profile.jpg';
import axios from 'axios';
import { authToken, logout } from '../token';
import { get } from 'request';
import Spinner from './Spinner';

const Profile = ({ profileData, toggleProfile }) => {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [playlistCount, setPlaylistCount] = useState(null);
  const { getProfile, getFollowing, getPlaylists } = useContext(SpotifyContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //get user's profile when component loaded
    getProfile()
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.display_name);
          setImg(res.data.images[0].url);
          setFollowers(res.data.followers.total);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //get user's followed artists
    getFollowing()
      .then((res) => {
        if (res.status === 200) {
          setFollowing(res.data.artists.items.length);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //get user's playlist
    getPlaylists()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setPlaylistCount(res.data.total);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //get user's playlist count
  }, [name, img, followers, following, playlistCount]);

  return (
    <div className={'profile-container' + (toggleProfile ? ' open' : '')}>
      <div className='profile-content'>
        {loading ? (
          <Spinner size='50px' />
        ) : (
          <>
            <img src={img} alt='picture' />
            <h2>{name}</h2>
            <div className='profile-metric'>
              <div className='followers'>
                <p className='description'>Followers</p>
                <p className='value'>{followers}</p>
              </div>
              <div className='following'>
                <p className='description'>Following</p>
                <p className='value'>{following}</p>
              </div>
              <div className='Playlists'>
                <p className='description'>Playlists</p>
                <p className='value'>{playlistCount}</p>
              </div>
            </div>
          </>
        )}
        <button onClick={logout} className='logout-btn'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
