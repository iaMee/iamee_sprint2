import React from 'react';
import { compose, withState } from 'recompose';
import Experience from 'components/templates/Experience';
import experiences from './experiences.json';

const enhancer = compose(
  withState('currentExperience', 'setCurrentExperience', '')
);

const ExperienceContainer = ({
  currentExperience,
  match,
  setCurrentExperience
}) => {
  console.log('STATE!', currentExperience);
  return (
    <Experience
      currentExperience={currentExperience}
      experiences={experiences}
      match={match}
      setCurrentExperience={setCurrentExperience}
    />
  );
};

export default enhancer(ExperienceContainer);
