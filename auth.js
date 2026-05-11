// auth.js
import { auth, db } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import { 
  doc, setDoc, collection, query, where, getDocs 
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

auth.onAuthStateChanged((user) => {
  if (user) {
    window.isAdmin = (user.email === "ArenasSibayan@gmail.com");
    console.log("✅ Logged in:", user.email);
  }
});

window.register = async (email, password, username) => {
  try {
    const q = query(collection(db, "usernames"), where("username", "==", username));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      alert("❌ This username is already taken!");
      return;
    }

    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "usernames", userCred.user.uid), { username });
    await setDoc(doc(db, "users", userCred.user.uid), { username, email });

    alert("✅ Account created successfully! Please login.");
    window.location.href = "index.html";
  } catch (e) {
    console.error(e);
    alert("Registration Error: " + e.message);
  }
};

window.login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "posts.html";
  } catch (e) {
    console.error(e);
    alert("Login Error: " + e.message);
  }
};

window.loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "posts.html";
  } catch (e) {
    console.error(e);
    alert("Google Login Error: " + e.message);
  }
};

window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
