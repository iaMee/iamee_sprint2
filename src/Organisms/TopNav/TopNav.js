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
      logoPic: LogoPic,
      userIcon: {
        text: '',
        iconImage: "user",
        path: '/',
        id: "user"
      },
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
