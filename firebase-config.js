import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0Wmk4lSPADXtNV2sPYE5RgBXlP8CGhq0",
  authDomain: "mijn-website-52c23.firebaseapp.com",
  projectId: "mijn-website-52c23",
  storageBucket: "mijn-website-52c23.firebasestorage.app",
  messagingSenderId: "680266689604",
  appId: "1:680266689604:web:e65525f9bb7cacf8aba011",
  measurementId: "G-GZKMBEXED5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };