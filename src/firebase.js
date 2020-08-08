import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBRmgUCvotVaMRtTJ8iwsFw6JJr864K5JQ",
    authDomain: "tinder-clone-5d8d3.firebaseapp.com",
    databaseURL: "https://tinder-clone-5d8d3.firebaseio.com",
    projectId: "tinder-clone-5d8d3",
    storageBucket: "tinder-clone-5d8d3.appspot.com",
    messagingSenderId: "658948365838",
    appId: "1:658948365838:web:c7d9282ec8aa076b9fa65f",
    measurementId: "G-DRNDCP7J3Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;