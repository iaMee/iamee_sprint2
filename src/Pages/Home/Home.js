import React, { Component } from 'react';
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';

class Home extends Component {
  render() {
    return(
      <div>
        <TopNav />
        <br/>
      <br/>
    <br/>
        <p>Hello! This is your Home!</p>
        <BottomNav />
      </div>
    )
  }
};

export default Home;
