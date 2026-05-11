// auth.js
let currentUser = null;

auth.onAuthStateChanged(async (user) => {
    currentUser = user;
    if (user) {
        // Admin Check - Ito na ang Gmail mo
        window.isAdmin = (user.email === "ArenasSibayan@gmail.com");
        
        if (!window.isAdmin) {
            console.log("Viewer mode - Limited access");
        }
    }
});

async function register(email, password, username) {
    try {
        const snapshot = await db.collection("usernames").where("username", "==", username).get();
        if (!snapshot.empty) {
            alert("❌ This username is already taken!");
            return false;
        }

        const userCred = await auth.createUserWithEmailAndPassword(email, password);
        await db.collection("usernames").doc(userCred.user.uid).set({ username });
        await db.collection("users").doc(userCred.user.uid).set({ username, email });
        
        alert("✅ Account created successfully!");
        return true;
    } catch (e) {
        alert("Error: " + e.message);
        return false;
    }
}

async function login(email, password) {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
        alert("Login failed: " + e.message);
    }
}

async function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
    } catch (e) {
        alert("Google login error: " + e.message);
    }
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}
