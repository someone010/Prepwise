import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9SKO8YOx_swFeDIBsCROUazt8J_Pu9wI",
  authDomain: "prepwise-b7d34.firebaseapp.com",
  projectId: "prepwise-b7d34",
  storageBucket: "prepwise-b7d34.firebasestorage.app",
  messagingSenderId: "194366900586",
  appId: "1:194366900586:web:814d08adc9b58cd8f6fd13",
  measurementId: "G-V4ZZ0DC52T",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
