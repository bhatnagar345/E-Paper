// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmPmBB1aJRcgA-UT5UzwMzrrrFn5r2Zzw",
  authDomain: "login-3c1c8.firebaseapp.com",
  databaseURL: "https://login-3c1c8-default-rtdb.firebaseio.com",
  projectId: "login-3c1c8",
  storageBucket: "login-3c1c8.appspot.com",
  messagingSenderId: "515755714246",
  appId: "1:515755714246:web:7d0b238792fb60cf5d19c7"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default fire;