import React from 'react';
import menu from '../images/menu.svg';
import './Menu.scss';

const Menu = ({ toggleProfile }) => {
  return (
    <div onClick={toggleProfile} className='menu-container'>
      <img src={menu} alt='' />
    </div>
  );
};

export default Menu;
