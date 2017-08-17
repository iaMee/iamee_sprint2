import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from 'components/atoms/Button';
import ButtonCircle from 'components/atoms/ButtonCircle';
import LinkButton from 'components/atoms/LinkButton';
import { modal } from 'styles/theme';
import ExperienceModal from './ExperienceModal';
import CirclesWrapper from './CirclesWrapper';
import Wrapper from './Wrapper';
import H2 from './H2';

const circle = {
  height: '10rem',
  radius: '100%'
};

const getModalTrigger = ({ experience: { name }, setCurrentExperience }) => {
  return (
    <ButtonCircle
      capitalize
      height={circle.height}
      backgroundThemeColor={name}
      onClick={() => setCurrentExperience(name)}
    >
      {name}
    </ButtonCircle>
  );
};

const getExperiences = ({
  currentExperience,
  experiences,
  match,
  setCurrentExperience
}) => {
  return experiences.map(
    experience =>
      <div key={experience.name}>
        {getModalTrigger({ experience, setCurrentExperience })}
        {
          <Modal
            isOpen={experience.name === currentExperience}
            contentLabel={`Experience-${experience.name}`}
            onRequestClose={() => setCurrentExperience('')}
            style={modal}
          >
            <ExperienceModal experience={experience} />
            <LinkButton to={`${match.url}/${experience.name}/createtask`}>
              Start to build
            </LinkButton>
          </Modal>
        }
      </div>
  );
};

const Experience = ({
  currentExperience,
  experiences,
  match,
  setCurrentExperience
}) => {
  return (
    <Wrapper>
      <H2>Build your aspirations</H2>
      <p>How do you want to feel?</p>
      <CirclesWrapper>
        {getExperiences({
          currentExperience,
          experiences,
          match,
          setCurrentExperience
        })}
        <Button>Customize Your Own</Button>
      </CirclesWrapper>
    </Wrapper>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      tag: PropTypes.string
    })
  ).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired,
  setCurrentExperience: PropTypes.func.isRequired
};

export default Experience;
