import React, { Component } from 'react';
import BaseButton from 'components/atoms/Buttons/BaseButton';
import Button from 'components/atoms/Button';
import SignUp from 'components/templates/SignUp';
import { Input } from 'react-materialize';

class SignUpContainer extends Component {
  render() {
    return (
      <SignUp
        listeners={{
          onClickFacebook: () => console.log('fb click'),
          onSubmitSignUp: (e) => {e.preventDefault(); console.log('signup click')}
        }}
      />
    );
  }
}

export default SignUpContainer;
