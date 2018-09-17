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
    console.log('COMPONENT: ArtistPics:', this.props.artistImages);
    const imageRender = (url, idx) => {
      return (
        <div class={idx === 0 ? 'carousel-item active' : 'carousel-item'}>
          <img class="d-block w-100" src={url} alt="First slide" />
        </div>
      );
    };
    return (
      <div className="artistPics-container">
        <h2 className="artistPics-header">Image Gallery</h2>
        <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" class="active" />
            <li data-target="#carouselIndicators" data-slide-to="1" />
            <li data-target="#carouselIndicators" data-slide-to="2" />
          </ol>

          <div class="carousel-inner">
            {/* IMAGES RENDER HERE */}
            {this.props.artistImages.map((imgURL, idx) => imageRender(imgURL, idx))}
          </div>
          <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default hot(module)(ArtistPics);
