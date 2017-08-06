import React, { Component } from 'react';
import CreateTask from '../CreateTask/CreateTask';
import { Modal } from 'react-materialize';
import style from './Experience.css';
import { Switch, Route, Link } from 'react-router-dom';
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import Circle from '../../Atoms/Circles/Circle';
import Button from '../../Atoms/Buttons/BaseButton';
import ExperienceModal from './ExperienceModal';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [
        {
          title: 'Bold',
          description: 'Feel more confident',
          tag: 'bold',
        },
        {
          title: 'Relaxed',
          description: 'Take time out to relax',
          tag: 'relaxed',
        },
        {
          title: 'Positive',
          description: 'Yay!',
          tag: 'positive',
        },
        {
          title: 'Inquisitive',
          description: 'What mate?!',
          tag: 'inquisitive',
        },
        {
          title: 'Yourself',
          description: 'Yeah nah!',
          tag: 'yourself',
        },
        {
          title: 'Grateful',
          description: 'nah!',
          tag: 'grateful',
        },
        {
          title: 'Loving',
          description: 'cheerio!',
          tag: 'loving',
        },
        {
          title: 'Kind',
          description: 'Not me!!',
          tag: 'kind',
        },
      ],
      circle: {
        height: '10em',
        radius: '100%',
      },
    };
  }

  render() {
    const match = this.props.match;
    return (
      <div>
        <div className="main-content">
          <h5 className="text-center exp-header">Build your aspirations</h5>
          <p className="text-center">How do you want to feel?</p>
          <div className="circles">
            {this.state.experiences.map(experience =>
              (<div className="modal-selector">
                <Modal
                  trigger={
                    <div className="circle-margin">
                      <Circle
                        title={
                          <h6 className="white-text">
                            {experience.title}
                          </h6>
                        }
                        tag={experience.tag}
                        height={this.state.circle.height}
                        radius={this.state.circle.radius}
                      />
                    </div>
                  }
                >
                  <div className="custom-modal-content text-center">
                    <ExperienceModal experience={experience} />
                  </div>
                  <div className="spacer" />
                  <div className="spacer" />
                  <Link
                    className={'modal-close'}
                    to={`${match.url}/${experience.title}/createtask`}
                  >
                    <Button title="START TO BUILD" />
                  </Link>
                </Modal>
              </div>),
            )}
            <div className="exp-button">
              <Button title={'CUSTOMIZE YOUR OWN'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
