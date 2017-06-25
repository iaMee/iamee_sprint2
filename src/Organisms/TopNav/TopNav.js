import React, { Component } from 'react';

import style from './TopNav.css';

import PropTypes from 'prop-types';

import CustomNav from '../../Molecules/CustomNav/CustomNav';

class TopNav extends Component {
  constructor(){
    super()
    this.state={
      icons: [
        {
          text: '',
          iconImage: "back",
          path: '/',
          id: "back"
        },
      ],
      profilePic: '',
      logoPic: '',
      size: 23
    }
  }

  render() {
    return (
      <div className="top-nav">
        <CustomNav
          icons = {this.state.icons}
          size = {this.state.size}
          profilePic = {this.state.profilePic}
          logoPic = {this.state.logoPic}
        />
      </div>
    );
  }
};

export default TopNav;
