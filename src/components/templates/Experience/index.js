import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-materialize';
import style from './Experience.css';
import { Link } from 'react-router-dom';
import Circle from 'components/atoms/Circles/Circle';
import Button from 'components/atoms/Button';
import LinkButton from 'components/atoms/LinkButton';
import ExperienceModal from './ExperienceModal';
import CircleTitle from './CircleTitle';
import CirclesWrapper from './CirclesWrapper';
import Wrapper from './Wrapper';
import H2 from './H2';

const circle = {
  height: '10rem',
  radius: '100%'
};

const getModalTrigger = ({ experience }) => {
  const circleTitle = (
    <CircleTitle>
      {experience.title}
    </CircleTitle>
  );
  return (
    <div>
      <Circle
        title={circleTitle}
        tag={experience.tag}
        height={circle.height}
        radius={circle.radius}
      />
    </div>
  );
};

const getExperiences = ({ experiences, match }) => {
  return experiences.map(experience =>
    <Modal key={experience.title} trigger={getModalTrigger({ experience })}>
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
