import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import classNames from 'classnames';

const PlayBtnClass = classNames(headerStyle.textButton, headerStyle.play);

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.playToggle = this.playToggle.bind(this);
  }

  playToggle() {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    const PlayBtnTXT = !this.state.playing ? 'PAUSE' : 'PLAY';
    return (
      <button className={PlayBtnClass} onClick={this.playToggle}>
        {PlayBtnTXT}
      </button>
    );
  }
}

export default hot(module)(PlayButton);
