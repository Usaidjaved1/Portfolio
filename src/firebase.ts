// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJhV3zEFtk4dn4X07iIGN7a1Kj6Yy_2zQ",
  authDomain: "portfolio-project-ee8fd.firebaseapp.com",
  projectId: "portfolio-project-ee8fd",
  storageBucket: "portfolio-project-ee8fd.firebasestorage.app",
  messagingSenderId: "1084110315540",
  appId: "1:1084110315540:web:1fed54630bc53d2c874701",
  measurementId: "G-73B1E4J02T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
