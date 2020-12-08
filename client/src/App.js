import './App.scss';
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { SpotifyProvider } from './context/SpotifyContext';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <SpotifyProvider>
          <Router basename='/'>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/' component={Login} />
            </Switch>
          </Router>
        </SpotifyProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
