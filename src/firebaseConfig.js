// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJF1bAiWVTsGzZEJZk2ru8BJMuxNaWyAU",
  authDomain: "infusion-webapp-auth.firebaseapp.com",
  projectId: "infusion-webapp-auth",
  storageBucket: "infusion-webapp-auth.appspot.com",
  messagingSenderId: "30572949639",
  appId: "1:30572949639:web:d157d4416b2af6fda28822",
  measurementId: "G-LCPJEFLHB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;