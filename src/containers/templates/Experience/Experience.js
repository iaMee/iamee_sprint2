import React from 'react';
import Loadable from 'react-loadable';
import { compose, withState, withProps } from 'recompose';
import Loading from 'components/atoms/Loading';
import { firebase, base } from 'data/firebase';

const makeExperienceFactory = ({ history, match }) => ({
  experience
}) => () => {
  const userId = firebase.auth().currentUser.uid;
  const thenableReference = base.push(`users/${userId}/tasks`, {
    data: {
      experience: experience
    }
  });

  thenableReference.catch(console.error);
  history.push(`${match.url}/tasks/${thenableReference.key}`);
};

const experienceLoader = async () => {
  const aspirations = await base.fetch('aspirations', { asArray: true });
  const Experience = await import(/* webpackChunkName: "Experience" */ 'components/templates/Experience');
  const sortedMappedAspirations = aspirations
    .map(asp => {
      // renaming key to name
      const { key, ...rest } = asp;
      return { ...rest, name: key };
    })
    // then sort it by index
    .sort((a, b) => a.index - b.index);

  const enhancer = compose(
    withProps(({ history, match }) => ({
      experiences: sortedMappedAspirations,
      makeExperience: makeExperienceFactory({ history, match })
    })),
    withState('currentExperience', 'setCurrentExperience', '')
  );

  return enhancer(Experience.default);
};

// not sure if i'm using Loadable correctly here,
// since this is a main component, not sure if I should split the chunk by using dynamic import
// but the main reason i'm using `Loadable` for the ease of use to make loading state for component
export default Loadable({
  loader: experienceLoader,
  loading: Loading
});
