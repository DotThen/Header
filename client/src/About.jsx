import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import classNames from 'classnames';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.artist.about.Biography}</div>;
  }
}

export default hot(module)(About);
