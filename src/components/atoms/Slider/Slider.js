import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './Slider.css';

import Feel_1 from '../../../Assets/Images/feel_1.svg';
import Feel_2 from '../../../Assets/Images/feel_2.svg';
import Feel_3 from '../../../Assets/Images/feel_3.svg';
import Feel_4 from '../../../Assets/Images/feel_4.svg';
import Feel_5 from '../../../Assets/Images/feel_5.svg';

class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marks: {
        1: <img src={Feel_1} />,
        2: <img src={Feel_2} />,
        3: <img src={Feel_3} />,
        4: <img src={Feel_4} />,
        5: <img src={Feel_5} />
      }
    };
  }

  render() {
    return (
      <Slider
        dots
        marks={this.state.marks}
        step={this.props.step}
        defaultValue={this.props.defaultValue}
        onChange={this.props.onSliderChange}
        min={this.props.min}
        max={this.props.max}
        className="rating-slider"
      />
    );
  }
}

export default CustomSlider;
