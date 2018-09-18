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
    const imageRender = (url, idx) => (
      <div className={idx === 0 ? 'carousel-item active' : 'carousel-item'}>
        <img className="d-block w-100" src={url} alt="First slide" />
      </div>
    );
    const carouselIndicatorRender = (url, idx) => <li data-target="#carouselIndicators" data-slide-to={`${idx}`} className={idx === 0 ? 'active' : ''} />;

    return (
      <div className="artistPics-container">
        <h2 className="artistPics-header">Image Gallery</h2>
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {/* Indicator Counter is Dynamic */}
            {this.props.artistImages.map((imgURL, idx) => carouselIndicatorRender(imgURL, idx))}
          </ol>
          <div className="carousel-inner">
            {/* IMAGES RENDER HERE */}
            {this.props.artistImages.map((imgURL, idx) => imageRender(imgURL, idx))}
          </div>
          <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default hot(module)(ArtistPics);
