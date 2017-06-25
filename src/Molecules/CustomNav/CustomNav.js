import React, { Component } from 'react';

import style from './CustomNav.css';

import NavIcon from '../../Atoms/NavIcons/NavIcon';
import PropTypes from 'prop-types';

import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

// CustomNav which has NavIcon components. It requires a redirect path, iconImage and text
class CustomNav extends Component {
// To change icon size, change the second arguement in this.getFavicon

// depending on the provided string it will return a different icon - the switch statements needs iconImage strings and the Favicon component. It takes in a size parameter which changes the size of the favicon

constructor(props) {
  super(props)
    this.state = {

  }

  this.getFavicon.bind(this)
}

getFavicon(iconImage, size) {
  switch(iconImage){
    case "home":
      return <FaHome size={size}/>
      break
    case "notifications":
      return <FaBell size={size}/>
      break
    case "create":
      return <FaPlusCircle size={size}/>
      break
    case "find":
      return <FaSearch size={size}/>
      break
    case "buddies":
      return <FaUsers size={size}/>
      break
    case "back":
      return <FaArrowLeft size={size}/>
      break
  }
}
  render() {
    return (
      <div className="nav-bar">
        {this.props.icons.map(icon =>
          <NavIcon
            id = {icon.id}
            iconImage = {this.getFavicon(icon.iconImage, this.props.size)}
            text = {icon.text}
            path = {icon.path}
          />
        )}

        <div className="logo-pic">
          <img src={this.props.logoPic} alt=""/>
        </div>

        <div className="profile-pic">
          <img src={this.props.profilePic} alt=""/>
        </div>
      </div>
    );
  }
};

CustomNav.propTypes = {
  path: PropTypes.string.isRequired,
  iconImage: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
  logoPic: PropTypes.string
}

export default CustomNav;
