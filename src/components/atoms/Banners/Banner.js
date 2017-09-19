import React, { Component } from 'react';
import style from './Banner.css';
import PropTypes from 'prop-types';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id={this.props.id} className="banner">
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired
};

export default Banner;
