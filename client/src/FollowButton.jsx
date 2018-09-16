import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import style from './styles/header.css';
import classNames from 'classnames';

const FollowBtnClass = isFollowed =>
  classNames(style.textButton, style.follow, {
    [style.followed]: isFollowed
  });

class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.hoverToggle = this.hoverToggle.bind(this);
  }

  hoverToggle() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var BtnTXT = this.props.artist.followed ? (this.state.hover ? 'UNFOLLOW' : 'FOLLOWING') : 'FOLLOW';
    return (
      <button className={FollowBtnClass(this.props.artist.followed)} onClick={this.props.handleFollowToggle} onMouseEnter={this.hoverToggle} onMouseLeave={this.hoverToggle}>
        {BtnTXT}
      </button>
    );
  }
}

export default hot(module)(FollowButton);
