import React from 'react';
import { firebase, base } from 'data/firebase';
import Modal from 'react-modal';
import styled from 'styled-components';

import turtle from './turtle.png';

const TurtleWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Bubble = styled.div`
  position: relative;
  background: #84d1f7;
  border-radius: .4em;
  padding: 1em;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 13px solid transparent;
    border-left-color: #84d1f7;
    border-right: 0;
    border-top: 0;
    margin-top: -6.5px;
    margin-right: -13px;
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: {} };
  }

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;

    const random = (bottom, top) => Math.floor(Math.random() * top) + bottom;

    const questionsPath = 'aspirations/positive/turtle-questions';

    const firebasePath = `/users/${userId}/tasks/${this.props.taskId}`;
    this.binding = base.syncState(firebasePath, {
      context: this,
      state: 'task',
      defaultValue: {
        diaryEntry: ''
      },
      then: () => {
        if (!this.state.task.question) {
          base
            .fetch(questionsPath + '/count', {
              context: this
            })
            .then(count => {
              this.questionNumber = random(0, count);

              return base.fetch(questionsPath + '/' + this.questionNumber, {
                context: this
              });
            })
            .then(question => {
              console.log(question);
              this.setState(({ task }) => ({ task: { ...task, question } }));
            })
            .catch(error => {
              console.error(error);
            });
        }
      }
    });

    this.otherBinding = base.syncState(
      `/users/${userId}/tutorial/showExplanation/positive`,
      {
        context: this,
        state: 'showExplanation',
        defaultValue: true
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.binding);
    base.removeBinding(this.otherBinding);
  }

  updateEntry = event => {
    const diaryEntry = event.target.value;
    this.setState(({ task }) => ({
      task: { ...task, diaryEntry }
    }));
  };

  rememberExplained = () => {
    this.setState({
      showExplanation: false
    });
  };

  render() {
    return (
      <div>
        <TurtleWrapper>
          <Bubble>
            {this.state.task.question}
          </Bubble>
          <img src={turtle} />
        </TurtleWrapper>

        <textarea
          value={this.state.task.diaryEntry}
          onChange={this.updateEntry}
        />
        <Modal
          isOpen={this.state.showExplanation}
          contentLabel={`Blah`}
          onRequestClose={this.rememberExplained}
          className={{
            base: 'modalContent',
            afterOpen: 'ReactModal__Content--after-open',
            beforeClose: 'ReactModal__Content--before-close'
          }}
          overlayClassName={{
            base: 'modalOverlay',
            afterOpen: 'ReactModal__Overlay--after-open',
            beforeClose: 'ReactModal__Overlay--before-close'
          }}
        >
          Sam is here to guide your thoughts toward feeling more positive
          everyday. Simply respond to Sam and start feeling the difference! We
          recommend having a reflection at least 21 times everyday to see the
          best effect.
        </Modal>
      </div>
    );
  }
}
