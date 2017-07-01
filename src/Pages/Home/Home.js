import React, { Component } from 'react';
import TopNav from '../../Organisms/TopNav/TopNav';
import Button from '../../Atoms/Buttons/BaseButton';
import BottomNav from '../../Organisms/BottomNav/BottomNav';

class Home extends Component {
  render() {
    return(
      <div>
        <p>Hello! This is your Home!</p>
        <Button title={"hello"}/>
      </div>
    )
  }
};

export default Home;
