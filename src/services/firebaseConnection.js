import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDrchZGCHZlqsrxVvVlJv61btJ6Tf0neQo",
    authDomain: "meuapp-c94e3.firebaseapp.com",
    databaseURL: "https://meuapp-c94e3-default-rtdb.firebaseio.com",
    projectId: "meuapp-c94e3",
    storageBucket: "meuapp-c94e3.appspot.com",
    messagingSenderId: "673945456088",
    appId: "1:673945456088:web:ef1c905b4f25ce475736ad",
    measurementId: "G-61QRDT0JNH"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;