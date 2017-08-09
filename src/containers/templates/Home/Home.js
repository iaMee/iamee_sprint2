import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import TopNav from 'components/organisms/TopNav/TopNav';

import BottomNav from 'components/organisms/BottomNav/BottomNav';

class Home extends Component {
  constructor() {
    super();
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
    return <div>HELLO</div>;
  }
}

export default Home;
