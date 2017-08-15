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
import Wrapper from './Wrapper';
import H2 from './H2';

const circle = {
  height: '10em',
  radius: '100%'
};

const getModalTrigger = ({ experience }) => {
  const circleTitle = (
    <CircleTitle>
      {experience.title}
    </CircleTitle>
  );
  return (
    <div className="circle-margin">
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
    <Wrapper className="main-content">
      <H2 className="text-center exp-header">Build your aspirations</H2>
      <p className="text-center">How do you want to feel?</p>
      <div className="circles">
        {getExperiences({ experiences, match })}
        <Button>Customize Your Own</Button>
      </div>
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
