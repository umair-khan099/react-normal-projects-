// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfC2RW7hAEgX7VZ7MuvRi1dEXOpdPCOng",
  authDomain: "netxlix-gpt.firebaseapp.com",
  projectId: "netxlix-gpt",
  storageBucket: "netxlix-gpt.firebasestorage.app",
  messagingSenderId: "180639938668",
  appId: "1:180639938668:web:90148fab56974bc3b34049",
  measurementId: "G-CLQX6YCYKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);