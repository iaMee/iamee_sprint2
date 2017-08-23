import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import SignUp from 'components/templates/SignUp';
import { firebase } from 'data/firebase';

const provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('email');

const onClickFacebook = () => {
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

const enhancer = compose(
  withProps({
    listeners : { onClickFacebook },
  }),
);

export default enhancer(SignUp);
