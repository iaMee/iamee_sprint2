import React, { Component } from 'react';
import TopNav from '../../Organisms/TopNav/TopNav';
import Circle from '../../Atoms/Circles/Circle';
import _ from 'lodash';
import { Input, Button } from 'react-materialize';
import style from './ActivityShow.css';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import AddForm from '../../Molecules/InputForms/AddForm'

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

class ActivityShow extends Component {
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
    var params = this.props.params
    return(
      <div>
        <div className="content">
          <div className="circles less-padding2">
            {user.chosen_aspiration.activity.map((activity,i) =>
              <div
                className="circle-margin"
                onClick={() => this.handleClick(activity)}
                >
                <Circle
                  title={<h5>{activity}</h5>}
                  tag={params.toLowerCase()}
                  className={`${params.toLowerCase()}1`}
                  height={circle.height}
                  boolean = {checkExistInArray(clicked, activity)}
                  background = "white"
                  font = "white"
                  border = "2px solid white"
                  radius={circle.radius}
                />
              </div>
            )}
            {/* <div className="circle-margin">
              <Circle
                title={<span className="text-center white-text add-button-text"> + <br/> ADD <br/> ACTIVITY</span>}
                tag={"add-button"}
                height={circle.height}
                radius={circle.radius}
              />
            </div> */}
          </div>
          <div className="less-padding">
            <AddForm
              type={"email"}
              label={"Add your own activity"}
              name="add"
            />
          </div>
        </div>
      </div>
    )
  }
};

export default ActivityShow;
