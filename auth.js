// auth.js
import { auth, db } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { doc, setDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

let currentUser = null;

auth.onAuthStateChanged((user) => {
  currentUser = user;
  if (user) {
    window.isAdmin = (user.email === "ArenasSibayan@gmail.com");
  }
});

export async function register(email, password, username) {
  try {
    const q = query(collection(db, "usernames"), where("username", "==", username));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      alert("❌ This username is already taken!");
      return false;
    }

    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    
    await setDoc(doc(db, "usernames", userCred.user.uid), { username });
    await setDoc(doc(db, "users", userCred.user.uid), { username, email });

    alert("✅ Account created successfully!");
    return true;
  } catch (e) {
    alert("Error: " + e.message);
    return false;
  }
}

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    alert("Login failed: " + e.message);
  }
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    alert("Google login error: " + e.message);
  }
}

export function logout() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}
