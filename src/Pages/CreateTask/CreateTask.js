import React, { Component } from 'react';
import style from './CreateTask.css';
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import Circle from '../../Atoms/Circles/Circle';
import BaseButton from '../../Atoms/Buttons/BaseButton';
import Banner from '../../Atoms/Banners/Banner';

class CreateTask extends Component {

  constructor() {
    super() 
    this.state = {
      experiences: 
      {
        title: "Relaxed",
        tasks: ["Meditation", "Reading", "Writing", "Art", "Dancing" ]
      }
    
      
    }
  }

  render() {
    return(
      <div>
        <div className="topnav">
          <TopNav />
        </div>
        <Banner 
         title={this.state.experiences.title}
         
         
        />
        <p>Hello! Create a Task!</p>
        <BottomNav />
      </div>
    )
  }
};

export default CreateTask;
