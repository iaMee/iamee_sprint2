import React, { Component } from 'react';
import style from './Circle.css';
import PropTypes from 'prop-types';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getCircleStyles = this.getCircleStyles.bind(this);
  }

  getCircleStyles() {
    return {
      height: this.props.height,
      width: this.props.height,
      borderRadius: this.props.radius,
      background: this.props.boolean ? this.props.background : '',
      border: this.props.boolean ? '' : this.props.border,
      color: this.props.boolean ? '' : this.props.font,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  render() {
    return (
      <div className={this.props.className} style={this.getCircleStyles()} id={this.props.tag}>
        <div>
          {this.props.title}
          {this.props.description}
        </div>
      </div>
    );
  }
}

Circle.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  radius: PropTypes.string.isRequired,
};

export default Circle;
