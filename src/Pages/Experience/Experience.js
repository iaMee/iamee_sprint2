import React, { Component } from 'react';
import { Modal } from 'react-materialize'
import style from './Experience.css'
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import Circle from '../../Atoms/Circles/Circle';
import Button from '../../Atoms/Buttons/BaseButton';
import ExperienceModal from './ExperienceModal'

class Experience extends Component {
  constructor(){
    super()
    this.state = {
      experiences: [
        {
          title: "Bold",
          description: "Hi!",
          tag: "bold"
        },
        {
          title: "Relaxed",
          description: "Hmm!",
          tag: "relaxed"
        },
        {
          title: "Positve",
          description: "Yay!",
          tag: "positive"
        },
        {
          title: "Inquisitive",
          description: "What mate?!",
          tag: "inquisitive"
        },
        {
          title: "Adventurous",
          description: "Yeah nah!",
          tag: "adventurous"
        },
        {
          title: "Motivated",
          description: "nah!",
          tag: "motivated"
        },
        {
          title: "Yourself",
          description: "cheerio!",
          tag: "yourself"
        },
        {
          title: "Kind",
          description: "Not me!!",
          tag: "kind"
        }
      ],
      circle:
      {
        height: "10em",
        radius: "100%"
      }
    }
  }

  render() {
    return (
      <div>
        <div className="topnav">
         <TopNav />
        </div>
          <div className="content">
            <h5 className="text-center exp-header">Build your aspirations</h5>
              <p className="text-center">How do you want to feel?</p>
              <div className="circles">
                {this.state.experiences.map(experience =>
                <Modal
                  trigger={
                    <div className="circle-margin">
                        <Circle
                        title = {<h6 className="white-text">{experience.title}</h6>}
                        tag = {experience.tag}
                        height = {this.state.circle.height}
                        radius = {this.state.circle.radius}
                      />
                  </div>
                }
                >
                <ExperienceModal
                  experience = {experience}
                />
                </Modal>
              )}
              <div className="exp-button">
                <BaseButton 
                  title={"CUSTOMIZE YOUR OWN"} />
              </div>
            </div>
           
          </div>
        <BottomNav />
      </div>
    )
  }
};

export default Experience;
