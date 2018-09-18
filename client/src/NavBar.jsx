import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import classNames from 'classnames';
import spotifyLogo from './icons/spotify-logo--text.svg';
import searchIcon from './icons/search-icon.svg';
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('COMPONENT:NAVBAR', typeof spotifyLogo);
    return (
      <React.Fragment>
        <div className="nav-bar-container">
          <nav className="navBar">
            <div className="navBar-expand">
              <div className="navBar-header">
                <i
                  dangerouslySetInnerHTML={{
                    __html: require('./icons/spotify-logo--text.svg').toString()
                  }}
                  className="logo"
                />
              </div>
              <ul>
                <li>
                  <div className="navBar-item icon-left">
                    <span className="navbar-link__text">Search</span>
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/search-icon.svg').toString()
                      }}
                      className="icon search-icon"
                    />
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/search-active-icon.svg').toString()
                      }}
                      className="icon search-active-icon"
                    />
                  </div>
                </li>
                <li>
                  <div className="navBar-item icon-left">
                    <span className="navbar-link__text">Home</span>
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/home-icon.svg').toString()
                      }}
                      className="icon home-icon"
                    />
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/home-active-icon.svg').toString()
                      }}
                      className="icon home-active-icon"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <div className="navBar-item icon-left">
                      <span className="navbar-link__text">Your Library</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: require('./icons/collection-icon.svg').toString()
                        }}
                        className="icon collection-icon"
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: require('./icons/collection-active-icon.svg').toString()
                        }}
                        className="icon collection-active-icon"
                      />
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
