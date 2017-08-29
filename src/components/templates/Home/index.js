import React from 'react';
import ButtonCircle from 'components/atoms/ButtonCircle';
import Wrapper from './Wrapper';
import PetWrapper from './PetWrapper';
import HiddenH2 from './HiddenH2';
import H3 from './H3';
import turtle from 'assets/Images/turtle.png';

const Home = () => {
  return (
    <Wrapper>
      <div>
        <HiddenH2>Home</HiddenH2>
        <PetWrapper>
          <img src={turtle} alt="turtle" />
        </PetWrapper>
        <ButtonCircle height="6rem">Dashboard</ButtonCircle>
      </div>
      <div>
        <H3>Today's activities</H3>
      </div>
    </Wrapper>
  );
};

export default Home;
