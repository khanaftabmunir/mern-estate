// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-35600.firebaseapp.com",
  projectId: "mern-estate-35600",
  storageBucket: "mern-estate-35600.appspot.com",
  messagingSenderId: "407021781764",
  appId: "1:407021781764:web:8598792e2bfdb7c409c651"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);