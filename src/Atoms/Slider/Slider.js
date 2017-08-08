import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marks: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      }
    };
  }

  render() {
    return (
      <Slider
        dots
        value={this.props.value}
        marks={this.state.marks}
        step={this.props.step}
        defaultValue={this.props.defaultValue}
        onChange={this.props.onSliderChange}
        min={this.props.min}
        max={this.props.max}
      />
    );
  }
}

export default CustomSlider;
