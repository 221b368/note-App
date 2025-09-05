// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV-45VPMvxu8WjNKYqQs3USNwid10gZhs",
    authDomain: "mountain-note-app.firebaseapp.com",
    projectId: "mountain-note-app",
    storageBucket: "mountain-note-app.firebasestorage.app",
    messagingSenderId: "736976945146",
    appId: "1:736976945146:web:78ce0e73de2679a370ae43"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
