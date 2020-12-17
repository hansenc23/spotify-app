import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Main.scss';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import menu from '../images/menu.svg';
import Profile from '../components/Profile';
import Menu from '../components/Menu';

const Main = () => {
  return (
    <>
      <div className='main-container'>
        <Navbar />
        {/* <Profile /> */}
      </div>
    </>
  );
};

export default Main;
