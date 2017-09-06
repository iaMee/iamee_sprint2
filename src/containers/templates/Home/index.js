import React from 'react';
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
  withProps
} from 'recompose';
import Home from 'components/templates/Home';
import { firebase, base } from 'data/firebase';

class HomeContainer extends React.Component {
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
    const processedActivities = this.state.activities.map(activity => ({
      key: activity.key,
      name: activity.key,
      entry_data:activity.entries,
      link: `/experiences/tasks/${activity.key}`
    }));

    return <Home activities={processedActivities} />;
  }
}

export default HomeContainer;
