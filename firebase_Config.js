// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDR9R-oq8dQAJTqCXCyCtH3zqNOMy4eWo",
  authDomain: "porfavor-da-certo.firebaseapp.com",
  projectId: "porfavor-da-certo",
  storageBucket: "porfavor-da-certo.appspot.com",
  messagingSenderId: "749338050873",
  appId: "1:749338050873:web:955a7324f43828746f68e8",
  measurementId: "G-7FN1DGHNSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;