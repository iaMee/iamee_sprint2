import React from 'react';
import Button from 'components/atoms/Button';
import InputSubmit from 'components/atoms/InputSubmit';
import LabelBlock from 'components/molecules/LabelBlock';
import Logo from 'components/atoms/Logo';
import Divider from './Divider';
import Wrapper from './Wrapper';

const SignUp = ({ listeners: { onClickFacebook, onSubmitSignUp } }) => {
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
        <form onSubmit={onSubmitSignUp}>
          <LabelBlock text="Email" placeholder="Email"/> 
          <LabelBlock text="Password" placeholder="Password" type="password"/>
          <InputSubmit bold fullWidth value="Sign up" />
        </form>
        <p>
          Already have an account? <a>Log In</a>
        </p>
      </main>
    </Wrapper>
  );
};

export default SignUp;
