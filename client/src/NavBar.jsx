import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.artist);
    return (
      <React.Fragment>
        <div className="nav-bar-container">
          <nav className="navBar">
            <div className="navBar-expand">
              <div className="navBar-header">
                <InlineSVG src={require('svg-inline-loader!./icons/spotify-logo--text.svg')} className="logo" />
              </div>
              <ul>
                {/* FIXME: trying to remove the background-color !important not doing the job */}
                <li>
                  <div className="navBar-item icon-left">
                    <span className="navbar-link__text">Search</span>
                    <InlineSVG src={require('svg-inline-loader!./icons/search-icon.svg')} className="icon search-icon" />
                    <InlineSVG src={require('svg-inline-loader!./icons/search-active-icon.svg')} className="icon search-active-icon" />
                  </div>
                </li>
                <li>
                  <div className="navBar-item icon-left">
                    <span className="navbar-link__text">Home</span>
                    <InlineSVG src={require('svg-inline-loader!./icons/home-icon.svg')} className="icon home-icon" />
                    <InlineSVG src={require('svg-inline-loader!./icons/home-active-icon.svg')} className="icon home-active-icon" />
                  </div>
                </li>
                <li>
                  <div>
                    <div className="navBar-item icon-left">
                      <span className="navbar-link__text">Your Library</span>
                      <InlineSVG src={require('svg-inline-loader!./icons/collection-icon.svg')} className="icon collection-icon" />
                      <InlineSVG src={require('svg-inline-loader!./icons/collection-active-icon.svg')} className="icon collection-active-icon" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(NavBar);
