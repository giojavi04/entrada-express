import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnFwR9lbaz6CCgWb2AMxiGkpgtsYIAjoY",
  authDomain: "entrada-express.firebaseapp.com",
  projectId: "entrada-express",
  storageBucket: "entrada-express.appspot.com",
  messagingSenderId: "821092776603",
  appId: "1:821092776603:web:47521570c837a2834a643e",
  measurementId: "G-8CYSRW1DYQ"
};

export const app = initializeApp(firebaseConfig);
