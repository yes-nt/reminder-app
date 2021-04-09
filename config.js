import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDnOKgkFK-kbtpADN4zq6pKYPs3oqAdLCY",
    authDomain: "book-santa-8f2c0.firebaseapp.com",
    projectId: "book-santa-8f2c0",
    storageBucket: "book-santa-8f2c0.appspot.com",
    messagingSenderId: "814808376147",
    appId: "1:814808376147:web:37dbd9be64ee470d5537a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
