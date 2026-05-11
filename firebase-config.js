// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC61bm4frpqqVwqYiK87FARe78lzH88Hng",
  authDomain: "phbuilderman-site.firebaseapp.com",
  projectId: "phbuilderman-site",
  storageBucket: "phbuilderman-site.firebasestorage.app",
  messagingSenderId: "777840097655",
  appId: "1:777840097655:web:eccaefaf541d617e794972",
  measurementId: "G-4NKNN8ZFKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
