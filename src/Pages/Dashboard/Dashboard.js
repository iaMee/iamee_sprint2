import React, { Component } from 'react';
import TopNav from '../../Organisms/TopNav/TopNav';
import Circle from '../../Atoms/Circles/Circle';
import _ from 'lodash';
import { Input, Button } from 'react-materialize';
import PointBanner from '../../Organisms/PointBanner/PointBanner';
import style from './Dashboard.css';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import Banners from '../../Atoms/Banners/Banner';

function toggleArray(array, object){
  return function update(state, props){
   var array1 = state[array]
   if(array1.indexOf(object) < 0){
     array1.push(object)
   }else{
     _.pull(array1, object)
   }
 }
}

function checkExistInArray(array, object){
  if(array.indexOf(object) < 0){
    return true
  } else {
    return false
  }
}

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      clicked: [],
      user:
      {
        id: "something",
        points: 0,
        chosen_aspiration: {
          title: "Relaxed",
          activity: [
            "Meditation",
            "Reading",
            "Writing",
          ]
        }
      },
      circle:
      {
        height: "10em",
        radius: "100%"
      }
    }
  }

  handleClick = (activity) => {
    this.setState(toggleArray("clicked", activity))
  }

  render() {
    var user = this.state.user;
    var circle = this.state.circle;
    var clicked = this.state.clicked
    return(
      <div>
        <TopNav/>
        <Banners title={"Be " + user.chosen_aspiration.title}/>
        <PointBanner points={user.points}/>
        <div className="content">
          <div className="circles less-padding">
            {user.chosen_aspiration.activity.map((activity,i) =>
              <div
                className="circle-margin"
                onClick={() => this.handleClick(activity)}
                >
                <Circle
                  title={<h5>{activity}</h5>}
                  tag={"activity_" + i}
                  height={circle.height}
                  boolean = {checkExistInArray(clicked, activity)}
                  background = "white"
                  font = "white"
                  border = "2px solid white"
                  radius={circle.radius}
                />
              </div>
            )}
          </div>
        </div>
        <BottomNav/>
      </div>
    )
  }
};

export default Dashboard;
