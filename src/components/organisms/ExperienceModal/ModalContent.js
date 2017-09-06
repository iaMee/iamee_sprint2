import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ButtonPlain from 'components/atoms/ButtonPlain';

import imgTurtle from '../../../Assets/Images/modal_turtle.svg';
import iconClose from '../../../Assets/Images/close.svg';


const ModalContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom:30px;

  > h3 {
    font-size:20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .btn-go {
    background:#F2C94C;
    border:none;
    color:#0B0A0A;
    font-size:20px;
    border-radius: 30px;
  }
  .btn-close {
     margin-left: auto;
     padding:0px;
  }
`;

const ModalContent = ({ experience, makeExperience }) => {
  const { name, description } = experience;
  return (
    <ModalContentWrapper>
      <ButtonPlain  className="btn-close">
        <img src={iconClose} />
      </ButtonPlain>

      <img src ={imgTurtle} />
      <h3>
        You are about to go on a journey to feel more {name.toUpperCase()}.         
      </h3>
      <p>
        {description}
      </p>
      <Button onClick={makeExperience({ experience })} className="btn-go">Go!!</Button>
    </ModalContentWrapper>
  );
};

export default ModalContent;
