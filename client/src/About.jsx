import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import AboutStyle from './styles/About.css';
import classNames from 'classnames';
import ArtistPics from './ArtistPics.jsx';
import LocationStat from './LocationStat.jsx';
import headerStyle from './styles/header.css';

const CollapseBtnClass = classNames(headerStyle.textButton, headerStyle.follow, 'button', 'biography-toggle-collapse');
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseBio: true
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState(state => ({
      collapseBio: !state.collapseBio
    }));
  }
  render() {
    // console.log('COMPONENT: ABOUT:', this.props);

    return (
      <div className="about-container">
        <div className="about-container-left">
          <div className="biography-container">
            <h2 className="biography-header">Bio</h2>
            <div className={`biography-txt-container ${this.state.collapseBio ? 'collapsed' : 'expanded'}`}>
              {this.props.artist.about.Biography.split('\n').map(paragraph => (
                <React.Fragment>
                  <p className="biography-txt">{paragraph}</p>
                </React.Fragment>
              ))}
            </div>
            <button className={CollapseBtnClass} onClick={this.handleCollapse}>
              {this.state.collapseBio ? 'EXPAND' : 'HIDE'}
            </button>
          </div>
          <ArtistPics artistImages={this.props.artist.artistImages} />
        </div>
        <div className="about-container-right">
          <LocationStat stats={this.props.artist.about.Where} />
        </div>
      </div>
    );
  }
}

export default hot(module)(About);
