import React from 'react';
import styled from 'styled-components';
import Circle from 'components/atoms/Circle';
import Button from 'components/atoms/Button';

const ModalContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }
`;

const ModalContent = ({ experience, makeExperience }) => {
  const { name, description } = experience;
  return (
    <ModalContentWrapper>
      <Circle capitalize height="16rem" backgroundThemeColor={name}>
        <div>
          <h5>
            {name}
          </h5>
          <p>
            {description}
          </p>
        </div>
      </Circle>
      <Button onClick={makeExperience({ experience })}>Start to build</Button>
    </ModalContentWrapper>
  );
};

export default ModalContent;
