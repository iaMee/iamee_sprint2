import React from 'react';
import { firebase, base } from 'data/firebase';
import Modal from 'react-modal';
import styled from 'styled-components';
import moment from 'moment';

import turtle from 'assets/Images/turtle.svg';

const TurtleWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

const TurtleImage = styled.img`
  align-self: flex-start;
  margin: 1em;
`;

const Bubble = styled.div`
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: auto;
  min-height: 4em;

  border: 4px solid #b0e4fc;

  border-radius: 10px;

  &:before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 76px;
    right: auto;
    top: auto;
    bottom: -40px;
    border: 20px solid;
    border-color: #b0e4fc transparent transparent #b0e4fc;
  }

  &:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 80px;
    right: auto;
    top: auto;
    bottom: -30px;
    border: 15px solid;
    border-color: white transparent transparent white;
  }
`;

const BubbleInner = styled.div`
  padding: 2em;
  text-align: left;
  line-height: 1.5em;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: {} };
  }

  componentDidMount() {
    this.userId = firebase.auth().currentUser.uid;

    const random = (bottom, top) => Math.floor(Math.random() * top) + bottom;

    const questionsPath = 'aspirations/positive/turtle-questions';

    this.getOrCreateLatestEntry().then(latestEntryId => {
      const firebasePath = `/users/${this
        .userId}/tasks/positive/entries/${latestEntryId}`;

      this.binding = base.syncState(firebasePath, {
        context: this,
        state: 'task',
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
                this.setState(({ task }) => ({ task: { ...task, question } }));
              })
              .catch(error => {
                console.error(error);
              });
          }
        }
      });
    });

    this.explanationBinding = base.syncState(
      `/users/${this.userId}/tutorial/showExplanation/positive`,
      {
        context: this,
        state: 'showExplanation',
        defaultValue: true
      }
    );
  }

  getOrCreateLatestEntry() {
    return base
      .fetch(`/users/${this.userId}/tasks/positive/entries`, {
        asArray: true,
        queries: {
          orderByChild: 'dateTimeCreated',
          limitToLast: 1
        }
      })
      .then(lastEntries => {
        if (lastEntries.length > 0) {
          const lastEntry = lastEntries[0];

          const lastEntryCreatedMoment = moment(lastEntry.dateTimeCreated);
          const isToday = lastEntryCreatedMoment.isSame(moment(), 'day');

          if (isToday) {
            return lastEntries[0].key;
          }
        }

        return this.createNewEntry();
      });
  }

  createNewEntry() {
    const currentEpoch = new Date().getTime();

    return base
      .push(`/users/${this.userId}/tasks/positive/entries`, {
        data: {
          diaryEntry: '',
          dateTimeCreated: currentEpoch
        }
      })
      .then(newLocation => newLocation.key);
  }

  componentWillUnmount() {
    base.removeBinding(this.binding);
    base.removeBinding(this.explanationBinding);
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
          <TurtleImage src={turtle} />
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
