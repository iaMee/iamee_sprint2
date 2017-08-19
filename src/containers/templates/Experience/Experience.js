import React from 'react';
import { compose, withState, withProps } from 'recompose';
import Experience from 'components/templates/Experience';
import experiences from './experiences.json';

const enhancer = compose(
  withProps({ experiences }),
  withState('currentExperience', 'setCurrentExperience', '')
);

export default enhancer(Experience);
