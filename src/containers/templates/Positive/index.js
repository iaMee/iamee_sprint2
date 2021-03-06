import React from 'react';
import { firebase, base } from 'data/firebase';
import Modal from 'react-modal';
import styled from 'styled-components';
import moment from 'moment';

import ButtonRound from 'components/atoms/ButtonRound';
import turtle from 'assets/Images/turtle.svg';
import imgChat from 'assets/Images/chat.svg';

const TurtleWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

const TurtleImage = styled.img`align-self: flex-start;`;

const Bubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: auto;
  height: 140px;
  background-image: url(${imgChat});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: 15px;
  margin: 10px 20px 0px 60px;
  padding: 0px 20px;
`;

const AnswerText = styled.textarea`
  height: 80px;
  border: solid 3px ${props => props.theme.lightBlue};
  margin-top: 57px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1rem;
  font-family: inherit;
  padding: 8px;
  box-sizing: border-box;

  &:disabled {
    background: ${props => props.theme.disabled};
    border: none;
  }
`;

const random = (bottom, top) => Math.floor(Math.random() * top) + bottom;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: {} };
  }

  async componentDidMount() {
    this.userId = firebase.auth().currentUser.uid;
    const questionsPath = 'aspirations/positive/turtle-questions';

    const latestEntryId = await this.getOrCreateLatestEntry();
    this.entryId = latestEntryId;
    const firebasePath = `/users/${this.userId}/tasks/positive/entries/${latestEntryId}`;

    this.binding = base.syncState(firebasePath, {
      context: this,
      state: 'task',
      then: async () => {
        if (!this.state.task.question) {
          try {
            const count = await base.fetch(questionsPath + '/count', {
              context: this,
            });

            this.questionNumber = random(0, count);
            const question = await base.fetch(questionsPath + '/' + this.questionNumber, {
              context: this,
            });

            this.setState(({ task }) => ({ task: { ...task, question } }));
          } catch (error) {
            console.error(error);
          }
        }
      },
    });

    this.explanationBinding = base.syncState(`/users/${this.userId}/tutorial/showExplanation/positive`, {
      context: this,
      state: 'showExplanation',
      defaultValue: true,
    });
  }

  getOrCreateLatestEntry() {
    return base
      .fetch(`/users/${this.userId}/tasks/positive/entries`, {
        asArray: true,
        queries: {
          orderByChild: 'dateTimeCreated',
          limitToLast: 1,
        },
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
          dateTimeCreated: currentEpoch,
        },
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
      task: { ...task, diaryEntry },
    }));
  };

  rememberExplained = () => {
    this.setState({
      showExplanation: false,
    });
  };

  onRespond = () => {
    var match = this.props.match;
    if (this.state.task.complete) {
      this.props.history.goBack();
    } else {
      this.props.history.push(`${match.url}/completion/${this.entryId}`);
    }
  };

  render() {
    return (
      <div>
        <TurtleWrapper>
          <Bubble>{this.state.task.question}</Bubble>
          <TurtleImage src={turtle} />
        </TurtleWrapper>
        <AnswerText
          value={this.state.task.diaryEntry}
          onChange={this.updateEntry}
          placeholder="Enter text"
          disabled={this.state.task.complete || false}
        />
        {this.state.task.complete && <div>You felt {this.state.task.mood}</div>}
        <ButtonRound onClick={this.onRespond}>{this.state.task.complete ? 'Back' : 'Respond'}</ButtonRound>
        <Modal
          isOpen={this.state.showExplanation}
          contentLabel="Tutorial"
          onRequestClose={this.rememberExplained}
          className={{
            base: 'modalContent',
            afterOpen: 'ReactModal__Content--after-open',
            beforeClose: 'ReactModal__Content--before-close',
          }}
          overlayClassName={{
            base: 'modalOverlay',
            afterOpen: 'ReactModal__Overlay--after-open',
            beforeClose: 'ReactModal__Overlay--before-close',
          }}
        >
          Sam is here to guide your thoughts toward feeling more positive everyday. Simply respond to Sam and start
          feeling the difference! We recommend having a reflection at least 21 times everyday to see the best effect.
        </Modal>
      </div>
    );
  }
}
