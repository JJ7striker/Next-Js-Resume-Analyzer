// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2shMAYsqfVTLIrpQl6XtxttTB-d-1oS0",
  authDomain: "queueflow-c7af4.firebaseapp.com",
  projectId: "queueflow-c7af4",
  storageBucket: "queueflow-c7af4.firebasestorage.app",
  messagingSenderId: "1007662352175",
  appId: "1:1007662352175:web:d7248d5c77539ad59783da",
  measurementId: "G-SG0B5CPZSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();