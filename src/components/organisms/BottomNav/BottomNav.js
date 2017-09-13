import React, { Component } from 'react';
import NavIcon from 'components/atoms/NavIcons/NavIcon';
import style from './BottomNav.css';

import iconHome from 'assets/Images/home-icon.svg';
import iconChart from 'assets/Images/line-chart-icon.svg';
import iconSearch from 'assets/Images/magnifier-icon.svg';
import iconStar from 'assets/Images/starfish-icon.svg';

class BottomNav extends Component {
  constructor() {
    super();
    this.state = {
      icons: [
        {
          text: '',
          iconImage: iconHome,
          path: '/',
          id: 'home'
        },
        {
          text: '',
          iconImage: iconChart,
          path: '/',
          id: 'notifications'
        },
        {
          text: '',
          iconImage: iconSearch,
          path: '/',
          id: 'find'
        },
        {
          text: '',
          iconImage: iconStar,
          path: '/',
          id: 'buddies'
        }
      ],
      size: 23
    };
  }

  render() {
    return (
      <div className="bottom-nav">
        <div className="nav-bar">
          {this.state.icons.map(icon =>
            <NavIcon
              id={icon.id}
              iconImage={<img src={icon.iconImage} alt={icon.text} />}
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
