// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRBASE_API_KEY,
  authDomain: "queueflow-c7af4.firebaseapp.com",
  projectId: "queueflow-c7af4",
  storageBucket: "queueflow-c7af4.firebasestorage.app",
  messagingSenderId: "1007662352175",
  appId: "1:1007662352175:web:ba9b92a62783ffb99783da",
  measurementId: "G-9JC6HNYR23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();