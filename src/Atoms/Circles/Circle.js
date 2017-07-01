import React, { Component } from 'react';
import style from './Circle.css';
import PropTypes from 'prop-types';

class Circle extends Component {

  constructor(props){
    super(props)
    this.state = {}

    this.getCircleStyles = this.getCircleStyles.bind(this)
  }

  getCircleStyles() {
    return (
      {
        "height": this.props.height,
        "width": this.props.height,
        "borderRadius": this.props.radius,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      }
    )
  }

  render() {
    return (
      <div style={this.getCircleStyles()} id={this.props.tag}>
        <h6>{this.props.title}</h6>

      </div>
    )
  }
};

Circle.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  radius: PropTypes.string.isRequired
}

export default Circle;
