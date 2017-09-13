import React from 'react';
import PropTypes from 'prop-types';
import ButtonCircle from 'components/atoms/ButtonCircle';
import CirclesWrapper from './CirclesWrapper';
import Wrapper from './Wrapper';
import H2 from './H2';
import Description from './Description';

import ExperienceModal from 'components/organisms/ExperienceModal';

const circle = {
  height: '10rem',
  radius: '100%'
};

const getModalTrigger = ({
  experience: { name, enabled },
  setCurrentExperience
}) =>
  <ButtonCircle
    capitalize
    disabled={!enabled}
    height={circle.height}
    backgroundThemeColor={name}
    onClick={() => setCurrentExperience(name)}
  >
    {name}
  </ButtonCircle>;

const getExperiences = ({
  currentExperience,
  experiences,
  makeExperience,
  setCurrentExperience
}) => {
  return experiences.map(experience =>
    <div key={experience.name}>
      {getModalTrigger({ experience, setCurrentExperience })}
      <ExperienceModal
        currentExperience={currentExperience}
        experience={experience}
        makeExperience={makeExperience}
        setCurrentExperience={setCurrentExperience}
      />
    </div>
  );
};

const Experience = props => {
  return (
    <Wrapper>
      <H2>How do you want to feel?</H2>
      <Description>
        <p>Each journey is different.</p>
        <p>Tap on one to find out more</p>
      </Description>
      <CirclesWrapper>
        {getExperiences(props)}
      </CirclesWrapper>
    </Wrapper>
  );
};

Experience.propTypes = {
  currentExperience: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired,
  makeExperience: PropTypes.func.isRequired,
  setCurrentExperience: PropTypes.func.isRequired
};

export default Experience;
