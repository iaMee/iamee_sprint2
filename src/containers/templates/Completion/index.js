import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, withHandlers, withState, withProps } from 'recompose';
import Completion from 'components/templates/Completion';
import { firebase, base } from 'data/firebase';

const sliderValues = {
  min: 1,
  max: 5,
  step: 1
};

const enhancer = compose(
  withHandlers({
    onFormSubmit: props => e => {
      e.preventDefault();
      props.history.push('/');
      console.log(props.ratingValue);
    }
  }),
  withProps({ sliderValues })
);

const EnhancedCompletion = withRouter(enhancer(Completion));

class CompletionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    const tasksFirebasePath = `users/${userId}/tasks`;
    this.tasksBinding = base.bindToState(tasksFirebasePath, {
      asArray: true,
      context: this,
      state: 'activities'
    });

    const { experienceId, entryId } = this.props.match.params;
    const moodFirebasePath = `/users/${userId}/tasks/${experienceId}/entries/${entryId}/mood`;

    this.moodBinding = base.syncState(moodFirebasePath, {
      context: this,
      state: 'mood',
      default: 3
    });
  }

  onRatingChange = rating => {
    this.setState({
      mood: rating
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.tasksBinding);
    base.removeBinding(this.moodBinding);
  }

  render() {
    const totalStreak = this.state.activities.reduce((acc, currentActivity) => {
      acc += Object.keys(currentActivity.entries).length;
      return acc;
    }, 0);

    return (
      <EnhancedCompletion
        totalStreak={totalStreak}
        onRatingChange={this.onRatingChange}
        rating={this.state.mood}
      />
    );
  }
}

export default CompletionContainer;
