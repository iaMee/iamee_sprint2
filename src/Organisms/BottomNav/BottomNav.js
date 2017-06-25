import React, { Component } from 'react';

import style from './BottomNav.css';

import NavIcon from '../../Atoms/NavIcons/NavIcon';
import PropTypes from 'prop-types';

import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';

// BottomNav which has NavIcon components. It requires a redirect path, iconImage and text
class BottomNav extends Component {
  constructor(){
    super()
    this.state={
      // To add icons, add an object which has a tet, iconImage and path. To add iconImages, add extra case to the getFavicon function below. To change path, adjust accordingly based on React Router
      icons: [
        {
          text: '',
          iconImage: "home",
          path: '/'
        },
        {
          text: '',
          iconImage: "notifications",
          path: '/test'
        },
        {
          text: '',
          iconImage: "create",
          path: '/test'
        },
        {
          text: '',
          iconImage: "find",
          path: '/test'
        },
        {
          text: '',
          iconImage: "buddies",
          path: '/test'
        },
      ]
    }
    this.getFavicon.bind(this)
  }

  // depending on the provided string it will return a different icon - the switch statements needs iconImage strings and the Favicon component. It takes in a size parameter which changes the size of the favicon
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
    }
  }

// To change icon size, change the second arguement in this.getFavicon
  render() {
    return (
      <div className="navfooter">
        {this.state.icons.map(icon =>
          <NavIcon
            iconImage = {this.getFavicon(icon.iconImage, 30)}
            text = {icon.text}
            path = {icon.path}
          />
        )}
      </div>
    );
  }
};

BottomNav.propTypes = {
  path: PropTypes.string.isRequired,
  iconImage: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired
}

export default BottomNav;
