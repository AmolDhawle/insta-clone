import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFgYOCMiEbTzOL7wpwp6eDat6286Jnzuc",
  authDomain: "insta-clone-665e8.firebaseapp.com",
  projectId: "insta-clone-665e8",
  storageBucket: "insta-clone-665e8.appspot.com",
  messagingSenderId: "845216197401",
  appId: "1:845216197401:web:51d891e02224cb62a3b388",
  measurementId: "G-JER538GWK9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};