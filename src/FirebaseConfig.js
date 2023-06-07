// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, gitFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDln24mCso33hK3dMESXEtQAA_cF8Wie9A",
  authDomain: "araliya-land--sale-proj.firebaseapp.com",
  projectId: "araliya-land--sale-proj",
  storageBucket: "araliya-land--sale-proj.appspot.com",
  messagingSenderId: "352797508582",
  appId: "1:352797508582:web:5d78eb6f0d3a4c77150c27"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()