import React from 'react';
import spinner from '../images/spinner-green.svg';

const Spinner = ({ size }) => {
  return <img src={spinner} style={{ width: size }} alt='' />;
};

export default Spinner;
