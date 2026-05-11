// auth.js
let currentUser = null;

auth.onAuthStateChanged(user => {
    currentUser = user;
    if (user && window.location.pathname.includes('dashboard') && !isAdmin(user)) {
        window.location.href = 'posts.html';
    }
});

function isAdmin(user) {
    return user && (user.email === "YOUR_EMAIL@gmail.com"); // ← Change to your Gmail
}

async function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
    } catch (e) {
        console.error(e);
    }
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}
