import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import AboutStyle from './styles/About.css';
import classNames from 'classnames';

class LocationStat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('COMPONENT: LOCATION STAT:', this.props);
    const locationData = Object.entries(this.props.stats);
    locationData.sort((a, b) => b[1] - a[1]);
    const entryToRender = (location, followerCount) => (
      <div className="locationStat-entry">
        <h5 className="locationStat-location">{location}</h5>
        <h6 className="locationStat-followerCount">{followerCount.toLocaleString('en')} followers</h6>
      </div>
    );
    return (
      <div className="locationStat-container">
        <h4 className="locationStat-header">Where People Listen</h4>
        {locationData.map((entry, idx) => {
          if (idx < 8) return entryToRender(entry[0], entry[1]);
        })}
      </div>
    );
  }
}

export default hot(module)(LocationStat);
