// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwSocgfDVttFBFEBIWbSz3bIJGPw_rbuM",
  authDomain: "business-directoryapp.firebaseapp.com",
  projectId: "business-directoryapp",
  storageBucket: "business-directoryapp.appspot.com",
  messagingSenderId: "24397778712",
  appId: "1:24397778712:web:4c94ca18f871b6ed93186d",
  measurementId: "G-XFCQWC3340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
/* const analytics = getAnalytics(app); */