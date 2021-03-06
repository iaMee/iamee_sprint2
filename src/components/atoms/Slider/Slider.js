import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './Slider.css';

import Feel_1 from 'assets/Images/feel_1.svg';
import Feel_2 from 'assets/Images/feel_2.svg';
import Feel_3 from 'assets/Images/feel_3.svg';
import Feel_4 from 'assets/Images/feel_4.svg';
import Feel_5 from 'assets/Images/feel_5.svg';

const marks = {
  1: <img alt="Feeling rate 1" src={Feel_1} />,
  2: <img alt="Feeling rate 2" src={Feel_2} />,
  3: <img alt="Feeling rate 3" src={Feel_3} />,
  4: <img alt="Feeling rate 4" src={Feel_4} />,
  5: <img alt="Feeling rate 5" src={Feel_5} />,
};

const CustomSlider = props => {
  return (
    <Slider
      dots
      marks={marks}
      step={props.step}
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onSliderChange}
      min={props.min}
      max={props.max}
      className="rating-slider"
    />
  );
};

export default CustomSlider;
