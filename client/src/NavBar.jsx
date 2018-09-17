import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import classNames from 'classnames';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.artist);
    return (
      <div>
        {/* this.props.artist.about.Biography */}
        Hello World
      </div>
    );
  }
}

export default hot(module)(NavBar);
