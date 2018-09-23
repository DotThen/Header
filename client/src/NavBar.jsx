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
    this.state = {
      searchOn: false,
      homeOn: false,
      libraryOn: false
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleToggleSearch = this.handleToggleSearch.bind(this);
    this.handleToggleHome = this.handleToggleHome.bind(this);
    this.handleToggleLibrary = this.handleToggleLibrary.bind(this);
  }
  handleReset() {
    this.setState(state => ({
      searchOn: false,
      homeOn: false,
      libraryOn: false
    }));
  }
  handleToggleSearch() {
    if (!this.state.searchOn) {
      this.setState(state => ({
        searchOn: true,
        homeOn: false,
        libraryOn: false
      }));
    }
  }
  handleToggleHome() {
    if (!this.state.homeOn) {
      this.setState(state => ({
        searchOn: false,
        homeOn: true,
        libraryOn: false
      }));
    }
  }
  handleToggleLibrary() {
    if (!this.state.libraryOn) {
      this.setState(state => ({
        searchOn: false,
        homeOn: false,
        libraryOn: true
      }));
    }
  }

  render() {
    // console.log('COMPONENT:NAVBAR', typeof spotifyLogo);
    return (
      <React.Fragment>
        <div className="nav-bar-container">
          <nav className="navBar">
            <div className="navBar-expand">
              <div className="navBar-header" onClick={this.handleReset}>
                <i
                  dangerouslySetInnerHTML={{
                    __html: require('./icons/spotify-logo--text.svg').toString()
                  }}
                  className="logo"
                />
              </div>
              <br />
              <br />
              <div className={`navBar-item search ${this.state.searchOn ? 'active' : 'default'}`} onClick={this.handleToggleSearch}>
                {this.state.searchOn ? (
                  <i
                    dangerouslySetInnerHTML={{
                      __html: require('./icons/search-active-icon.svg').toString()
                    }}
                    className="icon search-active-icon"
                  />
                ) : (
                  <i
                    dangerouslySetInnerHTML={{
                      __html: require('./icons/search-icon.svg').toString()
                    }}
                    className="icon search-icon"
                  />
                )}
                <span className="navbar-link__text" style={{ background: 'green !important' }}>
                  Search
                </span>
              </div>
              <br />
              <div className={`navBar-item home ${this.state.homeOn ? 'active' : 'default'}`} onClick={this.handleToggleHome}>
                {this.state.homeOn ? (
                  <i
                    dangerouslySetInnerHTML={{
                      __html: require('./icons/home-active-icon.svg').toString()
                    }}
                    className="icon home-active-icon"
                  />
                ) : (
                  <i
                    dangerouslySetInnerHTML={{
                      __html: require('./icons/home-icon.svg').toString()
                    }}
                    className="icon home-icon"
                  />
                )}
                <span className="navbar-link__text"> Home</span>
              </div>
              <br />
              <div>
                <div className={`navBar-item library ${this.state.libraryOn ? 'active' : 'default'}`} onClick={this.handleToggleLibrary}>
                  {this.state.libraryOn ? (
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/collection-active-icon.svg').toString()
                      }}
                      className="icon collection-active-icon"
                    />
                  ) : (
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/collection-icon.svg').toString()
                      }}
                      className="icon collection-icon"
                    />
                  )}
                  <span className="navbar-link__text"> Your Library</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(NavBar);
