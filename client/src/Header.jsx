import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import PlayButton from './PlayButton.jsx';
import FollowButton from './FollowButton.jsx';
import EtcButton from './EtcButton.jsx';

const Header = ({ artist, handleFollowToggle }) => {
  // background styling has to be done in-line.
  const blackBG = {
    //linear-gradient(transparent, black),
    background: `linear-gradient(transparent -30%, rgb(24,24,24)), url(${artist.artistImages[0]}) no-repeat top`,
    backgroundSize: 'cover'
  };

  return (
    <div style={blackBG} className={headerStyle.artistPortraitBG}>
      <div className={headerStyle.scrollSectionContainer}>
        <div className={headerStyle.monthlyListeners}>{artist.followersNumber.toLocaleString('en')} Followers</div>
        <h1 className={headerStyle.artistName}>{artist.artistName}</h1>
        <div className={headerStyle.buttonSection}>
          <PlayButton />
          <FollowButton artist={artist} handleFollowToggle={handleFollowToggle} />
          <EtcButton artist={artist} handleFollowToggle={handleFollowToggle} />
        </div>
        <div>{artist.about.Biography}</div>
      </div>
    </div>
  );
};

export default hot(module)(Header);
