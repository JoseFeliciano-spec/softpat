import firebase from "firebase/app";

//Código de entrada a nuestra aplicación
const firebaseConfig = {
  apiKey: "AIzaSyARDkpSlQKWZxfgdGN1Quex3Xf8E6ZRfD4",
  authDomain: "softpat-c914b.firebaseapp.com",
  databaseURL: "https://softpat-c914b.firebaseio.com",
  projectId: "softpat-c914b",
  storageBucket: "softpat-c914b.appspot.com",
  messagingSenderId: "68990363642",
  appId: "1:68990363642:web:06a0f43022d35409416643",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
