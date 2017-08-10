import React from 'react';
import Button from 'components/atoms/Button';
import InputSubmit from 'components/atoms/InputSubmit';
import Logo from 'components/atoms/Logo';
import Divider from './Divider';
import Wrapper from './Wrapper';
import { Input } from 'react-materialize';

const SignUp = ({ listeners: { onClickFacebook, onClickSignUp } }) => {
  return (
    <Wrapper>
      <header>
        <Logo />
      </header>
      <main>
        <Button bold fullWidth onClick={onClickFacebook}>
          Sign up with facebook
        </Button>
        <Divider>OR</Divider>
        <Input type={'email'} label={'EMAIL'} />
        <Input type={'password'} label={'PASSWORD'} />
        <InputSubmit bold fullWidth onClick={onClickSignUp} value="Sign up" />
        <p>
          Already have an account? <a>Log In</a>
        </p>
      </main>
    </Wrapper>
  );
};

export default SignUp;
