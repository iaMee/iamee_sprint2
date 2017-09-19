import React from 'react';
import { compose, lifecycle, withHandlers, withState, withProps } from 'recompose';
import Home from 'components/templates/Home';
import LoadingTimed from 'containers/molecules/LoadingTimed';
import { firebase, base } from 'data/firebase';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    const firebasePath = `users/${userId}/tasks`;
    this.binding = base.bindToState(firebasePath, {
      asArray: true,
      context: this,
      state: 'activities',
      then: () => this.setState(() => ({ isLoading: false })),
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.binding);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <LoadingTimed />;
    }

    const processedActivities = this.state.activities.map(activity => ({
      key: activity.key,
      name: activity.key,
      entries: activity.entries,
      link: `/experiences/tasks/${activity.key}`,
    }));

    const totalStreak = this.state.activities.reduce((acc, currentActivity) => {
      acc += Object.keys(currentActivity.entries || {}).length;
      return acc;
    }, 0);

    return <Home activities={processedActivities} totalStreak={totalStreak} />;
  }
}

export default HomeContainer;
