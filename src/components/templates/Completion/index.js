import React from 'react';
import Wrapper from './Wrapper';
import StreakWrapper from './StreakWrapper';
import PetWrapper from './PetWrapper';

import H2 from './H2';
import InputSubmit from 'components/atoms/InputSubmit';
import CustomSlider from 'components/atoms/Slider/Slider';
import starFish from 'assets/Images/starfish_big.svg';
import fish from 'assets/Images/fish.svg';

const Completion = ({ onRatingChange, onFormSubmit, sliderValues: { min, max, step }, totalStreak, rating }) => {
  return (
    <Wrapper>
      <H2>Awesome stuff!</H2>
      <figure />
      <div>
        <PetWrapper>
          <img alt="fish" src={fish} className="fish" />
          <img alt="star fish" src={starFish} className="starpuffs" />
          <div className="starpuffs-text">
            10 Starpuffs<br />awarded
          </div>
        </PetWrapper>
      </div>
      <StreakWrapper>
        <div className="progress-title">Streak Progress</div>
        <div className="progress-bar">
          <div className="streak-progress">{totalStreak + 1} / 21</div>
        </div>
      </StreakWrapper>

      <form onSubmit={onFormSubmit}>
        <div className="rating-text">How do you feel?</div>
        <CustomSlider min={min} max={max} step={step} value={rating} onSliderChange={onRatingChange} />
        <InputSubmit fullWidth value="Finito!" className="btn-submit" />
      </form>
    </Wrapper>
  );
};

Completion.defaultProps = {
  sliderValues: {
    min: 1,
    max: 10,
    step: 1,
  },
  rating: 3,
};

export default Completion;
