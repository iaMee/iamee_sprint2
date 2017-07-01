import React, { Component } from 'react';
import style from './Experience.css'
import Circle from '../../Atoms/Circles/Circle';
import Button from '../../Atoms/Buttons/BaseButton'

class ExperienceModal extends Component {
  constructor(props){
    super(props)
    this.state={
      circle:{
        height: "16em",
        radius: "100%"
      }
    }
  }

  render(){
    var experience = this.props.experience;
    return(
      <div>
        <Circle
          title={<h5 className="white-text">{experience.title}</h5>}
          description = {<p className="white-text text-center">{experience.description}</p>}
          tag = {experience.tag}
          height = {this.state.circle.height}
          radius = {this.state.circle.radius}
        />
        <div className="spacer"></div>
        <Button
          title="START TO BUILD"
        />
      </div>
    )
  }
};

export default ExperienceModal;
