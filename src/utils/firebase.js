// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShimteC4gRQcmmqG566CD_n--xxSeCoU",
  authDomain: "connected-e87d5.firebaseapp.com",
  projectId: "connected-e87d5",
  storageBucket: "connected-e87d5.appspot.com",
  messagingSenderId: "1083023383871",
  appId: "1:1083023383871:web:88b98bb755d8422028478a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
