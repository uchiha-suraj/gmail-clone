import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1BRqTp29zai634K81ucO08mDaDbdbPK0",
    authDomain: "clone-49731.firebaseapp.com",
    projectId: "clone-49731",
    storageBucket: "clone-49731.appspot.com",
    messagingSenderId: "1060781095087",
    appId: "1:1060781095087:web:d17a141a0c81f2b2b9bc5a",
    measurementId: "G-BFYE2PTMXL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };