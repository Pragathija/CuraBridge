// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB73BpqkEJkHSsmucUof6zCow3JK7BrSS0",
  authDomain: "curabridgedb.firebaseapp.com",
  projectId: "curabridgedb",
  storageBucket: "curabridgedb.firebasestorage.app",
  messagingSenderId: "723918856700",
  appId: "1:723918856700:web:b260cb24ebeaf02de15279",
  measurementId: "G-2ZM7FC1RRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);