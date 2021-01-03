import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getHashParams } from '../utils/index';
import Main from './Main';
import './Login.scss';

const Login = () => {
  // const { access_token } = getHashParams();
  // let localAccessToken;

  // if (access_token) {
  //   window.localStorage.setItem('access_token', access_token);
  //   localAccessToken = window.localStorage.getItem('access_token');
  // }

  // return localAccessToken ? (
  //   <>
  //     <Redirect to='/top-tracks' />
  //     {/* <Main /> */}
  //   </>
  // ) : (
  //   <div className='login-container'>
  //     <h1>Hey there !</h1>
  //     <a href='http://localhost:5000/login'>Login with Spotify</a>
  //     <h1>{access_token}</h1>
  //   </div>
  // );

  return (
    <div className='login-container'>
      <h1>Hey there!</h1>
      <a href='/login'>Login with Spotify</a>
    </div>
  );
};

export default Login;
