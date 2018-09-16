import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import etcBtnStyle from './styles/EtcButton.css';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';

const etcBtnClass = classNames('btn btn-secondary', 'btn-lg', 'border-0', 'bg-transparent', 'shadow-none', headerStyle.etc);

class EtcButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  // multi-level dropdown button
  render() {
    return (
      <React.Fragment>
        {/* first level dropdown */}
        <span className="dropdown">
          <button className={etcBtnClass} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            &#x22EF;
            {/* Button shall appear as ... */}
          </button>
          <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
            <li className="dropdown-item">
              <a href="#">Go to Artist Radio</a>
            </li>
            <li className="dropdown-divider" />
            <li className="dropdown-item">
              <a href="#" onClick={this.props.handleFollowToggle}>
                {/* Conditional text ... */}
                {this.props.artist.followed ? 'Unfollow' : 'Follow'}
              </a>
            </li>
            <li className="dropdown-item">
              <a href="#">Report</a>
            </li>
            <li className="dropdown-divider" />
            <li className="dropdown-submenu">
              <a className="dropdown-item" href="#">
                Share
              </a>
              {/* second-level dropdown - appears upon hover. See EtcButton.css for logic. */}
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/facebook.svg')} className="etcDropDown facebook" />
                    Facebook
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/messenger.svg')} className="etcDropDown messenger" />
                    Messenger
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/twitter.svg')} className="etcDropDown twitter" />
                    Twitter
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/telegram.svg')} className="etcDropDown telegram" />
                    Telegram
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/skype.svg')} className="etcDropDown skype" />
                    Skype
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/tumblr.svg')} className="etcDropDown tumblr" />
                    Tumblr
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/baseline-link-24px.svg')} className="etcDropDown link" />
                    Copy Artist Link
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <InlineSVG src={require('svg-inline-loader!./icons/baseline-code-24px.svg')} className="etcDropDown code" />
                    Copy Embed Code
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </React.Fragment>
    );
  }
}

export default hot(module)(EtcButton);
