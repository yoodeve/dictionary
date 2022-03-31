// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqYCx9XRGRVKZt1dMyEpB-efvttPqpDVs",
  authDomain: "diction-d3c38.firebaseapp.com",
  projectId: "diction-d3c38",
  storageBucket: "diction-d3c38.appspot.com",
  messagingSenderId: "224976228131",
  appId: "1:224976228131:web:21c6b055bc56c827cd0696",
  measurementId: "G-BYHYR92M9H"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();