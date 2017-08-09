import React, { Component } from 'react';
import ModalButton from 'Atoms/Buttons/ModalButton';
import Circle from 'Atoms/Circles/Circle';
import _ from 'lodash';
import heart from 'Assets/Images/heart.jpg';
import { Input, Button, Modal } from 'react-materialize';
import style from '../ActivityShow/ActivityShow.css';
import style2 from '../PersonalShow/PersonalShow.css';
import BottomNav from 'Organisms/BottomNav/BottomNav';
import AddForm from 'Molecules/InputForms/AddForm';

function toggleArray(array, object) {
  return function update(state, props) {
    var array1 = state[array];
    if (array1.indexOf(object) < 0) {
      array1.push(object);
    } else {
      _.pull(array1, object);
    }
  };
}

function checkExistInArray(array, object) {
  if (array.indexOf(object) < 0) {
    return true;
  } else {
    return false;
  }
}

class PersonalShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      attributes: [
        { title: 'creativity', img: heart },
        { title: 'curiousity', img: '' },
        { title: 'judgement', img: '' },
        { title: 'love of learning', img: '' },
        { title: 'perspective', img: '' },
        { title: 'bravery', img: '' },
        { title: 'perserverance', img: '' },
        { title: 'honesty', img: '' },
        { title: 'zest', img: '' },
        { title: 'love', img: '' },
        { title: 'kindness', img: '' },
        { title: 'social intelligence', img: '' },
        { title: 'teamwork', img: '' },
        { title: 'fairness', img: '' },
        { title: 'leadership', img: '' },
        { title: 'forgiveness', img: '' },
        { title: 'humility', img: '' },
        { title: 'prudence', img: '' },
        { title: 'self-regulation', img: '' },
        { title: 'appreciation of beauty and excellence', img: '' },
        { title: 'gratitude', img: '' },
        { title: 'hope', img: '' },
        { title: 'humour', img: '' },
        { title: 'spirituality', img: '' }
      ],
      circle: {
        height: '10em',
        radius: '100%'
      }
    };
  }

  handleClick = activity => {
    this.setState(toggleArray('clicked', activity));
    this.props.update(this.state.value);
  };

  getDay = () => {
    var d = new Date();
    var n = d.getDay();
    var days = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      0: 'Sunday'
    };
    return days[0];
  };

  render() {
    var clicked = this.state.clicked;
    var params = this.props.params;
    var circle = this.state.circle;
    return (
      <div className="content">
        <div className="circles less-padding">
          {this.state.attributes.map(attribute =>
            <div className="modal-selector">
              <Modal
                header={this.getDay()}
                trigger={
                  <div className="circle-margin text-center">
                    <Circle
                      title={
                        <h6>
                          {attribute.title}
                        </h6>
                      }
                      tag={params.toLowerCase()}
                      className={`${params.toLowerCase()}1`}
                      height={circle.height}
                      boolean={checkExistInArray(clicked, attribute)}
                      background="white"
                      font="white"
                      border="2px solid white"
                      radius={circle.radius}
                    />
                  </div>
                }
              >
                <div className="custom-modal-content text-center">
                  <div>
                    <img
                      className="attribute-image"
                      src={attribute.img}
                      alt=""
                    />
                    <p>Why I'm good at this</p>
                    <input
                      placeholder="Write your text here"
                      className="personal-input"
                      type="text"
                    />
                  </div>
                </div>
                <div className="spacer" />
                <ModalButton
                  points={10}
                  className={'modal-close'}
                  onClick={() => this.handleClick(attribute)}
                  img={require('Assets/Images/point.png')}
                  title={'CLICK HERE'}
                />
              </Modal>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PersonalShow;
