import React from 'react';
import PropTypes from 'prop-types';
import SignUp from 'components/templates/SignUp';
import { firebase } from 'data/firebase';

const provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('email');

const signInWithFacebook = () => {
  firebase.auth().signInWithRedirect(provider);
};
// firebase
// 	.auth()
// 	.getRedirectResult()
// 	.then(function(result) {
// 		if (result.credential) {
// 			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
// 			var token = result.credential.accessToken;
// 			// ...
// 		}
// 		// The signed-in user info.
// 		var user = result.user;
// 	})
// 	.catch(function(error) {
// 		// Handle Errors here.
// 		var errorCode = error.code;
// 		var errorMessage = error.message;
// 		// The email of the user's account used.
// 		var email = error.email;
// 		// The firebase.auth.AuthCredential type that was used.
// 		var credential = error.credential;
// 		// ...
// 	});

const SignUpContainer = ({ history }) => {
  return (
    <SignUp
      listeners={{
        onClickFacebook: signInWithFacebook,
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
