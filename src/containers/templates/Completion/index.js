import React from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import Completion from 'components/templates/Completion';
import LoadingTimed from 'containers/molecules/LoadingTimed';
import { getTotalStreak } from 'containers/utils/firebase';
import { firebase, base } from 'data/firebase';

const sliderValues = {
  min: 1,
  max: 5,
  step: 1,
};

const defaultMoodRating = 3;

class CompletionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEntryBindingLoading: true,
      taskBindingLoading: true,
    };
  }

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    const tasksFirebasePath = `users/${userId}/tasks`;
    this.tasksBinding = base.bindToState(tasksFirebasePath, {
      context: this,
      state: 'activities',
      then: () => this.setState({ taskBindingLoading: false }),
    });

    const { activityName, entryId } = this.props.match.params;
    const currentEntryFirebasePath = `/users/${userId}/tasks/${activityName}/entries/${entryId}`;

    this.currentEntryBinding = base.syncState(currentEntryFirebasePath, {
      context: this,
      state: 'currentEntry',
      then: () => this.setState({ currentEntryBindingLoading: false }),
    });
  }

  onRatingChange = rating => {
    // change mood on slider change
    this.setState({
      currentEntry: {
        ...this.currentEntry,
        mood: rating,
      },
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    // set the entry to be completed
    this.setState({
      currentEntry: {
        ...this.currentEntry,
        complete: true,
      },
    });
    this.props.history.push('/');
  };

  componentWillUnmount() {
    base.removeBinding(this.tasksBinding);
    base.removeBinding(this.currentEntryBinding);
  }

  render() {
    const { currentEntryBindingLoading, taskBindingLoading } = this.state;
    if (currentEntryBindingLoading || taskBindingLoading) {
      return <LoadingTimed />;
    }

    const totalStreak = getTotalStreak(this.state.activities, false);
    const mood = this.state.currentEntry.mood || defaultMoodRating;

    return (
      <Completion
        totalStreak={totalStreak}
        onRatingChange={this.onRatingChange}
        rating={mood}
        onFormSubmit={this.onFormSubmit}
        sliderValues={sliderValues}
      />
    );
  }
}

export default withRouter(CompletionContainer);
