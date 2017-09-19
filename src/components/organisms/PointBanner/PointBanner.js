import React, { Component } from 'react';
import style from './PointBanner.css';

class PointBanner extends Component {
  render() {
    return (
      <div className="nav-bar point-banner">
        <div className="badges">
          <div>
            <img className="badge-image" src={require('assets/Images/point.png')} alt="" />
            <h6 className="badge-text">{this.props.points} PTS</h6>
          </div>
        </div>
        <div className="badges">
          <div>
            <img className="badge-image" src={require('assets/Images/boost.png')} alt="" />
            <h6 className="badge-text">BOOST</h6>
          </div>
        </div>
        <div className="badges">
          <div>
            <img className="badge-image" src={require('assets/Images/badge.png')} alt="" />
            <h6 className="badge-text">BADGE</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default PointBanner;
