import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCB9to_nzzVovF9Uq7d8b5ucM98d59wf6I",
    authDomain: "react-firestore-a11aa.firebaseapp.com",
    databaseURL: "https://react-firestore-a11aa.firebaseio.com",
    projectId: "react-firestore-a11aa",
    storageBucket: "react-firestore-a11aa.appspot.com",
    messagingSenderId: "89836184397",
    appId: "1:89836184397:web:b37d7f8b0e3266143e0d04",
    measurementId: "G-WW1E67FQJH"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;
