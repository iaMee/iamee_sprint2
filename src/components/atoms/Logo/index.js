import React from 'react';
import Wrapper from './Wrapper';

const Logo = () =>
  <Wrapper>
    <img
      className="logo"
      src={require('../../../Assets/Images/logo.png')}
      alt="iamee logo"
    />
  </Wrapper>;

export default Logo;
