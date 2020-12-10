import React from 'react';
import artist from '../images/artist.jpg';
import './Artist.scss';

const Artist = () => {
  return (
    <div className='artist-item'>
      <img src={artist} alt='' />
      <p>BLACKPINK</p>
    </div>
  );
};

export default Artist;
