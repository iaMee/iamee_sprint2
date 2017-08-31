import React, { Component } from 'react';
import NavIcon from 'components/atoms/NavIcons/NavIcon';
import style from './BottomNav.css';
import FaHome from 'react-icons/lib/fa/home';
import FaChart from 'react-icons/lib/fa/line-chart';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

class BottomNav extends Component {
  constructor() {
    super();
    this.state = {
      icons: [
        {
          text: '',
          iconImage: 'home',
          path: '/',
          id: 'home'
        },
        {
          text: '',
          iconImage: 'notifications',
          path: '/',
          id: 'notifications'
        },
        {
          text: '',
          iconImage: 'create',
          path: '/',
          id: 'create'
        },
        {
          text: '',
          iconImage: 'find',
          path: '/',
          id: 'find'
        },
        {
          text: '',
          iconImage: 'buddies',
          path: '/',
          id: 'buddies'
        }
      ],
      size: 23
    };
  }

  getFavicon = (iconImage, size) => {
    switch (iconImage) {
      case 'home':
        return <FaHome color="white" size={size} />;
      case 'notifications':
        return <FaChart color="white" size={size} />;
      case 'create':
        return <FaMapMarker color="white" size={size} />;
      case 'find':
        return <FaSearch color="white" size={size} />;
      case 'buddies':
        return <FaUsers color="white" size={size} />;
      case 'back':
        return <FaArrowLeft color="white" size={size} />;
      case 'user':
        return <FaUsers color="white" size={size} />;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="bottom-nav">
        <div className="nav-bar">
          {this.state.icons.map(icon =>
            <NavIcon
              id={icon.id}
              iconImage={this.getFavicon(icon.iconImage, this.state.size)}
              key={icon.id}
              text={icon.text}
              path={icon.path}
            />
          )}
        </div>
        <div className="bottom-nav-placeholder" />
      </div>
    );
  }
}

export default BottomNav;
