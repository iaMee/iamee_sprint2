import React from 'react';
import Relaxed from 'containers/templates/Relaxed';
import Positive from 'containers/templates/Positive';
import styled from 'styled-components';
import { templateWrapper } from 'styles/layout';

const components = {
  relaxed: Relaxed,
  positive: Positive,
};

const Wrapper = styled.main`${templateWrapper};`;

const CreateTask = ({ history, match }) => {
  const Component = components[match.params.activityName];
  return (
    <Wrapper>
      <Component history={history} match={match} />
    </Wrapper>
  );
};

export default CreateTask;
