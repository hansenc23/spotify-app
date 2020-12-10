import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { SpotifyProvider } from './context/SpotifyContext';
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';
import Recent from './pages/Recent';
import Playlists from './pages/Playlists';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/top-tracks' component={TopTracks} />
          <Route path='/top-artists' component={TopArtists} />
          <Route path='/recent' component={Recent} />
          <Route path='/playlists' component={Playlists} />
        </Switch>
        <Login />
      </Router>
    </div>
  );
}

export default App;
