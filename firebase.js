// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChLLFaCM3_ZhMZEZ7XD1rzlC3QuZpiN2w",
  authDomain: "inventory-management-a4f11.firebaseapp.com",
  projectId: "inventory-management-a4f11",
  storageBucket: "inventory-management-a4f11.appspot.com",
  messagingSenderId: "155247323836",
  appId: "1:155247323836:web:36434297a279c7ab8a7eb9",
  measurementId: "G-6BMTBYNBFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};