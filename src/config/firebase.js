import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore/lite';
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBel5Iz3dHe-BvCy44kvyETMCYiD_j57wI",
  authDomain: "fb-messenger-clone-37505.firebaseapp.com",
  projectId: "fb-messenger-clone-37505",
  storageBucket: "fb-messenger-clone-37505.appspot.com",
  messagingSenderId: "182072060605",
  appId: "1:182072060605:web:65a9b4d2f8ced741a225d4",
  measurementId: "G-XC3P53BP0J"
})

const db = firebaseApp;

export { db , getFirestore, collection, getDocs, addDoc, serverTimestamp }