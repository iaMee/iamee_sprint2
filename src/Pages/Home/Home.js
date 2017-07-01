import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize'
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';

class Home extends Component {
  render() {
    return(
      <div>
        <p>Hello! This is your Home!</p>
        <Modal
        	header='Modal Header'
        	trigger={
        		<Button waves='light'>MODAL</Button>
        	}>
        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Modal>
      </div>
    )
  }
};

export default Home;
