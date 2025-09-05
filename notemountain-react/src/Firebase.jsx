// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyC_oTpaEYRJE0Xo7m7v9g5iQ21jiT3YBxU",
  authDomain: "mountainnoteproject.firebaseapp.com",
  projectId: "mountainnoteproject",
  storageBucket: "mountainnoteproject.firebasestorage.app",
  messagingSenderId: "1050052548797",
  appId: "1:1050052548797:web:3d01b0e1b492d6fdb1ffd4",
  measurementId: "G-GYGE5RJ9FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);