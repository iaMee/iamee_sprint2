import React from 'react';
import Relaxed from 'components/templates/CreateTask/Relaxed';
import Positive from 'components/templates/CreateTask/Positive';
import styled from 'styled-components';
import { templateWrapper } from 'styles/layout';

const components = {
  relaxed: Relaxed,
  positive: Positive,
};

const Wrapper = styled.main`${templateWrapper};`;

const CreateTask = ({ history, match }) => {
  const Component = components[match.params.experienceId];
  return (
    <Wrapper>
      <Component history={history} match={match} />
    </Wrapper>
  );
};

export default CreateTask;
