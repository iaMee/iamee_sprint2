import React, { Component } from 'react';
import SignUp from 'components/templates/SignUp';

class SignUpContainer extends Component {
  render() {
    return (
      <SignUp
        listeners={{
          onClickFacebook: () => console.log('fb click'),
          onSubmitSignUp: e => {
            e.preventDefault();
            console.log('signup click');
          }
        }}
      />
    );
  }
}

export default SignUpContainer;
