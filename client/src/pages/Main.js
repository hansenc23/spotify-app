import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import './Main.scss';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import menu from '../images/menu.svg';
import Profile from '../components/Profile';
import Menu from '../components/Menu';
import TopTracks from './TopTracks';
import TopArtists from './TopArtists';
import Recent from './Recent';
import Playlists from './Playlists';
import { authToken } from '../token';
import { ToggleContext } from '../context/ToggleContext';

const Main = () => {
  const { toggle } = useContext(ToggleContext);
  // return (
  //   <>
  //     {/* <div className='main-container'><Navbar /></div> */}

  //     <div className='main-container'>
  //       <Router>
  //         <Switch>
  //           <Route path='/top-tracks' component={TopTracks} />
  //           <Route path='/top-artists' component={TopArtists} />
  //           <Route path='/recent' component={Recent} />
  //           <Route path='/playlists' component={Playlists} />
  //         </Switch>
  //       </Router>
  //       {/* <Navbar /> */}
  //     </div>
  //   </>
  // );

  return authToken ? (
    <>
      <div className='max'>
        <div className='main-container'>
          <Router primary={false}>
            <Redirect to='/top-tracks' />
            <Profile toggleProfile={toggle} />
            <Switch>
              <Route path='/top-tracks' component={TopTracks} />
              <Route path='/top-artists' component={TopArtists} />
              <Route path='/recent' component={Recent} />
              <Route path='/playlists' component={Playlists} />
            </Switch>
            <Navbar />
          </Router>
        </div>
      </div>
    </>
  ) : (
    ''
  );
};

export default Main;
