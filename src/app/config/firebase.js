import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAMDHHC76WeXprFKNBPR_lBrmcu72hIZao",
    authDomain: "revent-258121.firebaseapp.com",
    databaseURL: "https://revent-258121.firebaseio.com",
    projectId: "revent-258121",
    storageBucket: "revent-258121.appspot.com",
    messagingSenderId: "734705905523",
    appId: "1:734705905523:web:c61ba2987f6c8a8c0d1f06",
    measurementId: "G-6Z7N2JKKR7"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;