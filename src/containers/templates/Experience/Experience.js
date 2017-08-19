import React from 'react';
import { compose, withState, withProps } from 'recompose';
import Experience from 'components/templates/Experience';
import experiences from './experiences.json';
import { firebase, base } from 'data/firebase';

const makeExperienceFactory = ({ history, match }) => ({
  experience
}) => () => {
  console.log('MAKING EXPERIENCE');
  const userId = firebase.auth().currentUser.uid;
  const thenableReference = base.push(`users/${userId}/tasks`, {
    data: {
      experience: experience
    }
  });

  thenableReference.catch(console.error);
  history.push(`${match.url}/tasks/${thenableReference.key}`);
};

const enhancer = compose(
  withProps(({ history, match }) => ({
    experiences,
    makeExperience: makeExperienceFactory({ history, match })
  })),
  withState('currentExperience', 'setCurrentExperience', '')
);

export default enhancer(Experience);
