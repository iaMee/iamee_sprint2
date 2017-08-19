import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from 'components/atoms/Button';
import ButtonCircle from 'components/atoms/ButtonCircle';
import Circle from 'components/atoms/Circle';
import LinkButton from 'components/atoms/LinkButton';
import { modal } from 'styles/theme';
import CirclesWrapper from './CirclesWrapper';
import ModalContent from './ModalContent';
import Wrapper from './Wrapper';
import H2 from './H2';
import { firebase, base } from 'data/firebase';
import { withRouter } from 'react-router-dom';

const circle = {
  height: '10rem',
  radius: '100%'
};

const makeExperience = ({ match, experience, history }) => () => {
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

const getModalContent = ({ experience, history, match }) => {
  const { name } = experience;
  return (
    <ModalContent>
      <Circle capitalize height="16rem" backgroundThemeColor={name}>
        <h5>
          {name}
        </h5>
      </Circle>
      <Button onClick={makeExperience({ match, experience, history })}>
        Start to build
      </Button>
    </ModalContent>
  );
};

const getExperiences = ({
  currentExperience,
  experiences,
  history,
  match,
  setCurrentExperience
}) => {
  return experiences.map(experience =>
    <div key={experience.name}>
      {getModalTrigger({ experience, setCurrentExperience })}
      {
        <Modal
          isOpen={experience.name === currentExperience}
          contentLabel={`Experience-${experience.name}`}
          onRequestClose={() => setCurrentExperience('')}
          style={modal}
        >
          {getModalContent({ experience, history, match })}
        </Modal>
      }
    </div>
  );
};

const Experience = ({
  currentExperience,
  experiences,
  history,
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
          history,
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
      description: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired,
  setCurrentExperience: PropTypes.func.isRequired
};

export default Experience;
