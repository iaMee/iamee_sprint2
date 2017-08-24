import React from 'react';
import styled from 'styled-components';
import Circle from 'components/atoms/Circle';
import Button from 'components/atoms/Button';

const ModalContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  > h3 {
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const ModalContent = ({ experience, makeExperience }) => {
  const { name, description } = experience;
  return (
    <ModalContentWrapper>
      <h3>
        {name.toUpperCase()}
      </h3>
      <p>
        {description}
      </p>
      <Button onClick={makeExperience({ experience })}>Get Started</Button>
    </ModalContentWrapper>
  );
};

export default ModalContent;
