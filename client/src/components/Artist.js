import React from 'react';
import artists from '../images/artist.jpg';
import './Artist.scss';

const Artist = ({ artist }) => {
  return (
    <div className='artist-item'>
      <img src={artist.images[0].url} alt='' />
      <a className='artist-link' href={artist.external_urls.spotify} target='_blank'>
        <p>{artist.name}</p>
      </a>
    </div>
  );
};

export default Artist;
