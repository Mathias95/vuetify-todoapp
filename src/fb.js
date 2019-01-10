  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAQdgCmPJGxQiE4T_9kwPwF-EiDRTyBxEM",
    authDomain: "my-todo-9ca75.firebaseapp.com",
    databaseURL: "https://my-todo-9ca75.firebaseio.com",
    projectId: "my-todo-9ca75",
    storageBucket: "my-todo-9ca75.appspot.com",
    messagingSenderId: "901323064913"
  };
  firebase.initializeApp(config);

  const db  = firebase.firestore();

  db.settings({timestampsInSnapshots: true});

  export default db;