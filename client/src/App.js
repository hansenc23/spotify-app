import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { SpotifyProvider } from './context/SpotifyContext';
import { ToggleProvider } from './context/ToggleContext';
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';
import Recent from './pages/Recent';
import Playlists from './pages/Playlists';
import { authToken } from './token';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(authToken);
  }, [token]);

  return (
    <div className='App'>
      {/* <Router>
        <Switch>
          <Route path='/top-tracks' component={TopTracks} />
          <Route path='/top-artists' component={TopArtists} />
          <Route path='/recent' component={Recent} />
          <Route path='/playlists' component={Playlists} />
        </Switch>
        <Login />
      </Router> */}
      <SpotifyProvider>
        <ToggleProvider>{token ? <Main /> : <Login />}</ToggleProvider>
      </SpotifyProvider>
    </div>
  );
}

export default App;
