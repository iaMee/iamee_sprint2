import React, { Component } from 'react';
import style from './NavIcon.css';
import { Link } from 'react-router-dom';

//navicon are the boiler box and texts placed within the bottom nav
const NavIcon = ({
  iconImage, // takes in a favicon
  text, // takes in text as title
  path // takes in path to page to redirect
}) => (
  <div className="navicon-box">
    {/* <Link to="/home"> */}
      <div className="navicon-image">
        {iconImage}
      </div>
      <div className="navicon-text">
        <p>{text}</p>
      </div>
    {/* </Link> */}
  </div>
)

export default NavIcon;
