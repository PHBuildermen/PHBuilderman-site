// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",   // ← PALITAN MO ITO
  authDomain: "phbuilderman-site.firebaseapp.com", // ← PALITAN MO ITO
  projectId: "phbuilderman-site",                  // ← PALITAN MO ITO
  storageBucket: "phbuilderman-site.appspot.com",
  messagingSenderId: "123456789012",               // ← PALITAN MO ITO
  appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxxxxxx" // ← PALITAN MO ITO
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
