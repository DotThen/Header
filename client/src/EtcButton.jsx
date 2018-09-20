import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import headerStyle from './styles/header.css';
import etcBtnStyle from './styles/EtcButton.css';
// etcBtnStyle not called but still applying style via :global
import classNames from 'classnames';
// import Dropdown from 'rc-dropdown';
// import Menu, { Item as MenuItem, Divider } from 'rc-menu';
// import 'rc-dropdown/assets/index.less';

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
                {/* State-dependent text ... */}
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
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/facebook.svg').toString()
                      }}
                      className="etcDropDown facebook"
                    />
                    Facebook
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/messenger.svg').toString()
                      }}
                      className="etcDropDown messenger"
                    />
                    Messenger
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/twitter.svg').toString()
                      }}
                      className="etcDropDown twitter"
                    />
                    Twitter
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/telegram.svg').toString()
                      }}
                      className="etcDropDown telegram"
                    />
                    Telegram
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/skype.svg').toString()
                      }}
                      className="etcDropDown skype"
                    />
                    Skype
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/tumblr.svg').toString()
                      }}
                      className="etcDropDown tumblr"
                    />
                    Tumblr
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/baseline-link.svg').toString()
                      }}
                      className="etcDropDown link"
                    />
                    Copy Artist Link
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="#">
                    <i
                      dangerouslySetInnerHTML={{
                        __html: require('./icons/baseline-code.svg').toString()
                      }}
                      className="etcDropDown code"
                    />
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
