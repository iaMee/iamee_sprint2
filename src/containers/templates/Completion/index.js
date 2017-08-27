import React from 'react';
import { compose, withHandlers, withState, withProps } from 'recompose';
import Completion from 'components/templates/Completion';

const sliderValues = {
  min: 1,
  max: 10,
  step: 1
};

const enhancer = compose(
  withState('ratingValue', 'onRatingChange', 5),
  withHandlers({
    onFormSubmit: props => e => {
      e.preventDefault();
      console.log(props.ratingValue);
    }
  }),
  withProps({ sliderValues })
);

export default enhancer(Completion);
