import React, { Component } from 'react';

import style from './BottomNav.css';

import PropTypes from 'prop-types';

import CustomNav from '../../Molecules/CustomNav/CustomNav';

class BottomNav extends Component {
  constructor(){
    super()
    this.state={
      icons: [
        {
          text: '',
          iconImage: "home",
          path: '/',
          id:"home"
        },
        {
          text: '',
          iconImage: "notifications",
          path: '/test',
          id:"notifications"
        },
        {
          text: '',
          iconImage: "create",
          path: '/test',
          id:"create"
        },
        {
          text: '',
          iconImage: "find",
          path: '/test',
          id:"find"
        },
        {
          text: '',
          iconImage: "buddies",
          path: '/test',
          id:"buddies"
        },
      ],
      size: 23
    }
  }

  render() {
    return (
      <div className="bottom-nav">
        <CustomNav
          icons = {this.state.icons}
          size = {this.state.size}
        />
      </div>
    );
  }
};

export default BottomNav;
