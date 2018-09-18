import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import NavBarStyle from './styles/NavBar.css';
import PlayButton from './PlayButton.jsx';
import FollowButton from './FollowButton.jsx';
import EtcButton from './EtcButton.jsx';
import About from './About.jsx';
import NavBar from './NavBar.jsx';

const Header = ({ artist, handleFollowToggle }) => {
  // background styling has to be done in-line.
  const blackBG = {
    //linear-gradient(transparent, black),
    background: `linear-gradient(transparent -30%, rgb(24,24,24)), url(${artist.artistImages[0]}) no-repeat top`,
    backgroundSize: 'cover'
  };

  return (
    <React.Fragment>
      <NavBar />
      <div style={blackBG} className={headerStyle.artistPortraitBG}>
        <div className={headerStyle.scrollSectionContainer}>
          <span className={headerStyle.monthlyListeners}>{artist.followersNumber.toLocaleString('en')} Followers</span>
          <h1 className={headerStyle.artistName}>{artist.artistName}</h1>
          <div className={headerStyle.buttonSection}>
            <PlayButton />
            <FollowButton artist={artist} handleFollowToggle={handleFollowToggle} />
            <EtcButton artist={artist} handleFollowToggle={handleFollowToggle} />
          </div>
        </div>
      </div>
      <About artist={artist} />
    </React.Fragment>
  );
};

export default hot(module)(Header);
