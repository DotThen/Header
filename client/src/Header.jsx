import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const Header = ({ artist }) => {
  console.log('HEADER', 'GOT CALLED');
  return (
    <div>
      <h1>{artist.artistName}</h1>
      <img src={artist.artistImages[0]} />
      <div>{artist.about.Biography}</div>
      <div>{artist.followersNumber.toLocaleString('en')} Followers</div>
    </div>
  );
};

export default hot(module)(Header);
