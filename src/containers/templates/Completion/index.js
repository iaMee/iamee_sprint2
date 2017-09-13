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
  withState('ratingValue', 'onRatingChange', 3),
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
    const firebasePath = `users/${userId}/tasks`;
    this.binding = base.bindToState(firebasePath, {
      asArray: true,
      context: this,
      state: 'activities'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.binding);
  }

  render() {
    const totalStreak = this.state.activities.reduce((acc, currentActivity) => {
      acc += Object.keys(currentActivity.entries).length;
      return acc;
    }, 0);

    return <EnhancedCompletion totalStreak={totalStreak} />;
  }
}

export default CompletionContainer;
