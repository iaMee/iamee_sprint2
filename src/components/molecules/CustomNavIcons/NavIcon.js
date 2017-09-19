import React, { Component } from 'react';
import style from './NavIcon.css';
import { Link } from 'react-router-dom';

import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';

class NavIcon extends Component {
  render() {
    return (
      <div className="navicon-box">
        <Link to={this.props.path}>
          <div className="navicon-image">{this.props.iconImage}</div>
          <div className="navicon-text">
            <p>{this.props.text}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default NavIcon;
