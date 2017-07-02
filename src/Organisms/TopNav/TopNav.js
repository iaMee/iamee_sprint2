import React, { Component } from 'react';
import style from './TopNav.css';
import PropTypes from 'prop-types';
import NavIcon from '../../Atoms/NavIcons/NavIcon';
import LogoPic from '../../Assets/Images/navLogo.png'
import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class TopNav extends Component {
  constructor() {
    super()
    this.state = {
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

  goBack = () => {
    history.goBack()
  }

  getFavicon = (iconImage, size) => {
    switch(iconImage){
      case "home":
        return <FaHome color="white" size={size}/>
        break
      case "notifications":
        return <FaBell color="white" size={size}/>
        break
      case "create":
        return <FaPlusCircle color="white" size={size}/>
        break
      case "find":
        return <FaSearch color="white" size={size}/>
        break
      case "buddies":
        return <FaUsers color="white" size={size}/>
        break
      case "back":
        return <FaArrowLeft color="white" size={size}/>
        break
      case "user":
        return <FaUsers color="white" size={size}/>
        break
    }
  }

  render() {
    return (
      <div className="top-nav">
        <div className="nav-bar">
          <div className="navicon-box" id="#back">
            <FaArrowLeft id="#back" color="white" onClick={this.goBack} size={this.state.size}/>
          </div>
          <div className="logo-pic">
            <img src={this.state.logoPic} alt=""/>
          </div>
          <NavIcon
            id = {this.state.userIcon.id}
            iconImage = {this.getFavicon(this.state.userIcon.iconImage, this.state.size)}
            text = {this.state.userIcon.text}
            path = {this.state.userIcon.path}
          />
        </div>
      </div>
    );
  }
};

export default TopNav;
