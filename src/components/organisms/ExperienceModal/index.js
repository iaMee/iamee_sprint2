import React from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import { modal } from 'styles/theme';

const ExperienceModal = ({
  currentExperience,
  experience,
  makeExperience,
  setCurrentExperience
}) => {
  return (
    <Modal
      isOpen={experience.name === currentExperience}
      contentLabel={`Experience-${experience.name}`}
      onRequestClose={() => setCurrentExperience('')}
      style={modal}
    >
      <ModalContent experience={experience} makeExperience={makeExperience} />
    </Modal>
  );
};

export default ExperienceModal;
