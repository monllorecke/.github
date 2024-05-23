import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCa36akpzVLxRuYfLyFWsnjgbCKLdEUHdw",
    authDomain: "paqpaq-68b78.firebaseapp.com",
    projectId: "paqpaq-68b78",
    storageBucket: "paqpaq-68b78.appspot.com",
    messagingSenderId: "634451495302",
    appId: "1:634451495302:web:ae21def67532739c6b4407",
    measurementId: "G-R1EWXMJSY0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
