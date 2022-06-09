// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKDd7k_mG6OyfF3fY5ogXOWIyxXaB6CbE",
  authDomain: "good-life-68d8f.firebaseapp.com",
  projectId: "good-life-68d8f",
  storageBucket: "good-life-68d8f.appspot.com",
  messagingSenderId: "931771482179",
  appId: "1:931771482179:web:4b160f834eca29e36894f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;