import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import style from './styles/header.css';
import { Button, Dropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classNames from 'classnames';

const etcBtnClass = classNames('btn btn-primary', 'border-0', 'bg-transparent', 'shadow-none', style.etc);

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

  render() {
    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
            Custom Dropdown Content
          </DropdownToggle>
          <DropdownMenu className={style.etcDropList}>
            <div onClick={this.toggle}>Custom dropdown item</div>
            <div onClick={this.toggle}>Custom dropdown item</div>
            <div onClick={this.toggle}>Custom dropdown item</div>
            <div onClick={this.toggle}>Custom dropdown item</div>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

// <React.Fragment>
//   <button type="button" className={etcBtnClass}>
//     &#x22EF;
//   </button>
// </React.Fragment>

// <Dropdown tag="span" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
// <DropdownToggle tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen} className={etcBtnClass}>
//   &#x22EF;
// </DropdownToggle>
// <DropdownMenu className={style.etcDropList + '' + 'bg-dark'}>
//   <DropdownItem onClick={this.toggle}>Start Radio</DropdownItem>
//   <DropdownItem onClick={this.toggle}>Save to Your Library</DropdownItem>
//   <DropdownItem onClick={this.toggle}>Copy Artist Link</DropdownItem>
// </DropdownMenu>
// </Dropdown>

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};

export default hot(module)(EtcButton);
