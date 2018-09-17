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
                <a className="logo navBar-logo--size-large">
                  <InlineSVG src={require('svg-inline-loader!./icons/spotify-logo--text.svg')} />
                </a>
              </div>
              <ul>
                <li className="navBar-group">
                  <div className="navBar-item navBar-item--with-icon-left">
                    <a aria-label="Search" className="link-subtle navBar-link ellipsis-one-line" href="#">
                      <span className="navbar-link__text">Search</span>
                      <div className="icon search-icon">
                        <InlineSVG src={require('svg-inline-loader!./icons/search-icon.svg')} />
                      </div>
                      <div className="icon search-active-icon">
                        <InlineSVG src={require('svg-inline-loader!./icons/search-active-icon.svg')} />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="navBar-group">
                  <div className="navBar-item navBar-item--with-icon-left">
                    <a aria-label="Home" className="link-subtle navBar-link ellipsis-one-line navBar-link--active" href="#">
                      <span className="navbar-link__text">Home</span>
                      <div className="icon home-icon">
                        <InlineSVG src={require('svg-inline-loader!./icons/home-icon.svg')} />
                      </div>
                      <div className="icon home-active-icon">
                        <InlineSVG src={require('svg-inline-loader!./icons/home-active-icon.svg')} />
                      </div>
                    </a>
                  </div>
                </li>
                <li className="navBar-group">
                  <div className="GlueDropTarget">
                    <div className="navBar-item navBar-item--with-icon-left">
                      <a aria-label="Your Library" className="link-subtle navBar-link ellipsis-one-line" href="#">
                        <span className="navbar-link__text">Your Library</span>
                        <div className="icon collection-icon">
                          <InlineSVG src={require('svg-inline-loader!./icons/collection-icon.svg')} />
                        </div>
                        <div className="icon collection-active-icon">
                          <InlineSVG src={require('svg-inline-loader!./icons/collection-active-icon.svg')} />
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="recently-played navBar-group">
                <h2 className="navBar-group-header">RECENTLY PLAYED</h2>
                <ul>
                  <div className="react-contextmenu-wrapper">
                    <div>
                      <div draggable="true">
                        <li className="navBar-item navBar-item--small navBar-item--with-icon-right recently-played__item-1">
                          <a className="navBar-link link-subtle ellipsis-one-line active" title="Phoebe Ryan" href="#">
                            <span className="icon playing-icon spoticon-volume-16" />
                            Phoebe Ryan
                            <span className="type">ARTIST</span>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="react-contextmenu-wrapper">
                    <div>
                      <div draggable="true">
                        <li className="navBar-item navBar-item--small navBar-item--with-icon-right recently-played__item-2">
                          <a className="navBar-link link-subtle ellipsis-one-line " title="Apollo LTD" href="#">
                            Apollo LTD
                            <span className="type">ARTIST</span>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="react-contextmenu-wrapper">
                    <div>
                      <div draggable="true">
                        <li className="navBar-item navBar-item--small navBar-item--with-icon-right recently-played__item-3">
                          <a className="navBar-link link-subtle ellipsis-one-line " title="Betty Who" href="#">
                            Betty Who
                            <span className="type">ARTIST</span>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div>
              <div className="navBar-item navBar-item--with-icon-left download-item">
                <a className="link-subtle navBar-link ellipsis-one-line" href="#">
                  <span className="navbar-link__text">Install App</span>
                  <div className="icon download-icon">
                    <InlineSVG src={require('svg-inline-loader!./icons/download-icon.svg')} />
                  </div>
                </a>
              </div>
            </div>
            <div className="sessionInfo">
              <div className="user-widget link-subtle ellipsis-one-line">
                <a href="#">
                  <span className="user-link">David Yusien Hong</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(NavBar);
