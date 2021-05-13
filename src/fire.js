import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyASsHNgimsS07iiRun8Gc6DAMVN1fev5g8",
    authDomain: "fte1-783ba.firebaseapp.com",
    projectId: "fte1-783ba",
    storageBucket: "fte1-783ba.appspot.com",
    messagingSenderId: "480628375465",
    appId: "1:480628375465:web:b0887d8116a51b6d1b8eb8",
    measurementId: "G-7R3L0EWVPV"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;