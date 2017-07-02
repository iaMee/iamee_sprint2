import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize'
import TopNav from '../../Organisms/TopNav/TopNav';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import BottomNav from '../../Organisms/BottomNav/BottomNav';

class Home extends Component {
  constructor(){
    super()
    this.state={
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
      },
    }
  }
  render() {
    return(
      <div>
        HELLO
        <Slider
            dots
            marks = {this.state.marks}
            step = {1}
            defaultValue = {8}
            min={0}
            max={10}
          />
      </div>
    )
  }
};

export default Home;
