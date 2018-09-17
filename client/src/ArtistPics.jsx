import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import AboutStyle from './styles/About.css';
import classNames from 'classnames';

class ArtistPics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="artistPics-container">
        {/* this.props.artist.ArtistPics.Biography */}
        ArtistPics
      </div>
    );
  }
}

export default hot(module)(ArtistPics);
