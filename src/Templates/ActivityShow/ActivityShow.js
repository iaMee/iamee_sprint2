import React, { Component } from 'react';
import TopNav from '../../Organisms/TopNav/TopNav';
import ModalButton from '../../Atoms/Buttons/ModalButton'
import Circle from '../../Atoms/Circles/Circle';
import _ from 'lodash';
import yoga from '../../Assets/Images/yoga.png'
import CustomSlider from '../../Atoms/Slider/Slider'
import { Input, Button, Modal} from 'react-materialize';
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
      value: 8,
      user:
      {
        id: "something",
        points: 0,
        chosen_aspiration: {
          title: "Relaxed",
          activity: [
            {title: "Meditation",
            img: ''},
            {title: "Yoga",
            img: yoga},
            {title: "Writing",
            img: ''},
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
    this.props.update(this.state.value)
  }

  onSliderChange = (value) => {
    this.setState({
        value: value
    });
  }

  getDay = () => {
    var d = new Date();
    var n = d.getDay();
    var days = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 0:"Sunday"}
    return days[0]
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
            {user.chosen_aspiration.activity.map(attribute =>
              <div className="modal-selector">
                <Modal
                  header={this.getDay()}
                  trigger={
                    <div className="circle-margin text-center">
                      <Circle
                        title= {<h6>{attribute.title}</h6>}
                        tag={params.toLowerCase()}
                        className={`${params.toLowerCase()}1`}
                        height={circle.height}
                        boolean = {checkExistInArray(clicked, attribute)}
                        background = "white"
                        font = "white"
                        border = "2px solid white"
                        radius={circle.radius}
                      />
                    </div>
                  }>
                  <div className="custom-modal-content text-center">
                    <div>
                      <img className="attribute-image" src={attribute.img} alt=""/>
                      <p>How Do You Feel?</p>
                      <CustomSlider
                        step = {10}
                        value = {this.state.value}
                        onSliderChange = {this.onSliderChange}
                        defaultValue = {8}
                        min={0}
                        max={10}
                      />
                    </div>
                  </div>
                  <div className="spacer"></div>
                  <ModalButton
                    className={"modal-close"}
                    points = {this.state.value}
                    onClick={() => this.handleClick(attribute)}
                    img = {require('../../Assets/Images/point.png')}
                    title ={"CLICK HERE"}
                  />
                </Modal>
              </div>
            )}
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
