import React from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';

const ExperienceModal = ({ currentExperience, experience, makeExperience, setCurrentExperience }) => {
  return (
    <Modal
      isOpen={experience.name === currentExperience}
      contentLabel={`Experience-${experience.name}`}
      onRequestClose={() => setCurrentExperience('')}
      className={{
        base: 'modalContent',
        afterOpen: 'ReactModal__Content--after-open',
        beforeClose: 'ReactModal__Content--before-close',
      }}
      overlayClassName={{
        base: 'modalOverlay',
        afterOpen: 'ReactModal__Overlay--after-open',
        beforeClose: 'ReactModal__Overlay--before-close',
      }}
    >
      <ModalContent experience={experience} makeExperience={makeExperience} />
    </Modal>
  );
};

export default ExperienceModal;
