import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ButtonPlain from 'components/atoms/ButtonPlain';

import imgTurtle from 'assets/Images/modal_turtle.svg';
import iconClose from 'assets/Images/close.svg';

const ModalContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  > h3 {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  > p {
    margin-bottom: 2rem;
  }
  .btn-go {
    background: #f2c94c;
    border: none;
    color: #0b0a0a;
    font-size: 20px;
    border-radius: 30px;
  }
  .btn-close {
    margin-left: auto;
    padding: 0px;
  }
`;

const ModalContent = ({ experience, makeExperience, onButtonCloseClick }) => {
  const { name, description } = experience;
  return (
    <ModalContentWrapper>
      <ButtonPlain className="btn-close" onClick={onButtonCloseClick}>
        <img alt="icon close" src={iconClose} />
      </ButtonPlain>

      <img alt="turtle" src={imgTurtle} />
      <h3>You are about to go on a journey to feel more {name.toUpperCase()}.</h3>
      <p>{description}</p>
      <Button onClick={makeExperience({ experience })} className="btn-go">
        Go!!
      </Button>
    </ModalContentWrapper>
  );
};

export default ModalContent;
