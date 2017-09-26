import React from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';

const ExperienceModal = ({
  currentExperience,
  experience,
  makeExperience,
  onButtonCloseClick,
  setCurrentExperience,
}) => {
  const onRequestClose = () => {
    currentExperience !== '' && setCurrentExperience('');
  };

  return (
    <Modal
      isOpen={experience.name === currentExperience}
      contentLabel={`Experience-${experience.name}`}
      onRequestClose={onRequestClose}
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
      <ModalContent
        experience={experience}
        makeExperience={makeExperience}
        onButtonCloseClick={onButtonCloseClick}
      />
    </Modal>
  );
};

export default ExperienceModal;
