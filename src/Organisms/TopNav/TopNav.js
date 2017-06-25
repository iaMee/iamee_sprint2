import React, { Component } from 'react';
import style from './TopNav.css';
import PropTypes from 'prop-types';
import LogoPic from '../../Assets/Images/navLogo.png'
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
      //this is the main difference from the bottom nav
      logoPic: LogoPic,
      //this is the main difference from the bottom nav
      userIcon: {
        text: '',
        iconImage: "user",
        path: '/',
        id: "user"
      },
      //this dictates the size of the icons 
      size: 23
    }
  }

  render() {
    return (
      <div className="top-nav">
        <CustomNav
          type="top-nav"
          icons = {this.state.icons}
          size = {this.state.size}
          userIcon = {this.state.userIcon}
          logoPic = {this.state.logoPic}
        />
      </div>
    );
  }
};

export default TopNav;
