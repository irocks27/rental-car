// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmRkyJ_G4kh9bUt7iyR3K-ObLd3wsSCoU",
  authDomain: "rentalapp-6c770.firebaseapp.com",
  projectId: "rentalapp-6c770",
  storageBucket: "rentalapp-6c770.firebasestorage.app",
  messagingSenderId: "783077915505",
  appId: "1:783077915505:web:63b91b4e6ae3daa7b5d4d0",
  measurementId: "G-QEHHYN1ECK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
