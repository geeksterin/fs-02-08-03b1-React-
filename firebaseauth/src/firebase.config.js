import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCW2E3OTfQixnXKqXLsaEk9gPMVe4a1DMo",
  authDomain: "auth-95793.firebaseapp.com",
  projectId: "auth-95793",
  storageBucket: "auth-95793.appspot.com",
  messagingSenderId: "958653497389",
  appId: "1:958653497389:web:1d96116e666ae636db38a4",
  measurementId: "G-QTBR75WS49",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
