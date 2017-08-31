import React from 'react';
import { compose, withHandlers, withState, withProps } from 'recompose';
import Completion from 'components/templates/Completion';

const sliderValues = {
  min: 1,
  max: 5,
  step: 1
};

const enhancer = compose(
  withState('ratingValue', 'onRatingChange', 3),
  withHandlers({
    onFormSubmit: props => e => {
      e.preventDefault();
      props.history.push('/');
      console.log(props.ratingValue);
    }
  }),
  withProps({ sliderValues })
);

export default enhancer(Completion);
