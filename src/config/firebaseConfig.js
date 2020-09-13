import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDcKCyR252EAh5yAx558RzSMxRmqBDYleE",
    authDomain: "react-blog-360.firebaseapp.com",
    databaseURL: "https://react-blog-360.firebaseio.com",
    projectId: "react-blog-360",
    storageBucket: "react-blog-360.appspot.com",
    messagingSenderId: "209465828515",
    appId: "1:209465828515:web:6a2a01eb3878d1670bcb16",
    measurementId: "G-WES429ZMBY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, auth, timestamp };
