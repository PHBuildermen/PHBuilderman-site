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
  if (user) window.isAdmin = (user.email === "ArenasSibayan@gmail.com");
});

window.register = async (email, password, username) => {
  try {
    const q = query(collection(db, "usernames"), where("username", "==", username));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) return alert("❌ Username already taken!");

    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "usernames", userCred.user.uid), { username });
    await setDoc(doc(db, "users", userCred.user.uid), { username, email });

    alert("✅ Account created! You can now login.");
  } catch (e) {
    alert("Error: " + e.message);
  }
};

window.loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "posts.html";
  } catch (e) {
    alert("Google Error: " + e.message);
  }
};

window.logout = () => signOut(auth).then(() => window.location.href = "index.html");
