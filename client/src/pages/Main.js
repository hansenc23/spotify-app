import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Main.scss';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import menu from '../images/menu.svg';

const Main = () => {
  return (
    <>
      <div className='main-container'>
        <Navbar />
        {/* <div className='menu-logo'>
          <img src={menu} alt='' />
        </div> */}
      </div>
    </>
  );
};

export default Main;
