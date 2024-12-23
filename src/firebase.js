import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your Firebase configuration details
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
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, getDocs, storage };
