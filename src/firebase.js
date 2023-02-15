import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMly5zdgYrq_XWQ5kJjNVArv-14AwkJcU",
  authDomain: "clone-fcd24.firebaseapp.com",
  projectId: "clone-fcd24",
  storageBucket: "clone-fcd24.appspot.com",
  messagingSenderId: "427300154734",
  appId: "1:427300154734:web:9838db58051588150d257f",
  measurementId: "G-931F3161T4",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  db,
  auth,
  firebaseApp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
