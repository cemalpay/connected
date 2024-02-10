// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8QpK-UO5Br-BfW7-NjYK416n0D-8tk9k",
  authDomain: "connected-9fe99.firebaseapp.com",
  databaseURL:
    "https://connected-9fe99-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "connected-9fe99",
  storageBucket: "connected-9fe99.appspot.com",
  messagingSenderId: "639643184468",
  appId: "1:639643184468:web:3130989cc1f94cdfacacc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
