import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyRGihbLqBJ0oLSgiaO8R7eYsifI26K-k",
  authDomain: "fb-clone-app-dbc25.firebaseapp.com",
  databaseURL: "https://fb-clone-app-dbc25.firebaseio.com",
  projectId: "fb-clone-app-dbc25",
  storageBucket: "fb-clone-app-dbc25.appspot.com",
  messagingSenderId: "363596786527",
  appId: "1:363596786527:web:6c7f975459d0051d1e64ea",
  measurementId: "G-6G8JMR52BJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
var storage = firebase.storage();

export default db; 
export { auth, provider ,storage };
