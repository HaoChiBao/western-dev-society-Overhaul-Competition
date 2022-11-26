// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-R6tTXgQaucUQi5iFfpgMIYvCcutD7sU",
  authDomain: "euclid-cafe.firebaseapp.com",
  projectId: "euclid-cafe",
  storageBucket: "euclid-cafe.appspot.com",
  messagingSenderId: "31154866415",
  appId: "1:31154866415:web:28803d1325db6744acb31a",
  measurementId: "G-77H0NF8CLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);