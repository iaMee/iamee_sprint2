import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import StreakWrapper from './StreakWrapper';
import H2 from './H2';
import InputSubmit from 'components/atoms/InputSubmit';
import LabelBlock from 'components/molecules/LabelBlock';

const Completion = ({
  ratingValue,
  onRatingChange,
  onFormSubmit,
  sliderValues: { min, max, step }
}) => {
  return (
    <Wrapper>
      <H2>Awesome stuff!</H2>
      <figure />
      <StreakWrapper>2 out of 10 complete streak</StreakWrapper>
      <form onSubmit={onFormSubmit}>
        <LabelBlock text="How do you feel?">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={ratingValue}
            onChange={e => onRatingChange(e.target.value)}
          />
        </LabelBlock>
        <InputSubmit fullWidth value="Finito!" />
      </form>
    </Wrapper>
  );
};

Completion.defaultProps = {
  sliderValues: {
    min: 1,
    max: 10,
    step: 1,
  }
};

export default Completion;
