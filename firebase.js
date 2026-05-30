// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCyY0EgAxSXTw1EMR935Ub5y5UPHK4Nd9E",
  authDomain: "target-market-et.firebaseapp.com",
  projectId: "target-market-et",
  storageBucket: "target-market-et.firebasestorage.app",
  messagingSenderId: "731946391519",
  appId: "1:731946391519:web:a817fc424882f332c6d66a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;

console.log("Firebase Connected Successfully");
