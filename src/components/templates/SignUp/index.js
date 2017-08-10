import React from 'react';
import Button from 'components/atoms/Button';
import HiddenSpan from 'components/atoms/HiddenSpan';
import InputSubmit from 'components/atoms/InputSubmit';
import InputText from 'components/atoms/InputText';
import LabelBlock from 'components/atoms/LabelBlock';
import Logo from 'components/atoms/Logo';
import Divider from './Divider';
import Wrapper from './Wrapper';
import { Input } from 'react-materialize';

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
          <LabelBlock verticalMargin={'1rem'}>
            <HiddenSpan>Email</HiddenSpan>
            <InputText fullWidth placeholder={'Email'} />
          </LabelBlock>
          <LabelBlock verticalMargin={'1rem'}>
            <HiddenSpan>Password</HiddenSpan>
            <InputText fullWidth placeholder="Password" type="password" />
          </LabelBlock>
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
