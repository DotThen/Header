import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import Header from './Header.jsx';
const getArtistInfo = callback => {
  axios
    .get(`/artists/${Math.floor(Math.random() * 99 + 1)}`)
    .then(response => {
      console.log(response.data);
      callback(response.data[0]);
    })
    .catch(error => {
      // console.error(error);
    });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      artistDisp: null
    };
  }
  componentDidMount() {
    getArtistInfo(responseData => {
      this.setState({ artistDisp: responseData });
    });
  }

  render() {
    var toRender = !!this.state.artistDisp ? <Header artist={this.state.artistDisp} /> : <div />;
    return <div>{toRender}</div>;
  }
}

export default hot(module)(App);
