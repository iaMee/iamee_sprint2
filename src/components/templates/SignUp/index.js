import React from 'react';
import Button from 'components/atoms/Button';
import InputSubmit from 'components/atoms/InputSubmit';
import LabelBlock from 'components/molecules/LabelBlock';
import Logo from 'components/atoms/Logo';
import Divider from './Divider';
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
