import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import style from './styles/header.css';
import { Button } from 'reactstrap';
import { ListGroup } from 'react-bootstrap/lib/ListGroup';
import { ListGroupItem } from 'react-bootstrap/lib/ListGroupItem';
import classNames from 'classnames';
import PlayButton from './PlayButton.jsx';
import FollowButton from './FollowButton.jsx';
import EtcButton from './EtcButton.jsx';

console.log('BOOTSTRAP BUTTON', Button);

var txtBtnClass = (str, isFollowed) =>
  classNames(style.textButton, {
    [style.play]: str === 'PLAY',
    [style.follow]: str === 'FOLLOW',
    [style.etc]: str === 'ETC'
  });

const Header = ({ artist, handleFollowToggle }) => {
  // background styling has to be done in-line.
  const blackBG = {
    //linear-gradient(transparent, black),
    background: `linear-gradient(transparent -30%, rgb(24,24,24)), url(${artist.artistImages[0]}) no-repeat top`,
    backgroundSize: 'cover'
  };

  return (
    <div style={blackBG} className={style.artistPortraitBG}>
      <div className={style.scrollSectionContainer}>
        <div className={style.monthlyListeners}>{artist.followersNumber.toLocaleString('en')} Followers</div>
        <h1 className={style.artistName}>{artist.artistName}</h1>
        <div className={style.buttonSection}>
          <PlayButton />
          <FollowButton artist={artist} handleFollowToggle={handleFollowToggle} />
          <EtcButton />
        </div>
        <div>{artist.about.Biography}</div>
      </div>
    </div>
  );
};

export default hot(module)(Header);
