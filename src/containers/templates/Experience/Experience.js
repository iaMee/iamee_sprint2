import React from 'react';
import Loadable from 'react-loadable';
import { compose, withState, withProps } from 'recompose';
import Experience from 'components/templates/Experience';
import Loading from 'components/atoms/Loading';
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

// const enhancer = compose(
//   withProps(({ history, match }) => ({
//     experiences,
//     makeExperience: makeExperienceFactory({ history, match })
//   })),
//   withState('currentExperience', 'setCurrentExperience', '')
// );

const experienceLoader = async () => {
  const aspirations = await base.fetch('aspirations', { asArray: true });
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

  return enhancer(Experience);
};

export default Loadable({
  loader: experienceLoader,
  loading: Loading
});

// export default enhancer(Experience);
