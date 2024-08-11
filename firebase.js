// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6mUHOW3JmF3-f2qICvNOnkRDmqcLRdA0",
  authDomain: "inventory-125e1.firebaseapp.com",
  projectId: "inventory-125e1",
  storageBucket: "inventory-125e1.appspot.com",
  messagingSenderId: "676867028788",
  appId: "1:676867028788:web:41e65d465ffab10ea51761",
  measurementId: "G-F867KJYWQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}