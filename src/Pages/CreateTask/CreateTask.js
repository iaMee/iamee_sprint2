import React, { Component } from 'react';
import style from './CreateTask.css';
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import Circle from '../../Atoms/Circles/Circle';
import BaseButton from '../../Atoms/Buttons/BaseButton';
import Banner from '../../Atoms/Banners/Banner';
import { Dropdown, Button, Icon, NavItem } from 'react-materialize'

class CreateTask extends Component {

  constructor() {
    super() 
    this.state = {
      experiences: 
      {
        title: "Relaxed",
        tasks: ["Meditation", "Reading", "Writing", "Art", "Dancing", "Hi" ]
      }
    }
  }

  render() {
    var experiences = this.state.experiences
    return(
      <div>
        <div className="topnav">
          <TopNav />
        </div>
        <Banner 
         title={experiences.title}
        />
        <p className="text-center">Select your task here!</p>

          {/*<div>
            {experiences.tasks.map(task =>
              <Pill 
                tasks = {task}
              />
            )}
          </div>*/}
        
        <Dropdown
          trigger={
            <Button>Dropdown<Icon right>arrow_drop_down</Icon></Button>
          }>
          <NavItem>
            one
          </NavItem>

          <NavItem>
            two
          </NavItem>

          <NavItem>
            three
          </NavItem>
        </Dropdown>

        <BottomNav />
      </div>
    )
  }
};

export default CreateTask;
