import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-materialize';
import Button from 'components/atoms/Button';
import ButtonCircle from 'components/atoms/ButtonCircle';
import LinkButton from 'components/atoms/LinkButton';
import ExperienceModal from './ExperienceModal';
import CirclesWrapper from './CirclesWrapper';
import Wrapper from './Wrapper';
import H2 from './H2';

const circle = {
  height: '10rem',
  radius: '100%'
};

const getModalTrigger = ({ experience: { name } }) => {
  return (
    <ButtonCircle capitalize height={circle.height} backgroundThemeColor={name}>
      {name}
    </ButtonCircle>
  );
};

const getExperiences = ({ experiences, match }) => {
  return experiences.map(experience =>
    <Modal key={experience.name} trigger={getModalTrigger({ experience })}>
      <ExperienceModal experience={experience} />
      <LinkButton to={`${match.url}/${experience.title}/createtask`}>
        Start to build
      </LinkButton>
    </Modal>
  );
};

const Experience = ({ experiences, match }) => {
  return (
    <Wrapper>
      <H2>Build your aspirations</H2>
      <p>How do you want to feel?</p>
      <CirclesWrapper>
        {getExperiences({ experiences, match })}
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
  }).isRequired
};

export default Experience;
