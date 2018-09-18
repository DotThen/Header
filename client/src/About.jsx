import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import AboutStyle from './styles/About.css';
import classNames from 'classnames';
import ArtistPics from './ArtistPics.jsx';
import LocationStat from './LocationStat.jsx';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('COMPONENT: ABOUT:', this.props);

    return (
      <div className="about-container">
        <div className="about-container-left">
          <ArtistPics artistImages={this.props.artist.artistImages} />
          <div className="biography-container">
            <h2 className="biography-header">Bio</h2>
            {this.props.artist.about.Biography.split('\n').map(paragraph => (
              <React.Fragment>
                <p className="biography-txt">{paragraph}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="about-container-right">
          <LocationStat stats={this.props.artist.about.Where} />
        </div>
      </div>
    );
  }
}

export default hot(module)(About);
