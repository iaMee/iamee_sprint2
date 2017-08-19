const Rebase = require('re-base');
const firebase = require('firebase');
const app = firebase.initializeApp({
  apiKey: 'AIzaSyAfl7lOzRxtbU2IsS81xOenmdUtbJScXug',
  authDomain: 'iamee-2.firebaseapp.com',
  databaseURL: 'https://iamee-2.firebaseio.com',
  projectId: 'iamee-2',
  storageBucket: 'iamee-2.appspot.com',
  messagingSenderId: '113928087640'
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

export { firebase, base };
