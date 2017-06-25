import React, { Component } from 'react';
import style from './NavIcon.css';

const NavIcon = ({
  iconImage,
  text
}) => (
  <div className="navicon-box">
    <div className="navicon-image">
      {iconImage}
    </div>
    <div className="navicon-text">
      <p>{text}</p>
    </div>
  </div>
)

export default NavIcon;
