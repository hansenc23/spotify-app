import './Login.scss';
import React, { useEffect, useContext, useState } from 'react';
import { getHashParams } from '../utils/index';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
const Login = () => {
  const { setLocalAccessToken, getLocalAccessToken, setAccessToken } = useContext(AuthContext);

  const { access_token } = getHashParams();

  const [isTokenExist, setIsTokenExist] = useState(false);

  useEffect(() => {
    //store access token on local storage upon inital login
    if (access_token) {
      setLocalAccessToken(access_token);
    }

    //check if token has existed
    if (getLocalAccessToken()) {
      setIsTokenExist(true);
    }
  }, [isTokenExist]);

  return isTokenExist ? (
    <Redirect to='/home' />
  ) : (
    <div className='login-container'>
      <h1>Hey there,</h1>
      <a className='login-btn' href='http://localhost:5000/login'>
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
