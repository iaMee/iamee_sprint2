import React, { Component } from 'react';
import style from './BottomNav.css';
import { Footer } from 'react-materialize'
import NavIcon from '../../Atoms/NavIcons/NavIcon'

class BottomNav extends Component {

  pathRedirect() {
    
  }

  render() {
    return (
      <Footer>
        <NavIcon
        onClick={pathRedirect}
        iconImage=""
        text=
        />
        <NavIcon
        onClick={pathRedirect}
        iconImage=""
        text=
        />
        <NavIcon
        onClick={pathRedirect}
        iconImage=""
        text=
        />
        <NavIcon
        onClick={pathRedirect}
        iconImage=""
        text=
        />
        <NavIcon
        onClick={pathRedirect}
        iconImage=""
        text=
        />
      </Footer>
    );
  }
}
