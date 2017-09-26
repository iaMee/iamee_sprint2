import React from 'react';
import Home from 'components/templates/Home';
import LoadingTimed from 'containers/molecules/LoadingTimed';
import { getTotalStreak } from 'containers/utils/firebase';
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

    const totalStreak = getTotalStreak(this.state.activities);
    return <Home activities={processedActivities} totalStreak={totalStreak} />;
  }
}

export default HomeContainer;
