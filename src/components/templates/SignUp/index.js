import React from 'react';
import Button from 'components/atoms/Button';
import Logo from 'components/atoms/Logo';
import Wrapper from './Wrapper';

const SignUp = ({ listeners: { onClickFacebook } }) => {
  return (
    <Wrapper>
      <header>
        <Logo />
      </header>
      <main>
        <Button bold fullWidth onClick={onClickFacebook}>
          Sign up with facebook
        </Button>
      </main>
    </Wrapper>
  );
};

export default SignUp;
