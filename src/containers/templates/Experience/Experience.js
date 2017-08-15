import React from 'react';
import Experience from 'components/templates/Experience';
import experiences from './experiences.json';

const ExperienceContainer = ({ match }) => {
  return (
    <Experience 
      experiences={experiences}
      match={match}
    />
  );
};

export default ExperienceContainer;
