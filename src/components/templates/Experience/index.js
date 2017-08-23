import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import ButtonCircle from 'components/atoms/ButtonCircle';
import CirclesWrapper from './CirclesWrapper';
import Wrapper from './Wrapper';
import H2 from './H2';
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
      <H2>Build your aspirations</H2>
      <p>How do you want to feel?</p>
      <CirclesWrapper>
        {getExperiences(props)}
        <Button>Customize Your Own</Button>
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
