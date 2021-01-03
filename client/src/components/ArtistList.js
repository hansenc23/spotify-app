import React from 'react';
import Artist from './Artist';
import './ArtistList.scss';

const ArtistList = ({ topArtistsData }) => {
  return <div className='artistlist-container'>{topArtistsData && topArtistsData.map((artist) => <Artist key={artist.id} artist={artist} />)}</div>;
};

export default ArtistList;
