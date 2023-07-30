// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//---hidden---


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//getAuth is to tell our app that we will be adding authentication to it
export const auth = getAuth(app);

//GoogleAuthProvider is to choose google as a way to sign in
export const provider = new GoogleAuthProvider();

//making a connection to FireStore
export const db = getFirestore(app);