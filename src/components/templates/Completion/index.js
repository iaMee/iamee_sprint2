import React from 'react';
import Wrapper from './Wrapper';
import StreakWrapper from './StreakWrapper';
import PetWrapper from './PetWrapper';

import H2 from './H2';
import InputSubmit from 'components/atoms/InputSubmit';
import LabelBlock from 'components/molecules/LabelBlock';
import CustomSlider from 'components/atoms/Slider/Slider';
import starFish from '../../../Assets/Images/starfish_big.svg';
import fish from '../../../Assets/Images/fish.svg';

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
      <div>
        <PetWrapper>
          <img src={fish} className="fish"/>
          <img src={starFish} className="starpuffs"/>
          <div className="starpuffs-text">10 Starpuffs<br/>awarded</div>
        </PetWrapper>
      </div>
      <StreakWrapper>
        <div className="progress-title">Streak Progress</div>
        <div className="progress-bar">
          <div className="streak-progress">1 / 21</div>
        </div>
      </StreakWrapper>

      <form onSubmit={onFormSubmit}>
        <div className="rating-text">How do you feel?</div>
        <CustomSlider min={1} max={5} onChange={e => onRatingChange(e.target.value)}></CustomSlider>
        <InputSubmit fullWidth value="Finito!" className="btn-submit"/>
      </form>
    </Wrapper>
  );
};

Completion.defaultProps = {
  sliderValues: {
    min: 1,
    max: 10,
    step: 1
  }
};

export default Completion;
