import React from 'react';
import PropTypes from 'prop-types';
import SignUp from 'components/templates/SignUp';

const SignUpContainer = ({ history }) => {
  return (
    <SignUp
      listeners={{
        onClickFacebook: () => console.log('fb click'),
        onSubmitSignUp: e => {
          e.preventDefault();
          console.log('signup click');
          history.push('/experiences');
        }
      }}
    />
  );
};

SignUpContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default SignUpContainer;
